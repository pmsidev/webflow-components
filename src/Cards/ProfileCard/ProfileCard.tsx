"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SocialLink = {
  icon: React.ReactNode;
  url: string;
  label: string;
};

type Props = {
  imageSrc: string;
  imageAlt?: string;
  name: string;
  role: string;
  bio?: string;
  socialLinks?: SocialLink[];
};

export type ProfileCardProps = React.ComponentPropsWithoutRef<"article"> & Partial<Props>;

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    imageSrc,
    imageAlt,
    name,
    role,
    bio,
    socialLinks = [],
    className,
    ...rest
  } = {
    ...ProfileCardDefaults,
    ...props,
  };

  return (
    <article
      className={cn("profile-card", className)}
      {...rest}
    >
      <div className="profile-card_image-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt || name}
          className="profile-card_image"
        />
      </div>
      <div className="profile-card_content">
        <h3 className="profile-card_name">{name}</h3>
        <p className="profile-card_role">{role}</p>
        {bio && (
          <p className="profile-card_bio">{bio}</p>
        )}
        {socialLinks.length > 0 && (
          <div className="profile-card_social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="profile-card_social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export const ProfileCardDefaults: Props = {
  imageSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt: "Profile photo",
  name: "Full Name",
  role: "Job Title",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  socialLinks: [],
};
