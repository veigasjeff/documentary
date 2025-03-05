import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Best Documentaries",
  description:
    "Learn more about Best Documentaries and our mission to bring you the most fascinating documentaries from around the world.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to Best Documentaries, your premier destination for thought-provoking and enlightening documentary
          films from around the world.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p>
          At Best Documentaries, we believe in the power of non-fiction storytelling to educate, inspire, and transform.
          Our mission is to curate and present the most compelling documentaries across a wide range of subjects, making
          knowledge accessible to everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
        <p>
          Our platform features carefully selected documentaries spanning nature, science, history, and many other
          fascinating categories. Whether you're a casual viewer or a documentary enthusiast, we strive to provide
          content that will expand your horizons and deepen your understanding of our world.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
        <p>
          Best Documentaries is run by a passionate team of documentary lovers, researchers, and content curators who
          are dedicated to bringing you the best non-fiction content available. Our diverse backgrounds and interests
          ensure that we cover a wide spectrum of topics and perspectives.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Join Our Community</h2>
        <p>
          We invite you to explore our collection, share your thoughts, and become part of our growing community of
          knowledge seekers. Together, we can discover the wonders of our world through the lens of documentary
          filmmaking.
        </p>
      </div>
    </div>
  )
}

