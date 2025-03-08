"use client"
import { useEffect } from 'react'
import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

// export const metadata: Metadata = {
//   title: "Privacy Policy",
//   description: "Learn about how we collect, use, and protect your personal information.",
// }

export default function PrivacyPolicyPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).analytics) {
      (window as any).analytics.track("PageView");
    }
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 8, 2025</p>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          At Best Documentaries, we take your privacy seriously. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website.
        </p>

        <Separator className="my-6" />

        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us when you:</p>
        <ul>
          <li>Create an account</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us</li>
          <li>Participate in surveys or promotions</li>
        </ul>
        <p>
          The types of information we may collect include your name, email address, postal address, phone number, and
          any other information you choose to provide.
        </p>

        <h3>Information Automatically Collected</h3>
        <p>When you access or use our website, we automatically collect certain information, including:</p>
        <ul>
          <li>Log information (IP address, browser type, pages viewed)</li>
          <li>Device information (hardware model, operating system)</li>
          <li>Location information</li>
          <li>Cookies and similar technologies</li>
        </ul>

        <Separator className="my-6" />

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and administrative messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Personalize and improve your experience</li>
        </ul>

        <Separator className="my-6" />

        <h2>Sharing of Information</h2>
        <p>We may share your information as follows:</p>
        <ul>
          <li>With vendors, consultants, and other service providers</li>
          <li>In response to a request for information if required by law</li>
          <li>
            If we believe disclosure is necessary to protect the rights, property, or safety of Best Documentaries, our
            users, or the public
          </li>
          <li>
            In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition
          </li>
        </ul>

        <Separator className="my-6" />

        <h2>Your Choices</h2>
        <p>You have several choices regarding the use of information on our services:</p>
        <ul>
          <li>
            <strong>Account Information:</strong> You may update, correct, or delete your account information at any
            time by logging into your account.
          </li>
          <li>
            <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to
            set your browser to remove or reject cookies.
          </li>
          <li>
            <strong>Promotional Communications:</strong> You may opt out of receiving promotional emails from us by
            following the instructions in those emails.
          </li>
        </ul>

        <Separator className="my-6" />

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          Best Documentaries
          <br />
          123 Documentary Lane
          <br />
          San Francisco, CA 94103
          <br />
          United States
          <br />
          Email: privacy@bestdocumentaries.com
        </p>
      </div>
    </div>
  )
}

