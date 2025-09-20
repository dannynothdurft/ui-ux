import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Anchor from "./Anchor";
import { ExternalLink } from '@/lib/svg';
import Image from "next/image";

const meta: Meta<typeof Anchor> = {
  title: "UI/Anchor",
  component: Anchor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Anchor>;

// ✅ Default Link
export const Default: Story = {
  args: {
    href: "/",
    label: "Default Link",
  },
};

// ✅ Variants
export const Variants: Story = {
  args: {
    href: "/",
    label: "Primary Link",
    variant: "primary",
  },
};

// ✅ Underline
export const UnderlineAlways: Story = {
  args: {
    href: "/",
    label: "Always Underline",
    underline: "always",
  },
};

export const UnderlineHover: Story = {
  args: {
    href: "/",
    label: "Hover Underline",
    underline: "hover",
  },
};

export const UnderlineNone: Story = {
  args: {
    href: "/",
    label: "No Underline",
    underline: "none",
  },
};

// ✅ Icons
export const IconLeft: Story = {
  args: {
    href: "/",
    label: "Left Icon",
    icon: <ExternalLink />,
    iconPosition: "left",
  },
};

export const IconRight: Story = {
  args: {
    href: "/",
    label: "Right Icon",
    icon: <ExternalLink />,
    iconPosition: "right",
  },
};

// ✅ Children vs Label
export const ChildrenOnly: Story = {
  args: {
    href: "/",
    children: "Child Content",
  },
};

export const LabelOnly: Story = {
  args: {
    href: "/",
    label: "Label Only",
  },
};

export const LabelAndChildren: Story = {
  args: {
    href: "/",
    label: "Label",
    children: "Children override label",
  },
};

// ✅ Mail / Tel
export const MailLink: Story = {
  args: {
    href: "mailto:test@example.com",
    label: "Send Email",
    icon: <ExternalLink />,
  },
};

export const TelLink: Story = {
  args: {
    href: "tel:+49123456789",
    label: "Call Us",
    icon: <ExternalLink />,
  },
};

// ✅ External / UGC
export const ExternalLinks: Story = {
  args: {
    href: "https://example.com",
    label: "External Link",
    linkType: "extern",
    icon: <ExternalLink />,
  },
};

export const UGCLInk: Story = {
  args: {
    href: "https://ugc.example.com",
    label: "UGC Link",
    linkType: "ugc",
  },
};

// ✅ OnClick
export const Clickable: Story = {
  args: {
    href: "/",
    label: "Click Me",
    variant: "primary",
    onClick: () => alert("Clicked!"),
  },
};

// ✅ Image as Child
export const Logo: Story = {
  args: {
    href: "/",
    children: (
      <Image
        src="/images/quickstatus-logo-vertical.png"
        height={20}
        width={175}
        alt="QuickStatus Logo"
        title="QuickStatus – Echtzeit Website Monitoring & Performance Analyse"
      />
    ),
  },
};
