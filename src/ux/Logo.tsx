"use client";
import React, { FC, memo } from "react";
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
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  
  // 📝 Text-Alternative (falls SVG/Image)
  companyName?: string;
  tagline?: string;
  
  // 🎨 Customization
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  
  // ♿ Accessibility
  title?: string;
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
}) => {
  // Größen-Konfiguration
  const sizeConfig = {
    sm: { icon: 24, text: 80, spacing: "gap-1" },
    md: { icon: 32, text: 100, spacing: "gap-2" },
    lg: { icon: 48, text: 120, spacing: "gap-2" },
    xl: { icon: 64, text: 150, spacing: "gap-3" },
  };

  const currentSize = sizeConfig[size];

  // Logo-Inhalt rendern
  const renderLogoContent = () => {
    // Wenn vollständiges Logo-Bild vorhanden
    if (type === "full" && fullSrc) {
      return (
        <Image
          src={fullSrc}
          alt={alt}
          width={currentSize.text}
          height={currentSize.icon}
          className={className}
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
          width={currentSize.icon}
          height={currentSize.icon}
          className={`${className} ${iconClassName}`}
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
          width={currentSize.text}
          height={currentSize.icon}
          className={`${className} ${textClassName}`}
          title={title}
        />
      );
    }

    // Fallback: SVG oder Text-Logo
    return (
      <div className={`flex ${variant === "horizontal" ? "flex-row items-center" : "flex-col items-center"} ${currentSize.spacing} ${className}`}>
        {/* Icon Bereich */}
        {(type === "icon" || type === "full") && (
          <div className={`flex items-center justify-center ${iconClassName}`}>
            {iconSrc ? (
              <Image
                src={iconSrc}
                alt=""
                width={currentSize.icon}
                height={currentSize.icon}
              />
            ) : (
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
            )}
          </div>
        )}

        {/* Text Bereich */}
        {(type === "text" || type === "full") && (
          <div className={`flex flex-col ${textClassName}`}>
            <span className="font-bold text-gray-900 text-lg leading-tight">
              {companyName}
            </span>
            {tagline && (
              <span className="text-xs text-gray-600 mt-1">{tagline}</span>
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
        className="inline-flex focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
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
    'textClassName', 'title'
  ];
    
  return keysToCompare.every(key => {
    return prev[key] === next[key];
  });
};

const Logo = memo(LogoComponent, areEqual);

export default Logo;