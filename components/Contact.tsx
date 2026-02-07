"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        {submitted ? (
          <p className="text-green-600">Thanks! I’ll get back to you soon.</p>
        ) : (
          <form
            action="https://formspree.io/f/xvzboaaz"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border px-4 py-3 rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full border px-4 py-3 rounded-md"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="w-full border px-4 py-3 rounded-md"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
