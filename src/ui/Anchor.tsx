"use client";
import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface AnchorProps {
  // 🔗 Link-Props
  href?: string;
  linkType?: "intern" | "extern" | "ugc";
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: boolean | string;
  rel?: string;

  // 🦾 SEO & Accessibility
  label?: string;
  title?: string;
  ariaLabel?: string;
  analyticsId?: string;

  // 🎨 Style-Props (UI/UX)
  variant?: "primary" | "secondary" | "default";
  underline?: "always" | "hover" | "none";
  isTextLink?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";

  // 🧩 Content
  children?: ReactNode;
}

const AnchorComponent: FC<AnchorProps> = ({
  // 🔗 Link-Props
  href = '#',
  linkType = "intern",
  target,
  rel,
  download,

  // 🦾 SEO & Accessibility
  label,
  title,
  ariaLabel,
  analyticsId,

  // 🎨 Style-Props
  variant = "default",
  underline = "hover",
  isTextLink,
  className,
  icon,
  iconPosition = "left",

  // 🧩 Content
  children,
}) => {
  // CSS-Klassen zusammensetzen
  const combinedClassName = [
    "anchor",
    `anchor__${variant}`,
    `anchor__underline-${underline}`,
    className,
    isTextLink ? "anchor__text-link" : null,
  ]
    .filter(Boolean)
    .join(" ");
   // Default Text, falls nichts vorhanden
  const fallbackLabel = label || children || icon || "LINK";

  // SEO/Accessibility Defaults
  const computedTitle = title || label;
  const computedAriaLabel = ariaLabel || label;

  // Target/Rel Logik
  const computedTarget =
    linkType === "extern" || linkType === "ugc" ? "_blank" : target;

  const computedRel =
    linkType === "extern"
      ? "noopener noreferrer"
      : linkType === "ugc"
      ? "noopener noreferrer nofollow"
      : rel;

  // Inhalt (Label, Icon, Optional Children)
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="anchor__icon--left">{icon}</span>
      )}
      {fallbackLabel}
      {icon && iconPosition === "right" && (
        <span className="anchor__icon--right">{icon}</span>
      )}
    </>
  );

  // Interne Links => Next.js Link
  if (linkType === "intern") {
    return (
      <Link
        href={href}
        className={combinedClassName}
        title={computedTitle}
        aria-label={computedAriaLabel}
        data-analytics={analyticsId}
      >
        {content}
      </Link>
    );
  }

  // Externe/UGC Links => normales <a>
  return (
    <a
      href={href}
      className={combinedClassName}
      title={computedTitle}
      aria-label={computedAriaLabel}
      target={computedTarget}
      rel={computedRel}
      download={download}
      data-analytics={analyticsId}
    >
      {content}
    </a>
  );
};

// React.memo für Performance mit Vergleich
const areEqual = (prev: AnchorProps, next: AnchorProps) => {
  return Object.keys(prev).every(
    key => prev[key as keyof AnchorProps] === next[key as keyof AnchorProps]
  );
};

const Anchor = React.memo(AnchorComponent, areEqual);

Anchor.displayName = "Anchor";

export default Anchor;
