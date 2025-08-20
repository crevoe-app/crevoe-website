import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h1>
            <p className="text-gray-600 text-lg">Fill out the form for any questions, or enquiries</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Got Questions? We've Got You Covered!</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We would like to hear from you! Whether you have questions, need assistance, or simply want to share
                  feedback, reach out to us.
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12  flex items-center justify-center">
                  <Image src="/mail.svg" alt="Support Icon" width={60} height={60} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">contact@creveo.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">OUR SOCIALS</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                 <Image src="/fb.svg" alt="Support Icon" width={30} height={30} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                 <Image src="/x.svg" alt="Support Icon" width={20} height={20} />

                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Image src="/insta.svg" alt="Support Icon" width={30} height={30} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                  <Image src="/tiktok.svg" alt="Support Icon" width={30} height={30} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">Get in touch</h3>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="johndoe@creveo.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Type your message here
                  </label>
                  <Textarea id="message" placeholder="Type your message here" rows={6} className="w-full resize-none" />
                </div>
                <Button
                  type="submit"
                   className="bg-primary-500 w-full font-semibold text-white px-4 lg:px-6 py-2 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
