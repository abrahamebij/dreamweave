import Link from "next/link";

export const metadata = {
  title: "About — DreamWeave",
  description: "About DreamWeave: AI dream visualization and interpretation",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto py-20">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About DreamWeave
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            DreamWeave helps you transform your dreams into beautiful visual
            stories. Using advanced AI, the app generates imagery and
            interprets symbolic meaning so you can explore and reflect on your
            inner world.
          </p>
        </header>

        <section className="grid gap-8 mb-12">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-2">What we do</h2>
            <p className="text-white/70">
              Describe your dream in your own words and DreamWeave will create
              a unique visualization along with a concise interpretation to
              help you reflect on themes and symbolism.
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Core features</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>AI-powered image generation from natural language</li>
              <li>Psychological interpretation and insights</li>
              <li>Personal dream collection and gallery</li>
              <li>Simple email/password sessions (no blockchain required)</li>
            </ul>
          </div>

          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Team</h2>
            <p className="text-white/70">Built by a small team focused on creativity and privacy. Contact: hello@dreamweave.example</p>
          </div>
        </section>

        <footer className="text-center mt-8">
          <p className="text-white/70 mb-4">Ready to visualize your dream?</p>
          <div className="flex justify-center gap-4">
            <Link href="/login" className="px-6 py-3 bg-linear-to-r from-purple-600 to-pink-600 rounded-full text-white">
              Get Started
            </Link>
            <Link href="/" className="px-6 py-3 border border-white/20 rounded-full text-white">
              Back Home
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
