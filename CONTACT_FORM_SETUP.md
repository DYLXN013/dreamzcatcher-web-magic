# Contact Form Setup Guide

Your contact form is now ready to be configured! Here are several options to make it functional:

## Option 1: EmailJS (Recommended - Easiest)

EmailJS allows you to send emails directly from your frontend without a backend server.

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to Email Templates → Create New Template
   - Use this template:

```html
Subject: New Contact Form Submission - {{name}}

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Event Type: {{eventType}}
Event Date: {{eventDate}}
Budget: {{budget}}

Message:
{{message}}
```

4. **Get Your Credentials**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account → API Keys

5. **Update the Contact Form**
   Replace the placeholders in `src/pages/Contact.tsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID', // Replace with actual Service ID
     'YOUR_TEMPLATE_ID', // Replace with actual Template ID
     formRef.current!,
     'YOUR_PUBLIC_KEY' // Replace with actual Public Key
   );
   ```

## Option 2: Formspree (Alternative - No Setup)

Formspree provides a simple form endpoint.

### Setup Steps:

1. **Sign up at [formspree.io](https://formspree.io/)**
2. **Create a new form**
3. **Get your form endpoint URL**
4. **Update the form action**:

```javascript
// Replace the handleSubmit function with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      toast.success("Thank you for your inquiry! We'll be in touch soon.");
      // Reset form...
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    toast.error("Sorry, there was an error sending your message.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 3: Netlify Forms (If Deploying to Netlify)

If you're deploying to Netlify, you can use their built-in form handling.

### Setup Steps:

1. **Add form attributes**:
```html
<form ref={formRef} onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="contact">
```

2. **Add hidden input**:
```html
<input type="hidden" name="form-name" value="contact" />
```

3. **Update handleSubmit**:
```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });
    
    if (response.ok) {
      toast.success("Thank you for your inquiry! We'll be in touch soon.");
      // Reset form...
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    toast.error("Sorry, there was an error sending your message.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 4: Custom Backend API

For a more professional setup, create a backend API.

### Example with Node.js/Express:

1. **Create backend server**:
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, eventType, eventDate, budget, message } = req.body;
    
    // Configure email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
      }
    });
    
    // Send email
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'dreamcatcherz@gmail.com',
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

2. **Update frontend**:
```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('http://localhost:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      toast.success("Thank you for your inquiry! We'll be in touch soon.");
      // Reset form...
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    toast.error("Sorry, there was an error sending your message.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Recommended Approach

For your event planning website, I recommend **Option 1 (EmailJS)** because:
- ✅ No backend required
- ✅ Easy to set up
- ✅ Reliable and professional
- ✅ Free tier available
- ✅ Works with any hosting platform

## Next Steps

1. Choose your preferred option
2. Follow the setup steps
3. Test the form thoroughly
4. Deploy and monitor for any issues

The form is now ready to be configured with any of these options! 