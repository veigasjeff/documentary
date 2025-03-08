"use client"
import { useEffect } from 'react'
import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

// export const metadata: Metadata = {
//   title: "Terms of Service",
//   description: "Read our terms of service and user agreement.",
// }

export default function TermsOfServicePage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).analytics) {
      (window as any).analytics.track("PageView");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground mb-6">Last updated: March 8, 2025</p>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Best Documentaries
          website (the "Service") operated by Best Documentaries ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the
          terms, then you may not access the Service.
        </p>

        <Separator className="my-6" />

        <h2>Content</h2>
        <p>Our Service allows you to view documentary content that is available through the Service.</p>
        <p>
          The content displayed on or through the Service is protected by copyright and other intellectual property
          laws. You may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create
          derivative works based on, distribute, perform, display, or in any way exploit, any of the content, in whole
          or in part, without our prior written consent.
        </p>

        <Separator className="my-6" />

        <h2>Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password, whether your password is with our Service or a third-party service.
        </p>
        <p>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware
          of any breach of security or unauthorized use of your account.
        </p>

        <Separator className="my-6" />

        <h2>Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Best
          Documentaries.
        </p>
        <p>
          Best Documentaries has no control over, and assumes no responsibility for, the content, privacy policies, or
          practices of any third-party web sites or services. You further acknowledge and agree that Best Documentaries
          shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
          caused by or in connection with the use of or reliance on any such content, goods, or services available on or
          through any such web sites or services.
        </p>
        <p>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or
          services that you visit.
        </p>

        <Separator className="my-6" />

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
          you may simply discontinue using the Service.
        </p>

        <Separator className="my-6" />

        <h2>Limitation Of Liability</h2>
        <p>
          In no event shall Best Documentaries, nor its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
          access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party
          on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration
          of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any
          other legal theory, whether or not we have been informed of the possibility of such damage.
        </p>

        <Separator className="my-6" />

        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>

        <Separator className="my-6" />

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          Best Documentaries
          <br />
          123 Documentary Lane
          <br />
          San Francisco, CA 94103
          <br />
          United States
          <br />
          Email: terms@bestdocumentaries.com
        </p>
      </div>
    </div>
  )
}

