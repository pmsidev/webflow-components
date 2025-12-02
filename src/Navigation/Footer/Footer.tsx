"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type FooterLink = {
  label: string;
  url: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  icon: React.ReactNode;
  url: string;
  label: string;
};

type LogoProps = {
  src: string;
  alt?: string;
  url?: string;
};

type Props = {
  logo: LogoProps;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyrightText: string;
  bottomLinks: FooterLink[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"footer"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
  const { logo, columns, socialLinks, copyrightText, bottomLinks, className, ...rest } = {
    ...FooterDefaults,
    ...props,
  };

  return (
    <footer
      className={cn("section_footer", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="footer_container">
            {/* Top Section */}
            <div className="footer_top">
              {/* Logo Column */}
              <div className="footer_logo-column">
                <a href={logo.url} className="footer_logo-link">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="footer_logo-image"
                  />
                </a>
              </div>

              {/* Link Columns */}
              <div className="footer_links-grid">
                {columns.map((column, index) => (
                  <div key={index} className="footer_column">
                    <h4 className="footer_column-title">{column.title}</h4>
                    <ul className="footer_links">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="footer_link-item">
                          <a href={link.url} className="footer_link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="footer_divider" />

            {/* Bottom Section */}
            <div className="footer_bottom">
              <div className="footer_copyright">
                <p className="footer_copyright-text">{copyrightText}</p>
                <ul className="footer_bottom-links">
                  {bottomLinks.map((link, index) => (
                    <li key={index} className="footer_bottom-link-item">
                      <a href={link.url} className="footer_bottom-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="footer_social">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="footer_social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FooterDefaults: Props = {
  logo: {
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Logo",
    url: "/",
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", url: "/about" },
        { label: "Careers", url: "/careers" },
        { label: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", url: "/help" },
        { label: "Documentation", url: "/docs" },
        { label: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", url: "/privacy" },
        { label: "Terms", url: "/terms" },
        { label: "Cookies", url: "/cookies" },
      ],
    },
  ],
  socialLinks: [],
  copyrightText: "© 2024 Company Name. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Service", url: "/terms" },
  ],
};

