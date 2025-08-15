
'use server';

import { z } from 'zod';
import { firestore } from '@/lib/firebase';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMap = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMap)[0]?.[0] ?? 'Invalid data provided. Please check the form and try again.';
    return {
      message: firstError,
      success: false,
    };
  }
  
  const data = {
    ...validatedFields.data,
    submittedAt: new Date(),
  };

  try {
    // Save to Firestore
    if (firestore) {
      await firestore.collection('contacts').add(data);
      console.log('Contact form data saved to Firestore.');
    } else {
      console.warn('Firestore not initialized. Skipping saving to Firestore.');
    }

    // Save to Google Sheet
    const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbx3Qtn1pbnqg5Dqf9jrLFu51QPcyHf8FC8aL5eHRxnp57S5Qztd3swGusrkylsv32nlNg/exec';
    if (googleSheetUrl && !googleSheetUrl.includes('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE')) {
        await fetch(googleSheetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...data,
                submittedAt: data.submittedAt.toISOString(),
            }),
            cache: 'no-cache',
        });
        console.log('Contact form data sent to Google Sheet.');
    } else {
      console.warn('Google Sheets URL not configured. Skipping submission to Google Sheets.');
    }

    return {
      message: 'Thank you for your message! We will get back to you soon.',
      success: true,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
