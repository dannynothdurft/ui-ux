"use client";
import React from "react";
import Image from "next/image";

interface SectionProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string; // Neu
  backgroundSize?: "cover" | "contain" | "auto"; // Neu
  backgroundPosition?: string; // Neu
  padding?: "none" | "xs" | "small" | "medium" | "large" | "xl";
  fullWidth?: boolean;
  className?: string;
  minHeight?: string; // Neu für full-height Sections
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  backgroundImage, // Neu
  backgroundSize = "cover", // Neu
  backgroundPosition = "center", // Neu
  padding = "medium",
  fullWidth = false,
  minHeight, // Neu
  className = "",
}) => {
  return (
    <section
      className={`
        section
        ${className}
        ${fullWidth ? "section--full-width" : ""}
        section--padding-${padding}
      `}
      style={{ 
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
        minHeight: minHeight || undefined
      }}
    >
      <div className="section__container">{children}</div>
    </section>
  );
};

interface SectionContentProps {
  backgroundImage?: string; // Neu
  backgroundSize?: "cover" | "contain" | "auto"; // Neu
  backgroundPosition?: string; // Neu
  minHeight?: string; // Neu für full-height Sections
  children?: React.ReactNode;
  layout?:
    | "image-left"
    | "image-right"
    | "centered"
    | "flex-row"
    | "flex-column"
    | "flex-wrap"
    | "flex-nowrap"
    | "grid-1"
    | "grid-2"
    | "grid-3"
    | "grid-4"
    | "grid-5"
    | "grid-6";
  verticalAlign?: "top" | "center" | "bottom" | "stretch";
  horizontalAlign?:
    | "left"
    | "center"
    | "right"
    | "between"
    | "around"
    | "evenly";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const SectionContent: React.FC<SectionContentProps> = ({
  children,
  layout = "flex-row",
  verticalAlign = "center",
  horizontalAlign,
  gap,
  className = "",
  backgroundImage, // Neu
  backgroundSize = "cover", // Neu
  backgroundPosition = "center", // Neu
  minHeight, // Neu

}) => {
  const layoutClass = `section-content--${layout}`;
  const verticalAlignClass = verticalAlign
    ? `section-content--valign-${verticalAlign}`
    : "";
  const horizontalAlignClass = horizontalAlign
    ? `section-content--halign-${horizontalAlign}`
    : "";
  const gapClass = gap ? `section-content--gap-${gap}` : "";

  return (
    <div
      className={`
        section-content
        ${layoutClass}
        ${verticalAlignClass}
        ${horizontalAlignClass}
        ${gapClass}
        ${className}
      `}
         style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: 'no-repeat',
        minHeight: minHeight || undefined
      }}
    >
      {children}
    </div>
  );
};

interface SectionItemProps {
  children?: React.ReactNode;
  flex?: number;
  align?: "start" | "center" | "end" | "stretch";
  className?: string;
}

export const SectionItem: React.FC<SectionItemProps> = ({
  children,
  flex,
  align,
  className = "",
}) => {
  const flexClass = flex ? `section-item--flex-${flex}` : "";
  const alignClass = align ? `section-item--align-${align}` : "";

  return (
    <div className={`section-item ${flexClass} ${alignClass} ${className}`}>
      {children}
    </div>
  );
};

interface SectionImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fullWidth?: boolean;
  objectFit?: "contain" | "cover";
  aspectRatio?: "square" | "portrait" | "landscape" | "rounded";
  className?: string;
}

export const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  width = 600,
  height = 400,
  priority = false,
  fullWidth = false,
  objectFit,
  aspectRatio,
  className = "",
}) => {
  const fullWidthClass = fullWidth ? "section-image--full-width" : "";
  const objectFitClass = objectFit ? `section-image--${objectFit}` : "";
  const aspectRatioClass = aspectRatio
    ? `section-image__img--${aspectRatio}`
    : "";

  return (
    <div
      className={`section-image ${fullWidthClass} ${objectFitClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`section-image__img ${aspectRatioClass}`}
      />
    </div>
  );
};

interface SectionTextProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionText: React.FC<SectionTextProps> = ({
  children,
  align = "left",
  className = "",
}) => {
  const alignClass = align ? `section-text--${align}` : "";

  return (
    <div className={`section-text ${alignClass} ${className}`}>{children}</div>
  );
};
