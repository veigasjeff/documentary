import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us | Best Documentaries",
  description: "Get in touch with the Best Documentaries team. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-4">
            We'd love to hear from you! Whether you have a question about our platform, want to suggest a documentary,
            or are interested in collaborating with us, please don't hesitate to reach out.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="mb-4">bestdocumentaries2025@gmail.com</p>

            <h3 className="text-xl font-medium mb-2">For Bussiness Advertisment</h3>
            <p className="mb-4">bestdocumentaries2025@gmail.com</p>
            
            <h3 className="text-xl font-medium mb-2">Social Media</h3>          
            <p className="mb-4">Follow us on social media for updates on new documentaries and more:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

