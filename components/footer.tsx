import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Programs & Services", href: "/programs" },
    { name: "About Us", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold tracking-tight">
                Rooted Foundation
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-md leading-relaxed">
              Empowering communities through strategic grants and partnerships. 
              Together, we cultivate growth and create lasting positive change.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  123 Growth Avenue<br />
                  Community Center, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a 
                  href="tel:+15551234567" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a 
                  href="mailto:info@rootedfoundation.org" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@rootedfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Rooted Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
