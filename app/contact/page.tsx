"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  // {
  //   icon: MapPin,
  //   title: "Visit Us",
  //   details: ["123 Growth Avenue", "Community Center, ST 12345"],
  // },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567", "Monday - Friday, 9am - 5pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@rootedfoundation.org", "We respond within 24 hours"],
  },
  {
    icon: UserPlus,
    title: "Follow Us",
    details: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 2pm"],
  },
]

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "programs", label: "Programs & Services" },
  { value: "donations", label: "Donations & Giving" },
  { value: "partnerships", label: "Partnership Opportunities" },
  { value: "volunteer", label: "Volunteer Information" },
  { value: "media", label: "Media & Press" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-24 lg:py-32">
            <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <h1 className="mt-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Thank You for Reaching Out
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We have received your message and will get back to you within 24 hours. 
                We appreciate your interest in Rooted Foundation.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/">
                    Return Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/programs">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">

          <div className="absolute inset-0 z-0">
            <Image
              src="/contact/headliner.png"
              alt="Community gathering"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-primary/70" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8 lg:py-32">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Get in Touch<br />
              {/* <span className="text-secondary">most likely to be missed</span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 lg:text-xl">
              Have questions about our programs, partnership opportunities, or how 
                you can get involved? We would love to hear from you.
            </p>
          </div>

          {/* <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Have questions about our programs, partnership opportunities, or how 
                you can get involved? We would love to hear from you.
              </p>
            </div>
          </div> */}
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((info) => (
                <div 
                  key={info.title} 
                  className="rounded-xl bg-card p-6 text-center shadow-sm border border-border"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    <p key={index} className="mt-1 text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Send Us a Message
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-2"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Map / Additional Info */}
              <div>
                <div className="rounded-xl bg-muted p-6 lg:p-8">
                  {/* <h3 className="font-serif text-xl font-bold text-foreground">
                    Our Location
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Visit our community center to learn more about our programs and how you can get involved.
                  </p> */}
                  
                  {/* Placeholder for map */}
                  {/* <div className="mt-6 aspect-video rounded-lg bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-accent" />
                      <p className="mt-2 font-medium text-foreground">123 Growth Avenue</p>
                      <p className="text-sm text-muted-foreground">Community Center, ST 12345</p>
                    </div>
                  </div> */}
                  
                  <div className="mt-8">
                    <h4 className="font-semibold text-foreground">Quick Response Topics</h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Program enrollment:</strong> Contact us for current program availability and registration.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Volunteer opportunities:</strong> We have various ways to get involved in our community.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-2 w-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Partnership inquiries:</strong> Interested in collaborating? We would love to explore opportunities.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 rounded-xl bg-primary p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mt-2 text-primary-foreground/80">
                    If you would like to speak to a Hear Me Out staff person, email us at info@hmohearmeout.org and we will respond as soon as possible!
                  </p>
                  <a 
                    href="tel:+15551234567"
                    className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (323) 348-4096
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / CTA */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Ready to Make an Impact?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you want to donate, volunteer, or partner with us, every contribution 
                helps us grow stronger communities.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/donate">
                    Donate Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/programs">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
