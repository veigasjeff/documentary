"use client";

import { useEffect, Suspense } from 'react';
import { Separator } from "@/components/ui/separator";

function TermsContent() {
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

        <Separator className="my-6" />

        <h2>Content</h2>
        <p>The content displayed on or through the Service is protected by copyright and other intellectual property laws.</p>

        <Separator className="my-6" />

        <h2>Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times.
        </p>

        <Separator className="my-6" />

        <h2>Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Best Documentaries.
        </p>

        <Separator className="my-6" />

        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.
        </p>

        <Separator className="my-6" />

        <h2>Changes</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time.
        </p>
      </div>
    </div>
  );
}

export default function TermsOfServicePage() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
      <TermsContent />
    </Suspense>
  );
}
