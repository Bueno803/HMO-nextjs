import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Leaf, Home, Heart, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const programs = [
  {
    icon: BookOpen,
    title: "Youth Education & Mentorship",
    description: "Our flagship program connects young people with mentors and educational resources to help them reach their full potential. We provide tutoring, college prep assistance, and career guidance.",
    image: "/images/youth-program.jpg",
    stats: { served: "500+", metric: "Youth Served Annually" },
  },
  {
    icon: Leaf,
    title: "Community Gardens Initiative",
    description: "We establish and maintain community gardens that provide fresh produce to local families while creating spaces for neighbors to connect and learn about sustainable agriculture.",
    image: "/images/community-garden.jpg",
    stats: { served: "12", metric: "Active Gardens" },
  },
  {
    icon: Home,
    title: "Family Support Services",
    description: "Comprehensive support for families facing hardship, including emergency assistance, resource navigation, and long-term stability planning to help families thrive.",
    image: "/images/family-support.jpg",
    stats: { served: "200+", metric: "Families Assisted" },
  },
  {
    icon: Heart,
    title: "Health & Wellness Programs",
    description: "Free health screenings, wellness workshops, and mental health resources designed to improve overall community health outcomes and access to care.",
    image: "/images/health-wellness.jpg",
    stats: { served: "1,000+", metric: "Health Services Provided" },
  },
  {
    icon: Users,
    title: "Senior Engagement",
    description: "Programs designed to reduce isolation among seniors through social activities, technology training, and intergenerational connection opportunities.",
    image: "/images/senior-engagement.jpg",
    stats: { served: "150+", metric: "Active Participants" },
  },
  {
    icon: Briefcase,
    title: "Workforce Development",
    description: "Job training, resume assistance, and employment placement services to help community members find meaningful employment and economic stability.",
    image: "/images/workforce.jpg",
    stats: { served: "300+", metric: "Job Placements" },
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Programs & Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Through our diverse range of programs, we address the unique needs of our 
                communities. Each initiative is designed to create lasting impact and 
                empower individuals to thrive.
              </p>
            </div>
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
                      <p className="text-3xl font-bold text-accent">{program.stats.served}</p>
                      <p className="text-sm text-muted-foreground">{program.stats.metric}</p>
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
