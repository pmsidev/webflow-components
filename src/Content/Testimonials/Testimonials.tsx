"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatarSrc?: string;
  avatarAlt?: string;
};

type Props = {
  tagline?: string;
  heading: string;
  description?: string;
  testimonials: TestimonialItem[];
};

export type TestimonialsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonials = (props: TestimonialsProps) => {
  const { tagline, heading, description, testimonials, className, ...rest } = {
    ...TestimonialsDefaults,
    ...props,
  };

  return (
    <section
      className={cn("section_testimonials", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            {/* Header */}
            <div className="testimonials_header">
              {tagline && (
                <p className="testimonials_tagline">{tagline}</p>
              )}
              <h2 className="testimonials_heading">{heading}</h2>
              {description && (
                <p className="testimonials_description">{description}</p>
              )}
            </div>

            {/* Testimonials Grid */}
            <div className="testimonials_grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonials_item">
                  <blockquote className="testimonials_quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="testimonials_author">
                    {testimonial.avatarSrc && (
                      <img
                        src={testimonial.avatarSrc}
                        alt={testimonial.avatarAlt || testimonial.name}
                        className="testimonials_avatar"
                      />
                    )}
                    <div className="testimonials_author-info">
                      <p className="testimonials_name">{testimonial.name}</p>
                      <p className="testimonials_role">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsDefaults: Props = {
  tagline: "Testimonials",
  heading: "What our customers say",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Jane Doe",
      role: "CEO",
      company: "Company Name",
      avatarSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "John Smith",
      role: "CTO",
      company: "Tech Corp",
      avatarSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
  ],
};

