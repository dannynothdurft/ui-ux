import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: "UX/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["icon", "text", "full"],
      description: "Art des Logos",
    },
    variant: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Ausrichtung der Logo-Elemente",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Größe des Logos",
    },
    responsive: {
      control: "boolean",
      description: "Responsives Verhalten auf mobilen Geräten",
    },
    companyName: {
      control: "text",
      description: "Firmenname für Text-Logo",
    },
    tagline: {
      control: "text",
      description: "Tagline unter dem Firmennamen",
    },
    href: {
      control: "text",
      description: "Link-Ziel",
    },
    alt: {
      control: "text",
      description: "Alt-Text für Bild-Logos",
    },
    className: {
      control: "text",
      description: "Zusätzliche CSS-Klassen",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// ✅ Standard-Logo
export const Default: Story = {
  args: {
    companyName: "MyCompany",
    tagline: "Premium Solutions",
  },
};

// ✅ Nur Icon
export const IconOnly: Story = {
  args: {
    type: "icon",
    companyName: "MyCompany",
    iconSrc: "/logo/icon.svg",
  },
};

// ✅ Nur Text
export const TextOnly: Story = {
  args: {
    type: "text",
    companyName: "MyCompany",
    tagline: "Premium Solutions",
  },
};

// ✅ Vertikale Ausrichtung
export const Vertical: Story = {
  args: {
    variant: "vertical",
    companyName: "MyCompany",
    tagline: "Premium Solutions",
  },
};

// ✅ Verschiedene Größen
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
      <Logo size="sm" companyName="Small" />
      <Logo size="md" companyName="Medium" />
      <Logo size="lg" companyName="Large" />
      <Logo size="xl" companyName="X-Large" />
    </div>
  ),
};

// ✅ Als Link
export const AsLink: Story = {
  args: {
    href: "/",
    companyName: "MyCompany",
    tagline: "Click to go home",
  },
};

// ✅ Responsive Logo
export const Responsive: Story = {
  args: {
    responsive: true,
    companyName: "MyCompany",
    tagline: "Responsive Logo",
  },
};

// ✅ Mit benutzerdefinierten Klassen
export const CustomStyled: Story = {
  args: {
    companyName: "MyCompany",
    className: "custom-logo",
    iconClassName: "custom-icon",
    textClassName: "custom-text",
  },
};

// ✅ Playground für interaktive Tests
export const Playground: Story = {
  args: {
    type: "full",
    variant: "horizontal",
    size: "md",
    companyName: "MyCompany",
    tagline: "Your tagline here",
    responsive: false,
  },
};

// ✅ Logo mit Bildquellen (Mock)
export const WithImages: Story = {
  args: {
    iconSrc: "/logo/icon.svg",
    textSrc: "/text-logo.png",
    fullSrc: "/full-logo.png",
    alt: "MyCompany Logo",
    companyName: "MyCompany",
  },
};

// ✅ Dark Mode kompatibel
export const DarkMode: Story = {
  args: {
    companyName: "MyCompany",
    tagline: "Dark Mode Ready",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// ✅ Komplexes Beispiel
export const ComplexExample: Story = {
  args: {
    type: "full",
    variant: "vertical",
    size: "lg",
    href: "/",
    companyName: "TechCorp",
    tagline: "Innovation & Excellence",
    responsive: true,
    title: "Visit TechCorp Homepage",
  },
};