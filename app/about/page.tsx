import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every decision we make is guided by our commitment to creating meaningful, lasting change in the communities we serve.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain complete transparency in our operations, finances, and impact metrics, ensuring trust with our donors and partners.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We listen to the communities we serve, ensuring our programs address real needs and are developed collaboratively.",
  },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Executive Director",
    image: "/images/team-1.jpg",
  },
  {
    name: "Marcus Johnson",
    title: "Program Director",
    image: "/images/team-2.jpg",
  },
  {
    name: "Elena Rodriguez",
    title: "Development Director",
    image: "/images/team-3.jpg",
  },
  {
    name: "David Chen",
    title: "Community Outreach Manager",
    image: "/images/team-4.jpg",
  },
]

const partners = [
  { name: "Greenway Community Foundation", image: "/images/partner-1.jpg" },
  { name: "Community First Bank", image: "/images/partner-2.jpg" },
  { name: "Regional Health Alliance", image: "/images/partner-3.jpg" },
  { name: "United Community Fund", image: "/images/partner-4.jpg" },
  { name: "TechForGood Initiative", image: "/images/partner-5.jpg" },
  { name: "Metro Education Coalition", image: "/images/partner-6.jpg" },
]

const milestones = [
  { year: "2010", event: "Founded with a vision to empower communities" },
  { year: "2013", event: "Launched our first community garden initiative" },
  { year: "2016", event: "Expanded to serve 5 additional neighborhoods" },
  { year: "2019", event: "Reached 1,000 families served annually" },
  { year: "2022", event: "Established strategic partnerships with 15+ organizations" },
  { year: "2024", event: "Launched comprehensive workforce development program" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Our team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                About Rooted Foundation
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                For over a decade, we have been dedicated to cultivating growth and 
                empowering communities. Learn about our journey, our team, and the 
                values that guide everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Mission</span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Empowering Communities to Thrive
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Our mission is to empower communities through strategic grants, 
                    innovative programs, and meaningful partnerships that create 
                    lasting positive change and help individuals and families thrive.
                  </p>
                  <p>
                    We believe that every community has the potential to flourish when 
                    given the right support. Through our grant-based approach, we 
                    invest in programs that address root causes, build local capacity, 
                    and create sustainable pathways to success.
                  </p>
                  <p>
                    From education and health to family services and economic empowerment, 
                    we are committed to holistic community development that honors the 
                    unique strengths and needs of those we serve.
                  </p>
                </div>
              </div>
              <div className="relative h-96 overflow-hidden rounded-xl">
                <Image
                  src="/images/community-garden.jpg"
                  alt="Community garden representing growth and empowerment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 relative h-96 overflow-hidden rounded-xl">
                <Image
                  src="/images/our-story.jpg"
                  alt="Community members working together toward a shared vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Vision</span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  A Future Where Everyone Flourishes
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    We envision a world where every community has the resources, support, 
                    and opportunities needed to flourish—where growth is rooted in 
                    collaboration, sustainability, and shared success.
                  </p>
                  <p>
                    In this future, barriers to opportunity are dismantled, families 
                    have access to the support they need, and neighborhoods are vibrant 
                    hubs of connection and possibility. Communities lead their own 
                    transformation, supported by partners who believe in their potential.
                  </p>
                  <p>
                    We work toward this vision every day, knowing that lasting change 
                    happens when we invest in people and trust communities to grow 
                    strongest when they grow together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Team</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Dedicated Leaders Making a Difference
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our team brings together experienced professionals who share a deep 
                commitment to community empowerment and meaningful impact.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-semibold text-foreground sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Partners</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Growing Together Through Partnership
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                As a primarily grant-funded organization, we collaborate with foundations, 
                agencies, and community organizations who share our commitment to lasting change.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-6">
              {partners.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        {/* <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">What Guides Us</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Core Values
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline */}
        {/* <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Journey</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Milestones
              </h2>
            </div>
            <div className="mt-12 mx-auto max-w-3xl">
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                        <span className="font-serif text-2xl font-bold text-accent">{milestone.year}</span>
                        <p className="mt-1 text-muted-foreground">{milestone.event}</p>
                      </div>
                      <div className="absolute left-4 h-3 w-3 rounded-full bg-accent lg:left-1/2 lg:-translate-x-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Join Our Mission
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Whether through donations, partnerships, or volunteering, there are 
                many ways to support our work and help communities grow.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/donate">
                    Support Our Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10">
                  <Link href="/contact">
                    Get in Touch
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
