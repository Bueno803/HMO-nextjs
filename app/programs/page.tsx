import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Leaf, Home, Heart, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const programs = [
  {
    icon: BookOpen,
    title: "Youth Development & Academic Success",
    description: "Supporting system-impacted youth through daily structured programming, academic support, mentorship, SEL, and life-skills development in a culturally relevant environment.",
    services: ["Big Dogg Academy", "Diploma Pipeline", "SEL & Life Lessons"],
    image: "/program/youthdevelopment.png",
    objectPosition: "center",
  },
  {
    icon: Users,
    title: "Leadership, Sports & Unification",
    description: "Building confidence, discipline, accountability, and community through athletics, mentorship, fitness, and positive peer connection.",
    services: ["Big Dogg Sports", "Team-building", "Mentorship experiences"],
    image: "/program/leadership.png",
    objectPosition: "center",
  },
  {
    icon: Briefcase,
    title: "Workforce & Career Readiness",
    description: "Preparing youth and reentry adults for sustainable futures through job-readiness training, soft skills, and professional development.",
    services: ["Workforce Opportunities", "Stipend-based initiatives", "Paid internships"],
    image: "/program/workforce.jpg",
    objectPosition: "center",
  },
  {
    icon: Heart,
    title: "Healing Arts & Enrichment",
    description: "Using creative expression, gardening, and transformative experiences to support healing, emotional wellness, and expanded possibilities.",
    services: ["Arts & Gardening", "Music & Visual Arts", "Field Trips, College Visits, etc."],
    image: "/program/healingarts.png",
    objectPosition: "center",
  },
  {
    icon: Leaf,
    title: "Advocacy, Diversion & Reentry Support",
    description: "Providing court advocacy, violence intervention, mediation, and reentry support to help individuals navigate systems and move toward stability.",
    services: ["Court Advocacy & Appointed Gang Expert Services", "Mitigation & Mediation", "Reentry Guidance"],
    image: "/program/advocacy.png",
    objectPosition: "center 20%",
  },
  {
    icon: Home,
    title: "Family & Community Partnerships",
    description: "Utilizing a central location, known as Upendo House, to strengthen families and communities through holistic support, collaborative partnerships, and resource navigation.",
    services: ["Family Support", "Housing & Benefits Navigation", "Strategic partnership with community organizations"],
    image: "/program/family.png",
    objectPosition: "center",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/program/headliner.png"
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
              Programs & Services<br />
              {/* <span className="text-secondary">most likely to be missed</span> */}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 lg:text-xl">
              Through our diverse range of programs, we address the unique needs of the people 
                most likely to be missed. Each initiative is designed to equip participants with 
                the tools, support, and confidence to take control of their futures while knowing 
                they never have to navigate life alone.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:gap-16">
              {programs.map((program, index) => (
                <article 
                  key={program.title}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-80 lg:w-1/2">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: program.objectPosition }}
                    />
                  </div>
                  <div className="flex flex-col lg:w-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <program.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="mt-4 font-serif text-2xl font-bold text-foreground lg:text-3xl">
                      {program.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>
                    <div className="mt-6 rounded-lg bg-muted p-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Services Include:</p>
                      <ul className="space-y-1">
                        {program.services.map((service) => (
                          <li key={service} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Grant Information */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">How We Fund Our Work</span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Grant-Based Approach
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                As a primarily grant-funded organization, we work with foundations, government 
                agencies, and corporate partners to secure resources for our programs. This 
                approach allows us to maintain high-quality services while ensuring 
                accountability and transparency in how funds are used.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/partners">
                    View Our Partners
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/donate">
                    Support Our Mission
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-accent">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                Ready to Get Involved?
              </h2>
              <p className="mt-6 text-lg text-accent-foreground/80">
                Whether you want to volunteer, donate, or learn more about our services, 
                we would love to connect with you.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Contact Us Today
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
