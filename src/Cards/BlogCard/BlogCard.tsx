"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  category?: string;
  title: string;
  excerpt: string;
  authorName?: string;
  authorAvatarSrc?: string;
  date?: string;
  url: string;
};

export type BlogCardProps = React.ComponentPropsWithoutRef<"article"> & Partial<Props>;

export const BlogCard = (props: BlogCardProps) => {
  const {
    imageSrc,
    imageAlt,
    category,
    title,
    excerpt,
    authorName,
    authorAvatarSrc,
    date,
    url,
    className,
    ...rest
  } = {
    ...BlogCardDefaults,
    ...props,
  };

  return (
    <article
      className={cn("blog-card", className)}
      {...rest}
    >
      <a href={url} className="blog-card_link">
        <div className="blog-card_image-wrapper">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="blog-card_image"
          />
        </div>
        <div className="blog-card_content">
          {category && (
            <Badge variant="secondary" className="blog-card_category">
              {category}
            </Badge>
          )}
          <h3 className="blog-card_title">{title}</h3>
          <p className="blog-card_excerpt">{excerpt}</p>
          {(authorName || date) && (
            <div className="blog-card_meta">
              {authorAvatarSrc && (
                <img
                  src={authorAvatarSrc}
                  alt={authorName || "Author"}
                  className="blog-card_author-avatar"
                />
              )}
              <div className="blog-card_meta-text">
                {authorName && (
                  <span className="blog-card_author-name">{authorName}</span>
                )}
                {date && (
                  <span className="blog-card_date">{date}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </a>
    </article>
  );
};

export const BlogCardDefaults: Props = {
  imageSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt: "Blog post image",
  category: "Category",
  title: "Blog post title heading goes here",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  authorName: "Author Name",
  date: "Jan 1, 2024",
  url: "#",
};
