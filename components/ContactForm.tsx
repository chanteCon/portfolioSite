'use client';

import { toast } from 'sonner';
import FormField from './FormField';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { cn } from '@/lib/utils';

export default function ContactForm({ className }: { className?: string }) {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    type Field = 'name' | 'email' | 'message' | 'company';
    type FieldErrors = Partial<Record<Field, string>>;

    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const MESSAGE_MAX_LENGTH = 250;
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!turnstileToken) {
            toast.error('Unable to verify your request. Please try again.');
            return;
        }
        const form = e.currentTarget;

        const formData = new FormData(e.currentTarget);
        const name = checkField('name', formData);
        const email = checkField('email', formData);
        const message = checkField('message', formData);
        const company = formData.get('company');

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    company: company ?? '',
                    turnstileToken,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast('Message sent!');

            form.reset();
            setMessage('');
            setFieldErrors({});
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const checkField = (fieldId: Field, formData: FormData) => {
        const data = formData.get(fieldId);

        if (typeof data !== 'string' || !data.trim()) {
            setFieldErrors((current) => ({
                ...current,
                [fieldId]: `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required`,
            }));
            return null;
        }

        if (fieldId === 'name' && (data.length < 2 || data.length > 50)) {
            setFieldErrors((current) => ({
                ...current,
                name: 'Name must be between 2 and 50 characters',
            }));
            return null;
        }

        if (fieldId === 'message' && data.length > 250) {
            setFieldErrors((current) => ({
                ...current,
                message: 'Message must be 250 characters or less',
            }));
            return null;
        }

        return data;
    };
    return (
        <div className={cn(className, 'flex flex-col gap-5 w-full max-w-100 md:max-w-full')}>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <FormField
                        id="name"
                        label="Name"
                        fieldErrors={fieldErrors}
                        setFieldErrors={setFieldErrors}
                        type="text"
                    />
                    <FormField
                        id="email"
                        label="Email"
                        fieldErrors={fieldErrors}
                        setFieldErrors={setFieldErrors}
                        type="email"
                    />
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={6}
                            className={
                                fieldErrors.message
                                    ? 'h-[150px] resize-none border-destructive'
                                    : 'h-[150px] resize-none'
                            }
                            placeholder="Enter message here..."
                            maxLength={MESSAGE_MAX_LENGTH}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setFieldErrors((current) => {
                                    const { message: _, ...remaining } = current;
                                    return remaining;
                                });
                            }}
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            {fieldErrors.message ? (
                                <p className="text-destructive">{fieldErrors.message}</p>
                            ) : (
                                <span />
                            )}
                            {message.length > 0 && (
                                <p>{MESSAGE_MAX_LENGTH - message.length} characters remaining</p>
                            )}
                        </div>
                    </div>
                </div>
                <FormField
                    id="company"
                    label=""
                    className={'hidden'}
                    fieldErrors={fieldErrors}
                    setFieldErrors={setFieldErrors}
                    type="text"
                />
                <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                    className="mt-5"
                    options={{
                        theme: 'auto',
                        size: 'flexible',
                    }}
                />
                <Button
                    disabled={isSubmitting || !turnstileToken}
                    type="submit"
                    className="mt-5 w-full max-w-[150px]"
                >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
            </form>
        </div>
    );
}
