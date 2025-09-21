import Anchor from "@/ui/Anchor";
import Button from '@/ui/Button';
import { ExternalLink } from '@/lib/svg';

export default function Home() {
  return (<div className="flex flex-col gap-4"> <Anchor href="/" buttonVariant="primary" label="Primary Button" />  <Anchor href="/" buttonVariant="primary" buttonSize="medium" label="Medium" /> <Anchor href="/" buttonVariant="secondary" label="Secondary Button" /> <Anchor href="/" buttonVariant="outline" label="Outline Button" /> <Anchor href="/" buttonVariant="ghost" label="Ghost Button" /> <Anchor href="/" buttonVariant="success" label="Success Button" /> <Anchor href="/" buttonVariant="warning" label="Warning Button" /> <Anchor href="/" buttonVariant="error" label="Error Button" /> <Anchor href="/" buttonVariant="glass" label="Glass Button" /> </div>
  )
}
