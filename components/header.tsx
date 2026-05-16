"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPortal } from "react-dom"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs & Services", href: "/programs" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[9999] w-full max-w-sm shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#fff", color: "#1a1a1a" }}
      >
        <div className="flex h-full flex-col">
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: "1px solid #e5e5e5" }}
          >
            <Link href="/" className="-m-1.5 p-1.5" onClick={onClose}>
              <span className="text-xl font-serif font-bold text-primary">
                Rooted Foundation
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              style={{ color: "#1a1a1a" }}
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Drawer content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium"
                  style={{ color: "#1a1a1a" }}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Drawer footer */}
          <div className="px-6 py-6" style={{ borderTop: "1px solid #e5e5e5" }}>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate" onClick={onClose}>
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl lg:text-2xl font-serif font-bold text-primary tracking-tight">
                Rooted Foundation
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </nav>
      </header>

      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
