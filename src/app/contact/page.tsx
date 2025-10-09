'use client';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  async function sendMessage() {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
    if (res.ok) setSent(true);
  }

  return (
    <main className="container">
      <h2>Contact Us</h2>
      {sent ? (
        <p>Thank you! We’ll get back to you shortly.</p>
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
          <button type="submit">Send</button>
        </form>
      )}
    </main>
  );
}
