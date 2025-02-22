import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'/logo.png'} width="50" height="50" alt="Logo" />
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
          <section className="py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Works</h1>
            <p className="text-gray-600 max-w-2xl mb-16">
              We work with a lots of great people to give them wide range of experiences. Here's our works
            </p>

            {/* Project Grid */}
            <div className="space-y-24">
              {[1, 2, 3, 4, 5, 6].map((item , index) => (
                  <div key={item} className={`group ${index === 5 ? 'w-1/2  ml-auto': index === 4 && 'w-1/2' }`}>
                    <Link href="/project">
                      <div className="relative aspect-[16/9] mb-6">
                        <Image
                            src={`${index === 5 ? '/another.png': index === 4 ? '/Sharp.png' : '/two_black.png' }`}
                            alt="Project preview"
                            fill
                            className="object-cover rounded-lg lg:w-2/3"
                        />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Friends Entertainment</h3>
                      <p className="text-sm text-gray-500">
                        A partner for clients to any industry that fulfills their personal needs
                      </p>
                    </Link>
                  </div>
              ))}
            </div>
          </section>
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
