import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Anchor from "./Anchor";
import { ExternalLink } from '@/lib/svg';
import Image from "next/image";

const meta: Meta<typeof Anchor> = {
  title: "UI/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "default", "success", "warning", "error"],
      description: "Farbschema des Links (für normale Links)",
    },
    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "success", "warning", "error", "glass"],
      description: "Button-Style für Button-Look",
    },
    buttonSize: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Größe für Button-Look",
    },
    underline: {
      control: "radio",
      options: ["always", "hover", "none"],
      description: "Unterstreichungsverhalten",
    },
    linkType: {
      control: "select",
      options: ["intern", "extern", "ugc", "mail", "tel"],
      description: "Art des Links",
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
      description: "Position des Icons",
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Target-Attribut",
    },
  },
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

// ✅ Alle Varianten (normale Links)
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/" variant="primary" label="Primary Link" className="p-lg"/>
      <Anchor href="/" variant="secondary" label="Secondary Link" className="p-lg"/>
      <Anchor href="/" variant="default" label="Default Link" className="p-lg"/>
      <Anchor href="/" variant="success" label="Success Link" className="p-lg"/>
      <Anchor href="/" variant="warning" label="Warning Link" className="p-lg"/>
      <Anchor href="/" variant="error" label="Error Link" className="p-lg"/>
    </div>
  ),
};

// ✅ Button Varianten (NEU)
export const ButtonVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/" buttonVariant="primary" label="Primary Button" />
      <Anchor href="/" buttonVariant="secondary" label="Secondary Button" />
      <Anchor href="/" buttonVariant="outline" label="Outline Button" />
      <Anchor href="/" buttonVariant="ghost" label="Ghost Button" />
      <Anchor href="/" buttonVariant="success" label="Success Button" />
      <Anchor href="/" buttonVariant="warning" label="Warning Button" />
      <Anchor href="/" buttonVariant="error" label="Error Button" />
      <Anchor href="/" buttonVariant="glass" label="Glass Button" />
    </div>
  ),
};

// ✅ Button Größen (NEU)
export const ButtonSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Anchor href="/" buttonVariant="primary" buttonSize="small" label="Small" />
      <Anchor href="/" buttonVariant="primary" buttonSize="medium" label="Medium" />
      <Anchor href="/" buttonVariant="primary" buttonSize="large" label="Large" />
    </div>
  ),
};

// ✅ Button mit Icons (NEU)
export const ButtonWithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="/" 
        buttonVariant="primary"
        label="Left Icon Button" 
        icon={<ExternalLink />} 
        iconPosition="left" 
      />
      <Anchor 
        href="/" 
        buttonVariant="secondary"
        label="Right Icon Button" 
        icon={<ExternalLink />} 
        iconPosition="right" 
      />
      <Anchor 
        href="/" 
        buttonVariant="outline"
        icon={<ExternalLink />}
        iconPosition="left"
        label="Icon Only"
      />
    </div>
  ),
};

// ✅ Underline Varianten
export const UnderlineVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/" underline="always" label="Always Underline" className="p-lg"/>
      <Anchor href="/" underline="hover" label="Hover Underline" className="p-lg"/>
      <Anchor href="/" underline="none" label="No Underline" className="p-lg"/>
    </div>
  ),
};

// ✅ Icon Varianten
export const IconVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="/" 
        label="Left Icon" 
        icon={<ExternalLink />} 
        iconPosition="left" 
        className="p-lg"
      />
      <Anchor 
        href="/" 
        label="Right Icon" 
        icon={<ExternalLink />} 
        iconPosition="right" 
        className="p-lg"
      />
    </div>
  ),
};

// ✅ Link Typen
export const LinkTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/" linkType="intern" label="Interner Link" />
      <Anchor 
        href="https://example.com" 
        linkType="extern" 
        label="Externer Link" 
        icon={<ExternalLink />}
      />
      <Anchor 
        href="https://user-content.com" 
        linkType="ugc" 
        label="UGC Link" 
      />
      <Anchor 
        href="mailto:test@example.com" 
        linkType="mail" 
        label="E-Mail Link" 
      />
      <Anchor 
        href="tel:+49123456789" 
        linkType="tel" 
        label="Telefon Link" 
      />
    </div>
  ),
};

// ✅ Button-Look mit Link-Typen (NEU)
export const ButtonLinkTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="/" 
        buttonVariant="primary"
        linkType="intern" 
        label="Interner Button" 
      />
      <Anchor 
        href="https://example.com" 
        buttonVariant="secondary"
        linkType="extern" 
        label="Externer Button" 
        icon={<ExternalLink />}
        target="_blank"
      />
      <Anchor 
        href="mailto:test@example.com" 
        buttonVariant="outline"
        linkType="mail" 
        label="E-Mail Button" 
      />
    </div>
  ),
};

// ✅ Automatische Link-Erkennung
export const AutoDetection: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/about" label="Intern (automatisch erkannt)" />
      <Anchor href="https://example.com" label="Extern (automatisch erkannt)" />
      <Anchor href="mailto:contact@example.com" label="Mail (automatisch erkannt)" />
      <Anchor href="tel:+49123456789" label="Tel (automatisch erkannt)" />
      <Anchor href="#section" label="Anchor Link (automatisch erkannt)" />
    </div>
  ),
};

// ✅ Children vs Label
export const ContentTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor href="/" child={"Nur Children (span)"} />
      <Anchor href="/" label="Nur Label" />
      <Anchor href="/" label="Label wird ignoriert" child={"Children haben Priorität"} />
      <Anchor href="/" buttonVariant="primary" label="Button mit Children" child={  <span>Custom Content</span>} />
    </div>
  ),
};

// ✅ Accessibility Features
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="/" 
        label="Mit Aria-Label" 
        ariaLabel="Zusätzlicher Barrierefreiheitstext" 
      />
      <Anchor 
        href="/" 
        buttonVariant="primary"
        label="Button mit Aria-Label" 
        ariaLabel="Barrierefreier Button" 
      />
      <Anchor 
        href="/" 
        label="Mit Title" 
        title="Tooltip Information" 
      />
      <Anchor 
        href="/" 
        label="Analytics Tracking" 
        analyticsId="nav-main-link" 
      />
    </div>
  ),
};

// ✅ Download Links
export const DownloadLinks: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="/file.pdf" 
        buttonVariant="primary"
        label="Download PDF" 
        download 
      />
      <Anchor 
        href="/document.docx" 
        buttonVariant="outline"
        label="Download mit Dateinamen" 
        download="mein-dokument.docx"
      />
    </div>
  ),
};

// ✅ Target Varianten
export const TargetOptions: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="https://example.com" 
        buttonVariant="primary"
        label="_blank Target" 
        target="_blank" 
      />
      <Anchor 
        href="/" 
        buttonVariant="secondary"
        label="_self Target" 
        target="_self" 
      />
      <Anchor 
        href="/" 
        label="Ohne Target" 
      />
    </div>
  ),
};

// ✅ Kombinierte Beispiele
export const CombinedExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Anchor 
        href="https://example.com" 
        buttonVariant="primary"
        buttonSize="large"
        icon={<ExternalLink />} 
        iconPosition="right" 
        label="Kombinierter Button" 
        target="_blank"
        rel="noopener noreferrer"
      />
      <Anchor 
        href="mailto:team@example.com" 
        buttonVariant="outline"
        label="Team Kontakt" 
        icon="📧"
        iconPosition="left"
      />
      <Anchor 
        href="/premium" 
        buttonVariant="glass"
        buttonSize="large"
        label="Premium Features" 
        icon="✨"
      />
    </div>
  ),
};

// ✅ Image as Child
export const Logo: Story = {
  args: {
    href: "/",
    child: (
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

// ✅ Image Button (NEU)
export const ImageButton: Story = {
  args: {
    href: "/",
    buttonVariant: "ghost",
    child: (
      <Image
        src="/images/quickstatus-logo-vertical.png"
        height={30}
        width={150}
        alt="QuickStatus Logo"
      />
    ),
  },
};

// ✅ OnClick Handler
export const WithClickHandler: Story = {
  args: {
    href: "#",
    label: "Click Me",
    buttonVariant: "primary",
    onClick: (e) => {
      e.preventDefault();
      alert("Button-Link wurde geklickt!");
    },
  },
};

// ✅ Komplexes Beispiel mit Buttons (NEU)
export const ComplexButtonExample: Story = {
  render: () => (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Button Navigation</h2>
      <nav className="flex flex-col gap-3">
        <Anchor href="/" buttonVariant="primary" label="Home" />
        <Anchor href="/about" buttonVariant="outline" label="Über uns" />
        <Anchor href="/contact" buttonVariant="outline" label="Kontakt" />
        <Anchor 
          href="https://github.com/your-repo" 
          buttonVariant="secondary"
          label="GitHub" 
          icon={<ExternalLink />}
          iconPosition="right"
          target="_blank"
        />
        <Anchor 
          href="mailto:support@example.com" 
          buttonVariant="ghost"
          label="Support" 
          icon="📧"
        />
      </nav>
    </div>
  ),
};

// ✅ Stress Test mit Button (NEU)
export const StressTestButton: Story = {
  args: {
    href: "https://example.com",
    linkType: "extern",
    buttonVariant: "primary",
    buttonSize: "large",
    icon: <ExternalLink />,
    iconPosition: "right",
    label: "Komplexer Button-Link",
    title: "Tooltip Information",
    ariaLabel: "Barrierefreie Beschreibung",
    analyticsId: "stress-test-button-link",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "custom-class",
    onClick: (e) => {
      e.preventDefault();
      console.log("Stress Test Button geklickt");
    },
  },
};

// ✅ Vergleich: Normaler Link vs Button (NEU)
export const Comparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg border">
      <h3 className="text-lg font-semibold">Vergleich: Link vs Button-Look</h3>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Anchor href="/" variant="primary" label="Normaler Link" />
          <span className="text-gray-500">→</span>
          <Anchor href="/" buttonVariant="primary" label="Button-Look" />
        </div>
        
        <div className="flex items-center gap-4">
          <Anchor href="/" variant="secondary" label="Secondary Link" />
          <span className="text-gray-500">→</span>
          <Anchor href="/" buttonVariant="secondary" label="Secondary Button" />
        </div>
        
        <div className="flex items-center gap-4">
          <Anchor href="/" underline="hover" label="Text Link" />
          <span className="text-gray-500">→</span>
          <Anchor href="/" buttonVariant="outline" label="Outline Button" />
        </div>
      </div>
    </div>
  ),
};