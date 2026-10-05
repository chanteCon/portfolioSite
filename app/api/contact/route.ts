import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

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
                {
                    From: {
                        Email: process.env.EMAIL_FROM,
                        Name: 'Chantelle',
                    },
                    To: [
                        {
                            Email: email,
                            Name: name,
                        },
                    ],
                    Subject: 'Thanks for reaching out!',
                    TextPart: `Hello ${name.charAt(0).toUpperCase() + name.slice(1)},\nThank you for reaching out :).\nI have received your message and will get back to you as quickly as possible.\nFrom,\nChantelle`,
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
