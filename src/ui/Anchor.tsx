"use client";
import React, { FC, ReactNode, AnchorHTMLAttributes, memo } from "react";
import Link from "next/link";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // 🔗 Link-Props
  href?: string;
  linkType?: "intern" | "extern" | "ugc" | "mail" | "tel";
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: boolean | string;
  rel?: string;

  // 🦾 SEO & Accessibility
  label?: string;
  title?: string;
  ariaLabel?: string;
  analyticsId?: string;

  // 🎨 Style-Props (UI/UX)
  variant?: "primary" | "secondary" | "default" | "success" | "warning" | "error";
  underline?: "always" | "hover" | "none";
  isTextLink?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  
  // ✅ NEU: Button-Look Props
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "warning" | "error" | "glass";
  buttonSize?: "small" | "medium" | "large";

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
  
  // ✅ NEU: Button-Look Props
  buttonVariant,
  buttonSize,

  // 🧩 Content
  children,
  ...rest
}) => {
  // Link-Typ basierend auf href automatisch erkennen, falls nicht explizit gesetzt
  const detectedLinkType = React.useMemo(() => {
    if (linkType !== "intern") return linkType;
    if (href.startsWith("mailto:")) return "mail";
    if (href.startsWith("tel:")) return "tel";
    if (href.startsWith("#") || href.startsWith("/")) return "intern";
    return "extern";
  }, [href, linkType]);

  // ✅ CSS-Klassen mit Button-Look
  const combinedClassName = [
    "anchor",
    buttonVariant ? `button__${buttonVariant}` : `anchor__${variant}`,
    buttonSize && `button__${buttonSize}`,
    !buttonVariant && `anchor__underline-${underline}`,
    className,
    isTextLink && "anchor__text-link",
    detectedLinkType !== "intern" && `anchor__${detectedLinkType}`,
  ]
    .filter(Boolean)
    .join(" ");

  // Default Text, falls nichts vorhanden
  const fallbackLabel = label || children || "LINK";

  // SEO/Accessibility Defaults
  const computedTitle = title || (typeof label === "string" ? label : undefined);
  const computedAriaLabel = ariaLabel || (typeof label === "string" ? label : undefined);

  // Target / Rel Logik
  const { computedTarget, computedRel } = React.useMemo(() => {
    let targetResult: AnchorProps["target"] = target;
    let relResult: AnchorProps["rel"] = rel;

    if (detectedLinkType === "mail" || detectedLinkType === "tel") {
      targetResult = undefined;
      relResult = undefined;
    } else if (detectedLinkType === "extern" || detectedLinkType === "ugc") {
      targetResult = target || "_blank";
      relResult = rel || (detectedLinkType === "extern" 
        ? "noopener noreferrer" 
        : "noopener noreferrer nofollow");
    }

    return { computedTarget: targetResult, computedRel: relResult };
  }, [detectedLinkType, target, rel]);

  // ✅ Inhalt mit Button-Styling für Icons
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={buttonVariant ? "button__icon--left" : "anchor__icon--left"} aria-hidden="true">
          {icon}
        </span>
      )}
      {fallbackLabel}
      {icon && iconPosition === "right" && (
        <span className={buttonVariant ? "button__icon--right" : "anchor__icon--right"} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  // Interne Links => Next.js Link
  if (detectedLinkType === "intern") {
    return (
      <Link
        href={href}
        className={combinedClassName}
        title={computedTitle}
        aria-label={computedAriaLabel}
        data-analytics={analyticsId}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  // Externe/UGC/Mail/Tel Links => normales <a>
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
      {...rest}
    >
      {content}
    </a>
  );
};

// Verbesserte Performance-Optimierung
const areEqual = (prev: AnchorProps, next: AnchorProps) => {
  // Wichtige Props vergleichen
  const keysToCompare: (keyof AnchorProps)[] = [
    'href', 'linkType', 'target', 'rel', 'download', 'label', 
    'title', 'ariaLabel', 'analyticsId', 'variant', 'underline', 
    'isTextLink', 'className', 'icon', 'iconPosition', 'children',
    'buttonVariant', 'buttonSize' // ✅ NEU
  ];

  return keysToCompare.every(key => {
    // Spezielle Behandlung für children
    if (key === 'children') {
      return prev.children === next.children;
    }
    return prev[key] === next[key];
  });
};

const Anchor = memo(AnchorComponent, areEqual);

Anchor.displayName = "Anchor";

export default Anchor;