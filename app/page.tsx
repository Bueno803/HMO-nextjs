import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Sprout, HandHeart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const impactAreas = [
  {
    icon: Users,
    title: "Community Support",
    description: "Strengthening local communities through targeted grant programs.",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    description: "Investing in initiatives that create lasting, positive change.",
  },
  {
    icon: HandHeart,
    title: "Strategic Partnerships",
    description: "Collaborating with organizations to maximize our collective impact.",
  },
]

const featuredPrograms = [
  {
    title: "Youth Development",
    description: "Empowering the next generation through education and mentorship programs.",
    image: "/images/youth-program.jpg",
  },
  {
    title: "Community Gardens",
    description: "Creating green spaces that bring neighborhoods together and promote sustainability.",
    image: "/images/community-garden.jpg",
  },
  {
    title: "Family Support",
    description: "Providing resources and assistance to families in need within our communities.",
    image: "/images/family-support.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-community.jpg"
              alt="Community gathering"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/70" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8 lg:py-32">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Cultivating Growth,<br />
              <span className="text-secondary">Empowering Communities</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 lg:text-xl">
              We are a grant-based nonprofit dedicated to fostering sustainable growth and 
              creating meaningful impact in underserved communities. Through strategic partnerships 
              and targeted programs, we plant the seeds for a brighter tomorrow.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-black hover:bg-primary-foreground/10 px-8">
                <Link href="/programs">
                  Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Mission</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Rooted in Purpose, Growing Together
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                At Rooted Foundation, we believe that every community has the potential to thrive. 
                Our mission is to provide the resources, support, and strategic partnerships needed 
                to help communities grow from the ground up. We are committed to transparency, 
                sustainability, and creating lasting impact through our grant programs.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {impactAreas.map((area) => (
                <div 
                  key={area.title} 
                  className="rounded-xl bg-card p-8 text-center shadow-sm border border-border"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <area.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Do</span>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Programs
                </h2>
              </div>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/programs">
                  View All Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {featuredPrograms.map((program) => (
                <article 
                  key={program.title} 
                  className="group overflow-hidden rounded-xl bg-card shadow-sm border border-border"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {program.description}
                    </p>
                    <Link 
                      href="/programs" 
                      className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Join Us in Making a Difference
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Your support helps us continue our mission of empowering communities. 
                Every donation, no matter the size, plants a seed for positive change.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  <Link href="/donate">
                    Donate Today
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 px-8">
                  <Link href="/partners">
                    Become a Partner
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-center font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Explore More
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
              {[
                { name: "Programs & Services", href: "/programs", description: "Discover our initiatives" },
                { name: "About Us", href: "/about", description: "Learn our story" },
                { name: "Strategic Partners", href: "/partners", description: "Meet our collaborators" },
                { name: "Contact Us", href: "/contact", description: "Get in touch" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-xl bg-card p-6 text-center shadow-sm border border-border hover:border-accent transition-colors"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
