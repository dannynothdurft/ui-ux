import Anchor from '@/ui/Anchor'
import DesktopNav from '@/ux/DesktopNav'
import MobileNav from '@/ux/MobileNav'

export default function Service() {
  return (<div className="flex flex-col gap-6 items-center">
    <DesktopNav />
    <MobileNav />

    <h2>Service</h2>
    <Anchor label='Startseite' href='/'/>
    </div>
  )
}
