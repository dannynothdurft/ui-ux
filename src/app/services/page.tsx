import Anchor from '@/ui/Anchor'
import DesktopNav from '@/ux/DesktopNav'

export default function Service() {
  return (<div className="flex flex-col gap-6 items-center">
    <DesktopNav />

    <h2>Service</h2>
    <Anchor label='Startseite' href='/'/>
    </div>
  )
}
