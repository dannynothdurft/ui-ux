import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Logo from "./Logo";

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
      description: "Logo-Typ",
    },
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Ausrichtung",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Größe",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// ✅ Default Logo
export const Default: Story = {
  args: {
    companyName: "QuickStatus",
    tagline: "Real-Time Monitoring",
  },
};

// ✅ Verschiedene Typen
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <Logo type="icon" companyName="QuickStatus" />
      <Logo type="text" companyName="QuickStatus" />
      <Logo type="full" companyName="QuickStatus" tagline="Real-Time Monitoring" />
    </div>
  ),
};

// ✅ Verschiedene Ausrichtungen
export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 items-start">
      <Logo variant="horizontal" companyName="QuickStatus" tagline="Horizontal" />
      <Logo variant="vertical" companyName="QuickStatus" tagline="Vertical" />
    </div>
  ),
};

// ✅ Verschiedene Größen
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-end">
      <Logo size="sm" companyName="QS" />
      <Logo size="md" companyName="QuickStatus" />
      <Logo size="lg" companyName="QuickStatus" tagline "Monitoring" />
      <Logo size="xl" companyName="QuickStatus" tagline="Real-Time Monitoring" />
    </div>
  ),
};

// ✅ Mit Bildern
export const WithImages: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Logo
        type="icon"
        iconSrc="/logo-icon.png"
        alt="QuickStatus Icon"
      />
      <Logo
        type="text"
        textSrc="/logo-text.png"
        alt="QuickStatus Text"
      />
      <Logo
        type="full"
        fullSrc="/logo-full.png"
        alt="QuickStatus Full Logo"
      />
    </div>
  ),
};

// ✅ Mit Link
export const WithLink: Story = {
  args: {
    href: "/",
    companyName: "QuickStatus",
    tagline: "Click me!",
  },
};

// ✅ Accessibility
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Logo
        companyName="QuickStatus"
        title="QuickStatus - Website Monitoring"
        alt="QuickStatus Logo"
      />
      <Logo
        companyName="QuickStatus"
        tagline="Screen Reader Friendly"
        href="/"
        linkProps={{ "aria-label": "Zur Startseite" }}
      />
    </div>
  ),
};

// ✅ Custom Styling
export const CustomStyle: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Logo
        companyName="QuickStatus"
        className="p-4 bg-gray-100 rounded-lg"
        iconClassName="text-blue-600"
        textClassName="text-gray-800"
      />
      <Logo
        companyName="QuickStatus"
        variant="vertical"
        className="border-2 border-dashed border-gray-300 p-4"
      />
    </div>
  ),
};

// ✅ Komplexes Beispiel
export const ComplexExample: Story = {
  render: () => (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
      <header className="flex items-center justify-between">
        <Logo
          type="full"
          variant="horizontal"
          size="lg"
          companyName="QuickStatus"
          tagline="Premium Monitoring"
          href="/"
          className="hover:scale-105 transition-transform"
        />
        
        <nav className="flex gap-4">
          <Logo
            type="icon"
            size="sm"
            companyName="QS"
            href="/dashboard"
            className="opacity-70 hover:opacity-100"
          />
        </nav>
      </header>
    </div>
  ),
};

// ✅ Responsive Beispiel
export const Responsive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-gray-600 mb-2">⬇️ Responsive Verhalten</div>
      <Logo
        companyName="QuickStatus"
        tagline="Adapts to container"
        className="max-w-full"
      />
    </div>
  ),
};