import Link from "next/link"
import { Mail, Phone } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Programs & Services", href: "/programs" },
    { name: "About Us", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "#" },
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
                Hear Me Out 501c3
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-md leading-relaxed">
              Established for community members most likely to be missed.
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
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a 
                  href="tel:+13233484096" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  323-348-4096
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a 
                  href="mailto:info@hmohearmeout.org" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@hmohearmeout.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} Hear Me Out 501c3. All rights reserved.
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
