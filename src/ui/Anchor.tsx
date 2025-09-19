"use client";
import React, { FC, ReactNode, memo } from "react";
import Link from "next/link";

interface AnchorProps {
  linkType?: "intern" | "extern" | "ugc";
  children?: ReactNode;
  href: string;
  label: string | ReactNode;
  title?: string;
  ariaLabel?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
  link?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  download?: boolean;
  analyticsId?: string;
  openInNewTabIcon?: boolean;
}

const Anchor: FC<AnchorProps> = memo(
  ({
    linkType = "intern",
    children,
    href,
    label,
    title,
    ariaLabel,
    target,
    rel,
    className,
    link,
    icon,
    iconPosition = "left",
    download,
    analyticsId,
  }) => {
    const combinedClassName = [
      "ui-anchor",
      className,
      link ? "ui-anchor__text-link" : null,
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <Link
        href={href}
        className={combinedClassName}
        title={title || label?.toString()}
        aria-label={ariaLabel || label?.toString()}
        target={target}
        download={download ? true : undefined}
        data-analytics={analyticsId}
        rel={
          linkType === "extern"
            ? "noopener noreferrer"
            : linkType === "ugc"
            ? "noopener noreferrer nofollow"
            : rel
        }
      >
        {icon && iconPosition === "left" && (
          <span className="ui-anchor__icon--left">{icon}</span>
        )}
        {children && children}
        {label}
        {icon && iconPosition === "right" && (
          <span className="ui-anchor__icon--right">{icon}</span>
        )}
      </Link>
    );
  }
);

Anchor.displayName = "Anchor";

export default Anchor;
