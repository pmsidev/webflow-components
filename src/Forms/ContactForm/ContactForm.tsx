"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  description?: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  buttonText: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
};

export type ContactFormProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ContactForm = (props: ContactFormProps) => {
  const {
    heading,
    description,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    messageLabel,
    messagePlaceholder,
    buttonText,
    onSubmit,
    className,
    ...rest
  } = {
    ...ContactFormDefaults,
    ...props,
  };

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className={cn("section_contact-form", className)}
      {...rest}
    >
      <div className="padding-global">
        <div className="container-medium">
          <div className="padding-section-medium">
            <div className="contact-form_container">
              {/* Header */}
              <div className="contact-form_header">
                <h2 className="contact-form_heading">{heading}</h2>
                {description && (
                  <p className="contact-form_description">{description}</p>
                )}
              </div>

              {/* Form */}
              <form className="contact-form_form" onSubmit={handleSubmit}>
                <div className="contact-form_field">
                  <Label htmlFor="name" className="contact-form_label">
                    {nameLabel}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-form_input"
                    required
                  />
                </div>

                <div className="contact-form_field">
                  <Label htmlFor="email" className="contact-form_label">
                    {emailLabel}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-form_input"
                    required
                  />
                </div>

                <div className="contact-form_field">
                  <Label htmlFor="message" className="contact-form_label">
                    {messageLabel}
                  </Label>
                  <textarea
                    id="message"
                    placeholder={messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-form_textarea"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="contact-form_button">
                  {buttonText}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactFormDefaults: Props = {
  heading: "Get in touch",
  description: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  nameLabel: "Name",
  namePlaceholder: "Your name",
  emailLabel: "Email",
  emailPlaceholder: "your@email.com",
  messageLabel: "Message",
  messagePlaceholder: "Your message...",
  buttonText: "Send message",
};

