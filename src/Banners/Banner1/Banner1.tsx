"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type BannerButtonProps = {
  title: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

type Props = {
  heading: string;
  description: string;
  logo: ImageProps;
  inputPlaceholder: string;
  button: BannerButtonProps;
};

export type Banner1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner1 = (props: Banner1Props) => {
  const { heading, description, logo, inputPlaceholder, button, className, ...rest } = {
    ...Banner1Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);
  const [emailInput, setEmailInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className={cn("section_banner", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="banner_container">
            <div className="banner_content">
              <a href={logo.url} className="banner_logo-link">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="banner_logo-image"
                />
              </a>
              <div className="banner_text">
                <h2 className="banner_heading">{heading}</h2>
                <p className="banner_description">{description}</p>
              </div>
            </div>
            <form
              className="banner_form"
              onSubmit={handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder={inputPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="banner_input"
              />
              <Button
                variant={button.variant}
                size={button.size}
                type="submit"
              >
                {button.title}
              </Button>
            </form>
            <button
              type="button"
              className="banner_close-button"
              onClick={() => setIsVisible(false)}
              aria-label="Close banner"
              title="Close banner"
            >
              <X className="banner_close-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Banner1Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Relume logo",
  },
  inputPlaceholder: "Enter your email",
  button: {
    title: "Sign up",
    variant: "default",
    size: "sm",
  },
};
