"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from '../public/assets/foder.png'
import { Button } from "@/components/ui/button"
import AboutImg from "../public/assets/bg1.avif"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Sprout, Sun, Droplets, ChevronRight, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full sm:px-8 px-4 border-b not-[]: bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image
            src={Logo} // Replace with your logo path
            alt="Fedoh Logo"
            width={120}
            height={40}
            className="h-auto"
          />
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-green-600" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-white border rounded-lg shadow-lg py-4 px-6 w-48">
              <Link href="#" className="block text-sm font-medium text-gray-600 hover:text-green-600 mb-2">
                Home
              </Link>
              <Link href="#about" className="block text-sm font-medium text-gray-600 hover:text-green-600 mb-2">
                About
              </Link>
              <Link href="#services" className="block text-sm font-medium text-gray-600 hover:text-green-600 mb-2">
                Services
              </Link>
              <Link href="#contact" className="block text-sm font-medium text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>

      <main className="flex-1  ">
        {/* Hero Section */}
        <section className="relative sm:px-8  px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-500/90 bg-color " />
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('../public/assets/foder.png')" }}
          >
            <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FEDOH%20PNG-jBAv7njjc4TbbX54OiCG5kkE3v4crj.png"
                alt="Fedoh Logo"
                width={200}
                height={80}
                className="mb-8 h-auto"
              /> */}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Sustainable Agriculture <br /> for a Better Future
              </h1>
              <p className="mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
                Innovative farming solutions that respect the environment while maximizing productivity
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:px-8 px-4 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">About Fedoh</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Pioneering Sustainable Agriculture
                </h2>
                <p className="text-gray-600 md:text-lg">
                  At Fedoh, we believe in harmonizing agricultural practices with nature. Founded with a vision to
                  transform farming through innovation, we've been at the forefront of sustainable agriculture for over
                  a decade.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Our team of agricultural experts, scientists, and technologists work together to develop solutions
                  that increase crop yields while reducing environmental impact. We partner with farmers across the
                  globe to implement practices that are not just good for the planet, but also economically viable.
                </p>
                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Our Story <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-full">
                <Image
                  src={AboutImg}
                  alt="Sustainable farming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 sm:px-8 px-4 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Our Services</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Comprehensive Agricultural Solutions
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                We offer a range of services designed to optimize farming operations, increase yields, and promote
                sustainability.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">Organic Farming</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    Sustainable practices that maintain soil health and biodiversity while producing nutritious crops.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">Crop Management</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    Advanced techniques to optimize growth cycles and maximize yield while minimizing resource use.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
                    <Sun className="h-6 w-6 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">Solar Integration</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    Renewable energy solutions specifically designed for agricultural operations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl">Water Management</CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    Efficient irrigation systems and water conservation strategies for sustainable farming.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-green-600 hover:bg-green-700">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 md:py-24 sm:px-8 px-4">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Testimonials</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                What Our Clients Say
              </h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">F{i}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Farmer {i}</h3>
                        <p className="text-sm text-gray-500">Local Farm Owner</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                      "Working with Fedoh has transformed our farming operations. Their sustainable approaches have not
                      only increased our yields but also reduced our costs and environmental impact."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-green-50 sm:px-8 px-4 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Get in Touch With Our Team
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Have questions about our services or want to schedule a consultation? Reach out to us and our team of
                  agricultural experts will be happy to assist you.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">contact@fedoh.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">123 Farm Road, Agricultural District, Country</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-lg">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white sm:px-8 px-4 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FEDOH%20PNG-jBAv7njjc4TbbX54OiCG5kkE3v4crj.png"
                alt="Fedoh Logo"
                width={120}
                height={40}
                className="h-auto mb-4 brightness-0 invert"
              /> */}
              <p className="mt-2 text-green-100">Sustainable agricultural solutions for a better tomorrow.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-green-100 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-green-100 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-green-100 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors">
                    Organic Farming
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors">
                    Crop Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors">
                    Solar Integration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-100 hover:text-white transition-colors">
                    Water Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-green-100 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-0 px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <Button className="rounded-l-none bg-green-600 hover:bg-green-700">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-8 text-center text-green-100">
            <p>© {new Date().getFullYear()} Fedoh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
