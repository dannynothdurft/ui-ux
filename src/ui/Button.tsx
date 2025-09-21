"use client";
import React, { FC, ReactNode, ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 🎨 Style-Props
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "warning" | "error" | "glass";
    size?: "small" | "medium" | "large";
  circle?: boolean; // Neue Prop für runde Buttons
    
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  
  // 🦾 Zustände
  loading?: boolean;
  disabled?: boolean;
  
  // 🧩 Content
  child: ReactNode;
}

const ButtonComponent: FC<ButtonProps> = ({
  // 🎨 Style-Props
  variant = "primary",
    size = "medium",
  circle,
  fullWidth = false,
  className,
  icon,
  iconPosition = "left",
  
  // 🦾 Zustände
  loading = false,
  disabled = false,
  
  
  // 🧩 Content
  child,
  
  // HTML Attributes
  ...rest
}) => {
  // CSS-Klassen zusammensetzen
  const combinedClassName = [
  "button",
  `button__${variant}`,
  `button__${size}`,
  className,
  fullWidth && "button__full-width",
  loading && "button__loading",
  disabled && "button__disabled",
  circle && "button__circle"
].filter(Boolean).join(" ");

  // Inhalt rendern
  const renderContent = () => (
    <>
      {icon && iconPosition === "left" && (
        <span className="button__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      
      <span className="button__content">
        {child}
      </span>
      
      {icon && iconPosition === "right" && (
        <span className="button__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

// Performance-Optimierung
const areEqual = (prev: ButtonProps, next: ButtonProps) => {
  return (
    prev.variant === next.variant &&
    prev.size === next.size &&
    prev.fullWidth === next.fullWidth &&
    prev.className === next.className &&
    prev.icon === next.icon &&
    prev.iconPosition === next.iconPosition &&
    prev.loading === next.loading &&
    prev.disabled === next.disabled &&
    prev.child === next.child
  );
};

const Button = memo(ButtonComponent, areEqual);

Button.displayName = "Button";

export default Button;