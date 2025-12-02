"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  url: string;
};

type NavButton = {
  label: string;
  url: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
};

type LogoProps = {
  src: string;
  alt?: string;
  url?: string;
};

type Props = {
  logo: LogoProps;
  navLinks: NavLink[];
  buttons: NavButton[];
};

export type NavbarProps = React.ComponentPropsWithoutRef<"nav"> & Partial<Props>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, buttons, className, ...rest } = {
    ...NavbarDefaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav
      className={cn("section_navbar", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="navbar_container">
            {/* Logo */}
            <a href={logo.url} className="navbar_logo-link">
              <img
                src={logo.src}
                alt={logo.alt}
                className="navbar_logo-image"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="navbar_menu-desktop">
              <ul className="navbar_links">
                {navLinks.map((link, index) => (
                  <li key={index} className="navbar_link-item">
                    <a href={link.url} className="navbar_link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className="navbar_buttons-desktop">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  asChild
                >
                  <a href={button.url}>{button.label}</a>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="navbar_mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="navbar_mobile-icon" />
              ) : (
                <Menu className="navbar_mobile-icon" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="navbar_menu-mobile">
              <ul className="navbar_links-mobile">
                {navLinks.map((link, index) => (
                  <li key={index} className="navbar_link-item-mobile">
                    <a href={link.url} className="navbar_link-mobile">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="navbar_buttons-mobile">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant}
                    className="w-full"
                    asChild
                  >
                    <a href={button.url}>{button.label}</a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export const NavbarDefaults: Props = {
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Logo",
    url: "/",
  },
  navLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
  ],
  buttons: [
    { label: "Get Started", url: "/get-started", variant: "default" },
  ],
};

