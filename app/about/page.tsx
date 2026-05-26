import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Tobias Tubbs",
    title: "President & Co-Founder",
    image: "/about/tobias.png",
  },
  {
    name: "Kimi Lent",
    title: "Program Director & Co-Founder",
    image: "/about/kimi.png",
  },
  {
    name: "Tahirah Spann",
    title: "Administrative Director",
    image: "/about/tahirah.png",
  },
  {
    name: "Dimitri \"Budda\" Gales",
    title: "Lead Facilitator & Sports Director",
    image: "/about/Dimitri.png",
  },
  {
    name: "Genea Richardson",
    title: "Agriculture & Wellness Workforce Instructor",
    image: "/about/Genea.png",
  },
  {
    name: "Kenneth Webb",
    title: "Visual Arts Consultant",
    image: "/about/keneth.png",
  },
]

const partners = [
  { name: "Huma House", image: "/about/huma.png" },
  { name: "Los Angeles Chargers", image: "/about/lachargers.png" },
  { name: "Alta", image: "/about/alta.png" },
  { name: "CFCI", image: "/about/cfci.png" },
  { name: "LA vs Hate", image: "/about/lavshate.gif" },
  { name: "Niagara Foundation", image: "/about/niagara.png" },
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
              src="/about/headliner.png"
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
              About Hear Me Out<br />
              {/* <span className="text-secondary">most likely to be missed</span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 lg:text-xl">
              Established for community members most likely to be missed. Learn about 
                our journey, our team, and the values that guide everything we do.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Mission</span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Breaking Cycles, Building Futures Through Holistic Support
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Our Mission is to provide holistic services with a focus on education, 
                    violence and gang prevention, successful reentry (from incarceration) and 
                    social-emotional development. Our trauma-informed framework is applied 
                    through academic recovery, whole person care and court advocacy.
                  </p>
                  <p>
                    By establishing a healthy family ecosystem aimed at breaking cycles of 
                    poverty, addiction, violence, and incarceration, Hear Me Out 501c3 extends 
                    comprehensive services and programs to system-impacted youth and formerly 
                    incarcerated adults.
                  </p>
                  <p>
                    Through strategic grants, innovative programs, and meaningful partnerships, 
                    we create lasting positive change and help individuals, families and 
                    therefore communities thrive.
                  </p>
                </div>
              </div>
              <div className="relative h-96 overflow-hidden rounded-xl">
                <Image
                  src="/about/mission.png"
                  alt="Community support and empowerment"
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
                  src="/about/vision.png"
                  alt="Community members working together toward a shared vision"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Vision</span>
                <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  A Future Beyond Cycles of Harm
                </h2>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    We envision a future where system-impacted youth, formerly incarcerated 
                    adults, and their families have access to the support, opportunities, and 
                    community needed to thrive.
                  </p>
                  <p>
                    In this future, cycles of poverty, violence, addiction, and incarceration 
                    are broken through education, advocacy, healing, and meaningful connection. 
                    Young people are empowered to lead stable and fulfilling lives, families are 
                    strengthened through whole-person support, and reentry adults are welcomed 
                    back into their communities with dignity and opportunity.
                  </p>
                  <p>
                    We work toward this vision every day by investing in people, building healthy 
                    support systems, and creating spaces where healing, accountability, and 
                    long-term growth are possible.
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
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
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
                  <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
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
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              {partners.map((partner) => (
                <div key={partner.name} className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-40 overflow-hidden rounded-lg">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Join Our Mission
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Whether through donations, partnerships, or volunteering, there are 
                many ways to support our work and help communities thrive.
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
