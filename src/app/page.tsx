import Anchor from "@/ui/Anchor";
import { ExternalLink } from '@/lib/svg';

export default function Home() {
  return (<>
    <p>  <Anchor 
        href="/" 
        label="Left Icon" 
        icon={<ExternalLink />} 
        iconPosition="left" 
      />Lorem ipsum dolor  <Anchor 
        href="/" 
        label="Right Icon" 
        icon={<ExternalLink />} 
        iconPosition="right" 
      /> sit amet <Anchor href="#" variant='primary'/> consectetur adipisicing elit. Nemo magnam facilis <Anchor href="#" variant='secondary'/> amet consectetur. Voluptatum inventore eveniet reprehenderit repudiandae quasi magnam quod dolore, cupiditate hic ad suscipit sapiente, molestiae autem ipsam?</p>
   <div>
      <Anchor 
        href="/" 
        label="Left Icon" 
        icon={<ExternalLink />}
        iconPosition="left" 
      />
      <Anchor 
        href="/" 
        label="Right Icon" 
        icon={<ExternalLink />} 
        iconPosition="right" 
      />
      <Anchor 
        href="/" 
        icon={<ExternalLink />}
        iconPosition="left"
      >
        <span className="anchor__icon--right">🔗</span>
      </Anchor>
    </div>
  </>
  )
}
