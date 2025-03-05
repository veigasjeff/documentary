import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | Best Documentaries",
  description: "Our DMCA policy explains how we handle copyright infringement claims and content removal requests.",
};

export default function DMCACompliancePage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">DMCA Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">Last Updated: March 4, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Best Documentaries respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to copyright infringement claims filed with the proper documentation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Reporting Copyright Infringement</h2>
        <p>
          If you believe that content available on our website infringes upon your copyright, you may submit a DMCA takedown notice by providing the following information in writing:
        </p>
        <ul className="list-disc pl-6 my-4">
          <li>A description of the copyrighted work that has been infringed.</li>
          <li>The exact URL or location of the infringing content.</li>
          <li>Your name, mailing address, phone number, and email address.</li>
          <li>A statement that you have a good faith belief that the use of the content is unauthorized by the copyright owner.</li>
          <li>A statement, under penalty of perjury, that the information provided is accurate and that you are authorized to act on behalf of the copyright owner.</li>
          <li>Your physical or electronic signature.</li>
        </ul>

        <p>
          Send your DMCA notice to: <strong>bestdocumentaries2025@gmail.com</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Counter-Notification</h2>
        <p>
          If you believe that your content was removed in error, you may file a counter-notification by providing the following information:
        </p>
        <ul className="list-disc pl-6 my-4">
          <li>Your contact information, including name, address, phone number, and email.</li>
          <li>Identification of the removed content and its previous location.</li>
          <li>A statement, under penalty of perjury, that you believe the removal was a mistake or misidentification.</li>
          <li>A statement consenting to the jurisdiction of the federal court in your location.</li>
          <li>Your physical or electronic signature.</li>
        </ul>
        <p>
          Send your counter-notification to: <strong>bestdocumentaries2025@gmail.com</strong>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Policy on Repeat Infringers</h2>
        <p>
          We reserve the right to terminate access to users who are found to repeatedly infringe copyrights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Policy</h2>
        <p>
          We may update this DMCA Policy from time to time. Please check this page periodically for changes.
        </p>
      </div>
    </div>
  );
}
