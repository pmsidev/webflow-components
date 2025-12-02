"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  description?: string;
  inputPlaceholder: string;
  buttonText: string;
  disclaimerText?: string;
  onSubmit?: (email: string) => void;
};

export type NewsletterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Newsletter = (props: NewsletterProps) => {
  const {
    heading,
    description,
    inputPlaceholder,
    buttonText,
    disclaimerText,
    onSubmit,
    className,
    ...rest
  } = {
    ...NewsletterDefaults,
    ...props,
  };

  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section
      className={cn("section_newsletter", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-medium">
          <div className="padding-section-small">
            <div className="newsletter_container">
              <div className="newsletter_content">
                <h2 className="newsletter_heading">{heading}</h2>
                {description && (
                  <p className="newsletter_description">{description}</p>
                )}
              </div>

              <form className="newsletter_form" onSubmit={handleSubmit}>
                <div className="newsletter_input-wrapper">
                  <Input
                    type="email"
                    placeholder={inputPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter_input"
                    required
                    aria-label="Email address"
                  />
                  <Button type="submit" className="newsletter_button">
                    {buttonText}
                  </Button>
                </div>
                {disclaimerText && (
                  <p className="newsletter_disclaimer">{disclaimerText}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const NewsletterDefaults: Props = {
  heading: "Subscribe to our newsletter",
  description: "Stay up to date with the latest news, announcements, and articles.",
  inputPlaceholder: "Enter your email",
  buttonText: "Subscribe",
  disclaimerText: "By subscribing, you agree to our Privacy Policy and consent to receive updates.",
};

