'use client';

import FormField from './FormField';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export default function ContactForm() {
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    type Field = 'name' | 'email' | 'message';
    type FieldErrors = Partial<Record<Field, string>>;

    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const MESSAGE_MAX_LENGTH = 250;
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        const formData = new FormData(e.currentTarget);
        const name = checkField('name', formData);
        const email = checkField('email', formData);
        const message = checkField('message', formData);

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
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

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
        <div className="flex flex-col gap-5 w-full md:ml-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

                <Button disabled={isSubmitting} type="submit" className="mt-2 w-full max-w-[150px]">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
            </form>
        </div>
    );
}
