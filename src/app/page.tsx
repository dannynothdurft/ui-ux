import { Section, SectionContent,SectionItem, SectionImage, SectionText, } from '@/ux/Section';

export default function Home() {
  return (<>
<Section padding="large">
  <SectionContent layout="grid-4" gap="md" verticalAlign="stretch">

  <SectionText align="center">
        <h2>Doppelte Breite</h2>
        <p>Dieser Bereich nimmt doppelt so viel Platz ein.</p>
        </SectionText>
        <SectionText align="center">
        <h2>Doppelte Breite</h2>
        <p>Dieser Bereich nimmt doppelt so viel Platz ein.</p>
        </SectionText>
 
        <h2 className='text-center'>Doppelte Breite</h2>
        <p>Dieser Bereich nimmt doppelt so viel Platz ein.</p>
 
     
        <h2 className='text-center'>Doppelte Breite</h2>
        <p>Dieser Bereich nimmt doppelt so viel Platz ein.</p>
    
  </SectionContent>
</Section>

<Section>
  <SectionContent layout="flex-row" verticalAlign="center" gap="lg">
    <SectionItem flex={2}>
      <SectionText align="center">
        <h2>Doppelte Breite</h2>
        <p>Dieser Bereich nimmt doppelt so viel Platz ein.</p>
      </SectionText>
    </SectionItem>
    <SectionItem flex={1}>
      <SectionImage 
        src="/image.png" 
        alt="Beschreibung" 
        aspectRatio="square"
        objectFit="cover"
      />
    </SectionItem>
  </SectionContent>
</Section>

<Section backgroundColor="#f5f5f5">
  <SectionContent layout="image-left" verticalAlign="center" gap="xl">
    <SectionImage 
      src="/image.png" 
      alt="Hero Image" 
      fullWidth
      objectFit="cover"
      aspectRatio="landscape"
    />
    <SectionText align="center">
      <h1>Überschrift</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>Call to Action</button>
    </SectionText>
  </SectionContent>
</Section>
  </>
  )
}
