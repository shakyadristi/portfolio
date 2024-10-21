"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Dristi Shakya
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 hover:bg-accent"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header