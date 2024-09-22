import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://your-server.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('An error occurred.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <Toaster />
      <div className="container mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-mutedText">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-mutedText">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-mutedText">Message</label>
            <textarea
              id="message"
              rows="4"
              {...register('message', { required: 'Message is required' })}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
