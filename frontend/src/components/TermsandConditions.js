import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function TermsAndConditions() {
  return (
    <div>
    <Navbar/>
    <div className="container mx-auto mt-14 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="mb-4">
            Welcome to Event Connect! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing or using Event Connect, you agree to be bound by these terms. If you disagree with any part of the terms, please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="mb-4">
            Event Connect is an online platform that connects event organizers with attendees. Our platform provides various tools and features to facilitate event planning, promotion, and management.
          </p>

          <h2 className="text-2xl font-semibold mb-2">2. User Accounts</h2>
          <p className="mb-4">
            To access certain features of our platform, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-semibold mb-2">3. Acceptable Use</h2>
          <p className="mb-4">
            You agree to use Event Connect in accordance with all applicable laws and regulations. You must not use our platform to engage in any unlawful or harmful activities, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Posting or transmitting any content that is unlawful, harmful, or offensive</li>
            <li>Impersonating any person or entity</li>
            <li>Interfering with the operation of our platform</li>
            <li>Collecting or storing personal data of other users without their consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
          <p className="mb-4">
            The content, features, and functionality of Event Connect are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works based on our content without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p className="mb-4">
            Event Connect is provided on an "as is" and "as available" basis. We do not warrant that our platform will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, we disclaim all warranties and shall not be liable for any damages arising out of your use of our platform.
          </p>

          <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting the revised terms on our website. Your continued use of Event Connect after the posting of changes constitutes your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="mb-4">If you have any questions, feel free to reach out to us at: <a href="mailto:eventconnect123@gmail.com" className="text-blue-500 underline">
        eventconnect123@gmail.com
              </a>
              </p>

          <p className="text-center font-bold mt-6">Thank you for using Event Connect!</p>
        </div>
      </div>
        <Footer />
        </div>
    </div>
  );
}
