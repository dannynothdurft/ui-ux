import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import { ExternalLink } from '@/lib/svg';

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "success", "warning", "error"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ✅ Default Button
export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "primary",
  },
};

// ✅ Alle Varianten
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </div>
  ),
};

// ✅ Alle Größen
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// ✅ Mit Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button icon={<ExternalLink />} iconPosition="left">
        Left Icon
      </Button>
      <Button icon={<ExternalLink />} iconPosition="right">
        Right Icon
      </Button>
    </div>
  ),
};

// ✅ Loading State
export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

// ✅ Disabled State
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// ✅ Full Width
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

// ✅ Kombinierte Beispiele
export const Combined: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="primary" size="large" icon={<ExternalLink />}>
        Large Primary with Icon
      </Button>
      <Button variant="outline" loading>
        Loading Outline
      </Button>
      <Button variant="success" disabled>
        Disabled Success
      </Button>
    </div>
  ),
};