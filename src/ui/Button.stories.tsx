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
    child: "Default Button",
    variant: "primary",
  },
};

// ✅ Alle Varianten
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button variant="primary" child="Primary" />
      <Button variant="secondary" child="secondary" />
      <Button variant="outline" child="outline" />
      <Button variant="ghost" child="ghost" />
      <Button variant="success" child="success" />
      <Button variant="warning" child="warning" />
      <Button variant="error" child="error" />
    </div>
  ),
};

// ✅ Alle Größen
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="small"  child="Small" />
      <Button size="medium"  child="Medium" />
      <Button size="large"  child="Large" />
    </div>
  ),
};

// ✅ Mit Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button icon={<ExternalLink />} iconPosition="left" child="Icon Left" />
      <Button icon={<ExternalLink />} iconPosition="right" child="Icon Right" />
    </div>
  ),
};

// ✅ Loading State
export const Loading: Story = {
  args: {
    child: "Loading Button",
    loading: true,
  },
};

// ✅ Disabled State
export const Disabled: Story = {
  args: {
    child: "Disabled Button",
    disabled: true,
  },
};

// ✅ Full Width
export const FullWidth: Story = {
  args: {
    child: "Full Width Button",
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
      <Button variant="primary" size="large" icon={<ExternalLink />} child="Large Primary with Icon" />
      <Button variant="outline" loading child="Loading Outline" />
      <Button variant="success" disabled child="disamble success" />
    </div>
  ),
};