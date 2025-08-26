"use client"
import React from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState } from 'react';
import { FormEvent } from 'react';

const page = () => {

    const [email,setEmail]  = useState("");
    const [message,setMessage]  = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };
  return (
    <div className='min-h-screenpy-12 pt-36'>
        <BackgroundBeams  className="absolute top-0 left-0 w-full h-full z-0" />

        <div className='max-w-2xl mx-auto p-4 relative z-10'>

        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        <form action={handleSubmit} className="w-full  rounded-2xl mt-12  space-y-6">
        

        {/* Email */}
        <div>
       
          <input
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div>
        
          <textarea
            rows={4}
            value={message}
            placeholder="Write your message..."
            onChange={(event)=>setMessage(event.target.value)}
            className="w-full px-3 py-2 border border-gray-700 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-black border border-gray-700 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold  transition"
        >
          Send Message
        </button>
      </form>
        </div>
    </div>
  );
}

export default page;
