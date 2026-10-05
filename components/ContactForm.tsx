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
        <div className="flex flex-col gap-5">
            <h1 className="text-primary">Send me a message and I&apos;ll get back to you</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <FormField
                    id="name"
                    label="name"
                    fieldErrors={fieldErrors}
                    setFieldErrors={setFieldErrors}
                    type="text"
                />
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={
                        fieldErrors['message']
                            ? 'border-destructive resize-none h-[150px]'
                            : 'resize-none h-[150px]'
                    }
                    placeholder="Type message here"
                    maxLength={MESSAGE_MAX_LENGTH}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        setFieldErrors((current) => {
                            const { ['message']: _, ...remaining } = current;
                            return remaining;
                        });
                    }}
                />
                {message.length > 0 && (
                    <p>{`Characters remaing: ${MESSAGE_MAX_LENGTH - message.length}`} </p>
                )}
                {fieldErrors['message'] && (
                    <p className="text-destructive">{fieldErrors['message']}</p>
                )}
                <FormField
                    id="email"
                    label="email"
                    fieldErrors={fieldErrors}
                    setFieldErrors={setFieldErrors}
                    type="email"
                />
                <Button disabled={isSubmitting} type="submit">
                    {isSubmitting ? 'Sending' : 'Send message'}
                </Button>
            </form>
        </div>
    );
}
