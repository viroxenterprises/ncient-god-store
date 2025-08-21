
'use client'

import { useState } from 'react'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-8">
        Contact Us
      </h1>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-gold focus:border-gold"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
