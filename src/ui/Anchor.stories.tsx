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
      description: "Farbschema des Links",
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

// ✅ Alle Varianten
export const AllVariants: Story = {
  render: () => (
    <div>
      <Anchor href="/" variant="primary" label="Primary Link" className='p-lg'/>
      <Anchor href="/" variant="secondary" label="Secondary Link" className='p-lg'/>
      <Anchor href="/" variant="default" label="Default Link" className='p-lg'/>
      <Anchor href="/" variant="success" label="Success Link" className='p-lg'/>
      <Anchor href="/" variant="warning" label="Warning Link" className='p-lg'/>
      <Anchor href="/" variant="error" label="Error Link" className='p-lg'/>
    </div>
  ),
};

// ✅ Underline Varianten
export const UnderlineVariants: Story = {
  render: () => (
    <div>
      <Anchor href="/" underline="always" label="Always Underline" className='p-lg'/>
      <Anchor href="/" underline="hover" label="Hover Underline" className='p-lg'/>
      <Anchor href="/" underline="none" label="No Underline" className='p-lg'/>
    </div>
  ),
};

// ✅ Icon Varianten
export const IconVariants: Story = {
  render: () => (
    <div>
      <Anchor 
        href="/" 
        label="Left Icon" 
        icon={<ExternalLink />} 
        iconPosition="left" 
        className='p-lg'
      />
      <Anchor 
        href="/" 
        label="Right Icon" 
        icon={<ExternalLink />} 
        iconPosition="right" 
        className='p-lg'
      />
      <Anchor 
        href="/" 
        icon={<ExternalLink />}
        iconPosition="left"
        className='p-lg'
      >
        <span className="anchor__icon--right">🔗</span>
      </Anchor>
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
      <Anchor href="/">
        Nur Children (span)
      </Anchor>
      <Anchor href="/" label="Nur Label" />
      <Anchor href="/" label="Label wird ignoriert">
        Children haben Priorität
      </Anchor>
      <Anchor href="/" label="Mit komplexen Children">
        <div className="flex items-center gap-2">
          <span>🔗</span>
          <span>Komplexer Inhalt</span>
        </div>
      </Anchor>
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
        label="Mit Title" 
        title="Tooltip Information" 
      />
      <Anchor 
        href="/" 
        label="Analytics Tracking" 
        analyticsId="nav-main-link" 
      />
      <Anchor 
        href="/coming-soon" 
        label="Disabled Link" 
        aria-disabled="true"
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
        label="Download PDF" 
        download 
      />
      <Anchor 
        href="/document.docx" 
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
        label="_blank Target" 
        target="_blank" 
      />
      <Anchor 
        href="/" 
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
        variant="primary" 
        underline="hover" 
        icon={<ExternalLink />} 
        iconPosition="right" 
        label="Kombinierter Link" 
        target="_blank"
        rel="noopener noreferrer"
      />
      <Anchor 
        href="mailto:team@example.com" 
        variant="secondary" 
        label="Team Kontakt" 
        icon="📧"
        iconPosition="left"
      />
    </div>
  ),
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

// ✅ OnClick Handler
export const WithClickHandler: Story = {
  args: {
    href: "#",
    label: "Click Me",
    variant: "primary",
    onClick: (e) => {
      e.preventDefault();
      alert("Link wurde geklickt!");
    },
  },
};

// ✅ Komplexes Beispiel
export const ComplexExample: Story = {
  render: () => (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <nav className="flex flex-col gap-2">
        <Anchor href="/" label="Home" variant="primary" />
        <Anchor href="/about" label="Über uns" />
        <Anchor href="/contact" label="Kontakt" />
        <Anchor 
          href="https://github.com/your-repo" 
          label="GitHub" 
          linkType="extern"
          icon={<ExternalLink />}
          iconPosition="right"
          target="_blank"
        />
        <Anchor 
          href="mailto:support@example.com" 
          label="Support" 
          icon="📧"
        />
      </nav>
    </div>
  ),
};

// ✅ Stress Test
export const StressTest: Story = {
  args: {
    href: "https://example.com",
    linkType: "extern",
    variant: "warning",
    underline: "always",
    icon: <ExternalLink />,
    iconPosition: "right",
    label: "Komplexer Link mit vielen Props",
    title: "Tooltip Information",
    ariaLabel: "Barrierefreie Beschreibung",
    analyticsId: "stress-test-link",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "custom-class",
    onClick: (e) => {
      e.preventDefault();
      console.log("Stress Test geklickt");
    },
  },
};