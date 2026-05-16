"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Gift, Repeat, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

const impactExamples = [
  { amount: "$25", impact: "Provides school supplies for one student for a semester" },
  { amount: "$50", impact: "Sponsors a family for one health screening event" },
  { amount: "$100", impact: "Funds a month of mentorship for a youth participant" },
  { amount: "$250", impact: "Supplies tools and seeds for a community garden plot" },
  { amount: "$500", impact: "Supports a family through our emergency assistance program" },
  { amount: "$1,000", impact: "Funds job training for five workforce development participants" },
]

const givingOptions = [
  {
    icon: Heart,
    title: "One-Time Gift",
    description: "Make an immediate impact with a single donation of any amount.",
  },
  {
    icon: Repeat,
    title: "Monthly Giving",
    description: "Join our Roots Circle with a recurring monthly contribution.",
  },
  {
    icon: Gift,
    title: "Legacy Giving",
    description: "Include Rooted Foundation in your estate planning.",
  },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would integrate with a payment processor
    alert(`Thank you for your ${donationType} donation of $${currentAmount}! This would normally redirect to a payment processor.`)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/donate-hero.jpg"
              alt="Making a difference"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Make a Difference Today
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Your generosity helps us continue our mission of empowering communities. 
                Every donation, no matter the size, plants a seed for positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Form */}
              <div className="rounded-xl bg-card p-6 shadow-sm border border-border lg:p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Choose Your Gift
                </h2>
                
                <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-sm font-medium text-foreground">Donation Type</Label>
                    <div className="mt-3 flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`flex-1 rounded-lg border-2 px-4 py-3 text-center font-medium transition-colors ${
                          donationType === "one-time"
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`flex-1 rounded-lg border-2 px-4 py-3 text-center font-medium transition-colors ${
                          donationType === "monthly"
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border text-muted-foreground hover:border-accent/50"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-sm font-medium text-foreground">Select Amount</Label>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`rounded-lg border-2 px-4 py-3 text-center font-medium transition-colors ${
                            selectedAmount === amount
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border text-muted-foreground hover:border-accent/50"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="custom-amount" className="text-sm font-medium text-foreground">
                        Or enter a custom amount
                      </Label>
                      <div className="relative mt-2">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          min="1"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                          className="pl-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium text-foreground">Your Information</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="sr-only">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="sr-only">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={!currentAmount || currentAmount <= 0}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {donationType === "monthly" ? "Start Monthly Giving" : "Donate"} {currentAmount ? `$${currentAmount}` : ""}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure donation powered by trusted payment processing</span>
                  </div>
                </form>
              </div>

              {/* Impact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Your Impact
                </h2>
                <p className="mt-4 text-muted-foreground">
                  See how your donation makes a difference in our community.
                </p>
                
                <div className="mt-8 space-y-4">
                  {impactExamples.map((example) => (
                    <div 
                      key={example.amount} 
                      className="flex items-start gap-4 rounded-lg bg-muted p-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Check className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{example.amount}</p>
                        <p className="text-sm text-muted-foreground">{example.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl bg-primary p-6">
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    Join the Roots Circle
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Become a monthly donor and receive exclusive updates, invitations 
                    to special events, and recognition in our annual report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">More Ways to Help</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Other Ways to Give
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {givingOptions.map((option) => (
                <div 
                  key={option.title} 
                  className="rounded-xl bg-card p-6 text-center shadow-sm border border-border"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <option.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">
                For questions about giving, corporate sponsorships, or planned gifts, please{" "}
                <Link href="/contact" className="text-accent hover:underline">
                  contact us
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Info */}
        <section className="py-12 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-primary-foreground/90">
                Rooted Foundation is a 501(c)(3) nonprofit organization. 
                Your donation is tax-deductible to the fullest extent allowed by law. 
                EIN: 12-3456789
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
