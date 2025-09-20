import type { Meta, StoryObj } from "@storybook/react";
import Anchor from "./Anchor";
import {ExternalLink} from "@/lib/svg"

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  tags: ["autodocs"], // ✅ aktiviert automatische Props-Doku
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "default"],
    },
    underline: {
      control: "select",
      options: ["always", "hover", "none"],
    },
    linkType: {
      control: "select",
      options: ["intern", "extern", "ugc"],
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Anchor>;

/**
 * 🎨 Default Beispiel
 */
export const Default: Story = {
  args: {
    href: "/",
    label: "Default Link",
    variant: "default",
    underline: "hover",
  },
};

/**
 * 🔗 Interner Link (Next.js)
 */
export const Internal: Story = {
  args: {
    href: "/about",
    label: "Interner Link",
    linkType: "intern",
    variant: "primary",
  },
};

/**
 * 🌍 Externer Link
 */
export const External: Story = {
  args: {
    href: "https://google.com",
    label: "Google öffnen",
    linkType: "extern",
    variant: "secondary",
    icon: <ExternalLink />,
    iconPosition: "right",
  },
};

/**
 * 📎 Download-Link
 */
export const Download: Story = {
  args: {
    href: "/sample.pdf",
    label: "PDF Download",
    download: true,
    variant: "primary",
    underline: "always",
  },
};

/**
 * 🦾 Mit ariaLabel + Title
 */
export const Accessible: Story = {
  args: {
    href: "https://example.com",
    label: "SEO optimierter Link",
    ariaLabel: "Gehe zur Beispielseite für SEO",
    title: "Beispielseite besuchen",
    variant: "default",
    underline: "none",
  },
};
