import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Best Documentaries",
  description: "Our cookie policy explains how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">Last Updated: March 4, 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          This Cookie Policy explains how Best Documentaries uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used to make websites work, enhance user experience, and provide reporting information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Cookies</h2>
        <p>
          We use both first-party and third-party cookies for several reasons. Some cookies are required for technical reasons to operate our website, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies help us improve your experience.
        </p>
        <ul className="list-disc pl-6 my-4">
          <li>Essential Cookies: Necessary for the website to function properly.</li>
          <li>Performance and Analytics Cookies: Help us analyze site usage to improve our services.</li>
          <li>Functionality Cookies: Allow personalization and remembering user preferences.</li>
          <li>Advertising Cookies: Used to deliver relevant ads to users.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Managing Cookies</h2>
        <p>
          You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences through your browser settings. Please note that blocking cookies may impact the functionality of our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in legal requirements or our practices. Please review this policy periodically to stay informed about how we use cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at bestdocumentaries2025@gmail.com.
        </p>
      </div>
    </div>
  );
}
