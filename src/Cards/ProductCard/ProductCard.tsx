"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  badge?: string;
  title: string;
  description?: string;
  price: string;
  originalPrice?: string;
  buttonText: string;
  url: string;
  onAddToCart?: () => void;
};

export type ProductCardProps = React.ComponentPropsWithoutRef<"article"> & Partial<Props>;

export const ProductCard = (props: ProductCardProps) => {
  const {
    imageSrc,
    imageAlt,
    badge,
    title,
    description,
    price,
    originalPrice,
    buttonText,
    url,
    onAddToCart,
    className,
    ...rest
  } = {
    ...ProductCardDefaults,
    ...props,
  };

  return (
    <article
      className={cn("product-card", className)}
      {...rest}
    >
      <a href={url} className="product-card_link">
        <div className="product-card_image-wrapper">
          {badge && (
            <Badge className="product-card_badge">{badge}</Badge>
          )}
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="product-card_image"
          />
        </div>
        <div className="product-card_content">
          <h3 className="product-card_title">{title}</h3>
          {description && (
            <p className="product-card_description">{description}</p>
          )}
          <div className="product-card_price-wrapper">
            <span className="product-card_price">{price}</span>
            {originalPrice && (
              <span className="product-card_original-price">{originalPrice}</span>
            )}
          </div>
        </div>
      </a>
      <Button
        className="product-card_button"
        onClick={(e) => {
          e.preventDefault();
          onAddToCart?.();
        }}
      >
        {buttonText}
      </Button>
    </article>
  );
};

export const ProductCardDefaults: Props = {
  imageSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt: "Product image",
  title: "Product Name",
  description: "Short product description goes here",
  price: "$99.00",
  buttonText: "Add to Cart",
  url: "#",
};
