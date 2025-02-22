import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/public" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded"></div>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/who-we-are" className="text-gray-600 hover:text-gray-900">
            Who We Are
          </Link>
          <Link href="/case-study" className="text-gray-600 hover:text-gray-900">
            Case Study
          </Link>
          <Link href="/our-work" className="text-gray-600 hover:text-gray-900">
            Our Work
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/say-hello" className="text-gray-600 hover:text-gray-900">
            Say Hello
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex-1">
        {/* Project Header */}
        <div className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Friends Entertainment</h1>
          <p className="text-gray-600 max-w-2xl">
            A partner for clients in any industry that fulfills their particular needs
          </p>
        </div>

        {/* Case Study Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-sm font-semibold mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <Link href="#introduction" className="block text-sm text-blue-600 hover:text-blue-800">
                  Introduction
                </Link>
                <Link href="#who-we-help" className="block text-sm text-gray-600 hover:text-gray-900">
                  Who We Help
                </Link>
                <Link href="#proof-of-build" className="block text-sm text-gray-600 hover:text-gray-900">
                  Proof of Build
                </Link>
                <Link href="#design-process" className="block text-sm text-gray-600 hover:text-gray-900">
                  Design Process
                </Link>
                <Link href="#final-thoughts" className="block text-sm text-gray-600 hover:text-gray-900">
                  Final Thoughts
                </Link>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <div className="space-y-16">
              {/* Project Showcase */}
              <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study-69tKCax7cfN6kVqDktBWYa8gQR2wjE.png"
                  alt="Friends Entertainment mobile app showcase"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content Sections */}
              <section id="introduction" className="space-y-4">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p className="text-gray-600">
                  A team of tech specialists in a business that'll hopefully entangle the impossible drivers of big
                  creative vision a before-time possible world. Here's us with some a delicious and you could be a part
                  of this great design experience that's little good evidence not a narrative but a particular action
                  that the concepts.
                </p>
              </section>

              <section id="who-we-help" className="space-y-4">
                <h2 className="text-2xl font-bold">Who We Help</h2>
                <p className="text-gray-600">
                  Network of excellence a still more glorious dawn awaits content and clients that you face are
                  inspirational relations to basically only through that stored by plan with. Concept of the further one
                  up a point in light at the edge of forever there's a little good evidence not a happy direct citizens
                  of distant special needs.
                </p>
              </section>

              {/* Additional Project Images */}
              <div className="space-y-8">
                <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study-69tKCax7cfN6kVqDktBWYa8gQR2wjE.png"
                    alt="Mobile app interface"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study-69tKCax7cfN6kVqDktBWYa8gQR2wjE.png"
                    alt="Mobile app interface"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t pt-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">Have a project in mind?</p>
              <p className="text-sm">Hit us up!</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm mt-4">Start a new project</button>
            </div>
          </div>
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link href="/who-we-are" className="hover:text-gray-900">
                Who We Are
              </Link>
              <Link href="/our-work" className="hover:text-gray-900">
                Our Work
              </Link>
              <Link href="/services" className="hover:text-gray-900">
                Services
              </Link>
              <Link href="/say-hello" className="hover:text-gray-900">
                Say Hello
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">© 2024 Company</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
