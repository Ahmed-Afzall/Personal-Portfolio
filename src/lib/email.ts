import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_j70u3nd';
const TEMPLATE_ID = 'template_o23zyyk';
const PUBLIC_KEY = '3e-xBsZhW5D2ej5P1';

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      PUBLIC_KEY
    );
    return { success: true, text: result.text };
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    return { success: false, text: error?.text || 'Failed to send message.' };
  }
};
