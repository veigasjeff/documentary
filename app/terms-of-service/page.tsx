import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Best Documentaries",
  description: "Our terms of service outline the rules and guidelines for using the Best Documentaries platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">Last Updated: March 4, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Best Documentaries, you accept and agree to be bound by the terms and provision of this
          agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <p>
          Best Documentaries provides users with access to a curated collection of documentary films and related
          content. The service includes the website, its features, and any other media, software, or materials
          accessible through the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct</h2>
        <p>
          You agree to use Best Documentaries only for lawful purposes and in a way that does not infringe the rights
          of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing
          or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting
          the normal flow of dialogue within the website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <p>
          All content included on the website, such as text, graphics, logos, images, as well as the compilation
          thereof, and any software used on the website, is the property of Best Documentaries or its suppliers and
          protected by copyright and intellectual property laws. You may not reproduce, modify, create derivative works
          from, display, perform, publish, distribute, disseminate, broadcast or circulate any such content to any third
          party without the express prior written consent of Best Documentaries.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p>
          In no event shall Best Documentaries, nor its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
          access to or use of or inability to access or use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
        <p>
          Best Documentaries reserves the right, at its sole discretion, to modify or replace these Terms at any time.
          If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What
          constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at bestdocumentaries2025@gmail.com.</p>
      </div>
    </div>
  )
}

