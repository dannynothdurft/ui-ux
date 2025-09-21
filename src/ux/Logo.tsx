"use client";
import React, { FC, memo, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  // 🎨 Erscheinungsbild
  type?: "icon" | "text" | "full";
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg" | "xl";
  
  // 🖼️ Bild-Quellen
  iconSrc?: string;
  textSrc?: string;
  fullSrc?: string;
  alt?: string;
  
  // 🔗 Link
  href?: string;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  
  // 📝 Text-Alternative (falls SVG/Image)
  companyName?: string;
  tagline?: string;
  
  // 🎨 Customization
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  
  // ♿ Accessibility
  title?: string;
  
  // 📱 Responsive Verhalten
  responsive?: boolean;
}

const LogoComponent: FC<LogoProps> = ({
  // 🎨 Erscheinungsbild
  type = "full",
  variant = "horizontal",
  size = "md",
  
  // 🖼️ Bild-Quellen
  iconSrc,
  textSrc,
  fullSrc,
  alt = "Company Logo",
  
  // 🔗 Link
  href = "/",
  linkProps,
  
  // 📝 Text-Alternative
  companyName = "Company Name",
  tagline,
  
  // 🎨 Customization
  className = "",
  iconClassName = "",
  textClassName = "",
  
  // ♿ Accessibility
  title,
  
  // 📱 Responsive
  responsive = false,
}) => {
  // CSS-Klassen basierend auf Props
  const logoClasses = [
    "logo",
    `logo--${variant}`,
    `logo--${size}`,
    responsive ? "logo--responsive" : "",
    className
  ].filter(Boolean).join(" ");

  const iconClasses = [
    "logo__icon",
    iconClassName
  ].filter(Boolean).join(" ");

  const textClasses = [
    "logo__text-container",
    textClassName
  ].filter(Boolean).join(" ");

  // Logo-Inhalt rendern
  const renderLogoContent = () => {
    // Wenn vollständiges Logo-Bild vorhanden
    if (type === "full" && fullSrc) {
      return (
        <Image
          src={fullSrc}
          alt={alt}
          width={100}
          height={40}
          className={logoClasses}
          title={title}
        />
      );
    }

    // Wenn nur Icon
    if (type === "icon" && iconSrc) {
      return (
        <Image
          src={iconSrc}
          alt={alt}
          width={40}
          height={40}
          className={`${logoClasses} ${iconClasses}`}
          title={title}
        />
      );
    }

    // Wenn nur Text
    if (type === "text" && textSrc) {
      return (
        <Image
          src={textSrc}
          alt={companyName}
          width={120}
          height={40}
          className={`${logoClasses} ${textClasses}`}
          title={title}
        />
      );
    }

    // Fallback: SVG oder Text-Logo
    return (
      <div className={logoClasses}>
        {/* Icon Bereich */}
        {(type === "icon" || type === "full") && (
          <div className={iconClasses}>
            {iconSrc ? (
              <Image
                src={iconSrc}
                alt={companyName}
                width={40}
                height={40}
          title={title}

              />
            ) : (
              <div className="logo__fallback-icon">
                {companyName.charAt(0)}
              </div>
            )}
          </div>
        )}

        {/* Text Bereich */}
        {(type === "text" || type === "full") && (
          <div className={textClasses}>
            <span className="logo__text">
              {companyName}
            </span>
            {tagline && (
              <span className="logo__tagline">{tagline}</span>
            )}
          </div>
        )}
      </div>
    );
  };

  // Mit oder ohne Link
  if (href) {
    return (
      <Link
        href={href}
        className="logo-link"
        title={title || `Zur Startseite von ${companyName}`}
        {...linkProps}
      >
        {renderLogoContent()}
      </Link>
    );
  }

  return renderLogoContent();
};

// Verbesserte Performance-Optimierung
const areEqual = (prev: LogoProps, next: LogoProps) => {
  // Wichtige Props vergleichen
  const keysToCompare: (keyof LogoProps)[] = [
    'type', 'variant', 'size', 'iconSrc', 'textSrc', 
    'fullSrc', 'alt', 'href', 
    'linkProps', 'companyName', 'tagline', 'className', 'iconClassName',
    'textClassName', 'title', 'responsive'
  ];
    
  return keysToCompare.every(key => {
    return prev[key] === next[key];
  });
};

const Logo = memo(LogoComponent, areEqual);

export default Logo;