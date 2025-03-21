"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CustomButton from "./ui/CustomButton";
import { Menu, X, ChevronRight, Phone, MapPin, Home, Briefcase, User, Mail } from "lucide-react";

const navLinks = [
  { href: "/properties", label: "Propriétés", icon: <Home size={16} /> },
  { href: "/services", label: "Nos Services", icon: <Briefcase size={16} /> },
  { href: "/about", label: "Notre Agence", icon: <User size={16} /> },
  { href: "/contact", label: "Contact", icon: <Mail size={16} /> },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isHomePage
          ? isScrolled
            ? "py-3 bg-white/95 backdrop-blur-xl shadow-sm"
            : "py-5 bg-transparent"
          : isScrolled
          ? "py-3 bg-white/95 backdrop-blur-xl shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            <span
              className={cn(
                "transition-colors duration-300",
                isHomePage
                  ? isScrolled
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                    : "text-white"
                  : isScrolled
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "text-blue-600"
              )}
            >
              Immobilier Paris
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium flex items-center gap-1.5 transition-colors duration-200",
                  isHomePage
                    ? pathname === link.href
                      ? isScrolled
                        ? "text-blue-600 font-semibold"
                        : "text-white font-semibold"
                      : isScrolled
                      ? "text-gray-700"
                      : "text-white/90"
                    : pathname === link.href
                    ? isScrolled
                      ? "text-blue-600 font-semibold"
                      : "text-blue-700 font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-blue-600 hover:text-blue-700"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={cn(
                "mr-6 text-sm font-medium flex items-center",
                isHomePage
                  ? isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                  : isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-blue-600 hover:text-blue-700"
              )}
            >
              <Phone className="mr-1.5 h-4 w-4" />
              +33 1 23 45 67 89
            </Link>
            <CustomButton
              size="sm"
              className={cn(
                "shadow-lg",
                isHomePage
                  ? isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                  : isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              Estimation Gratuite
              <ChevronRight className="ml-1 h-4 w-4" />
            </CustomButton>
          </div>

          <button
            className={cn(
              "md:hidden",
              isHomePage ? (isScrolled ? "text-gray-800" : "text-white") : isScrolled ? "text-gray-800" : "text-blue-600"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[57px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="py-6 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-2 text-base font-medium flex items-center gap-2",
                pathname === link.href ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-gray-800">Paris, France</span>
          </div>
          <a href="tel:+33123456789" className="flex items-center text-gray-800 py-2">
            <Phone className="mr-2 h-4 w-4 text-blue-600" />
            +33 1 23 45 67 89
          </a>
          <CustomButton className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" fullWidth>
            Estimation Gratuite
            <ChevronRight className="ml-1 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
