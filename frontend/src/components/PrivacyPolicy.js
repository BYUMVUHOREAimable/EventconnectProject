import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8 mt-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy and Policies</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Event Connect! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect information about you in various ways. This includes information you provide directly to us, information we collect automatically, and information we obtain from third parties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>To provide, maintain, and improve our services.</li>
            <li>To communicate with you about your account or transactions.</li>
            <li>To send you updates, promotions, and marketing information.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
          <p className="text-gray-700 leading-relaxed">
            You have choices regarding the collection and use of your information. You can choose not to provide certain information or opt out of certain communications.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about our Privacy Policy, please contact us at: <a href="mailto:eventconnect123@gmail.com" className="text-blue-500 underline">
            eventconnect123@gmail.com
            </a>
             </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
