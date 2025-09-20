import Anchor from "@/ui/Anchor";

export default function Home() {
  return (<>
  <Anchor href="#"/>
  <Anchor href="#" label="Test" linkType="intern" />
  <Anchor href="https://www.quickstatus.de" label="QuickStatus" linkType='extern' />
  <Anchor href="#" label="Test" linkType='ugc' />
  <Anchor href="#" label="Test" />
  <Anchor href="#" children={<p>Was geht ab</p>} />
  </>
  )
}
