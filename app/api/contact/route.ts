import { ApiError } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server';
import { z } from 'zod';
export async function POST(request: Request) {
    const contactSchema = z.object({
        name: z.string().min(1).max(50),
        email: z.email(),
        message: z.string().min(1).max(250),
        turnstileToken: z.string().min(1),
        company: z.string().optional(),
    });

    const result = contactSchema.safeParse(await request.json());

    if (!result.success) {
        throw new ApiError(400, 'Invalid input');
    }

    const { name, email, message, company, turnstileToken } = result.data;
    if (company) {
        return Response.json({ success: true });
    }

    const turnstileResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: turnstileToken,
            }),
        },
    );

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
        return NextResponse.json({ success: true });
    }

    const credentials = Buffer.from(`${process.env.EMAIL_USER}:${process.env.EMAIL_PASS}`).toString(
        'base64',
    );

    const response = await fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${credentials}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Messages: [
                {
                    From: {
                        Email: process.env.EMAIL_FROM,
                        Name: 'Portfolio Contact Form',
                    },
                    To: [
                        {
                            Email: process.env.EMAIL_TO,
                            Name: 'Chantelle',
                        },
                    ],
                    ReplyTo: {
                        Email: email,
                        Name: name,
                    },
                    Subject: `New portfolio message from ${name}`,
                    TextPart: `Name: ${name}
                    Email: ${email}

                    Message:
                    ${message}`,
                },
            ],
        }),
    });

    if (!response.ok) {
        const error = await response.text();

        console.error('Mailjet error:', response.status, error);

        return NextResponse.json(
            { success: false, message: 'Failed to send message' },
            { status: 500 },
        );
    }

    return NextResponse.json({ success: true });
}
