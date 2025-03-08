"use client";

import { useEffect, Suspense } from "react";
import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function FAQPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).analytics) {
      (window as any).analytics.track("PageView");
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8">
          Find answers to common questions about Best Documentaries and how to use our platform.
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Best Documentaries free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, Best Documentaries is completely free to use. We believe in making educational content accessible to
                everyone. However, we may introduce premium features in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How often do you add new documentaries?</AccordionTrigger>
              <AccordionContent>
                We add new documentaries to our platform every week. Our team is constantly searching for high-quality
                content across various categories to ensure you always have something new to watch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I watch documentaries on mobile devices?</AccordionTrigger>
              <AccordionContent>
                Our platform is fully responsive and works on all devices, including smartphones and tablets. You can
                enjoy our documentaries anytime, anywhere.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How do I create a watchlist?</AccordionTrigger>
              <AccordionContent>
                To create a watchlist, you need to create an account first. Once logged in, you can add documentaries to
                your watchlist by clicking the bookmark icon on any documentary card or page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I suggest a documentary to be added?</AccordionTrigger>
              <AccordionContent>
                Yes! We welcome suggestions from our community. You can submit documentary recommendations through our
                Contact page, and our team will review them.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Do you have documentaries in languages other than English?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer documentaries in multiple languages. You can filter documentaries by language using our
                search filters. Many documentaries also include subtitles in various languages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>How can I report an issue with a documentary?</AccordionTrigger>
              <AccordionContent>
                If you encounter any issues with a documentary, such as playback problems or inappropriate content, please
                use the "Report Issue" button on the documentary page or contact us through our Contact page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I download documentaries to watch offline?</AccordionTrigger>
              <AccordionContent>
                Currently, we do not offer the option to download documentaries for offline viewing. However, this feature
                is on our roadmap and may be available in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>How do you select documentaries for the platform?</AccordionTrigger>
              <AccordionContent>
                Our team of curators carefully selects documentaries based on quality, educational value, and viewer
                interest. We aim to provide a diverse range of topics and perspectives to cater to different interests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Can I share documentaries with friends?</AccordionTrigger>
              <AccordionContent>
                Yes! We encourage sharing. Each documentary page has social sharing buttons that allow you to easily share
                documentaries with friends and family via social media, email, or direct link.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question, please don't hesitate to contact us. Our support team is
            always ready to help.
          </p>
          <p className="text-muted-foreground">
            You can reach us at <span className="font-medium">support@bestdocumentaries.com</span> or visit our{" "}
            <a href="/contact" className="text-primary underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </div>
    </Suspense>
  );
}
