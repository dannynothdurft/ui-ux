import DesktopNav from '@/ux/DesktopNav'
import MobileNav from '@/ux/MobileNav';
import Logo from '@/ux/Logo';

export default function Home() {
  return (<div className="flex flex-col gap-6 items-center">
    <DesktopNav />
    <MobileNav />
      <Logo type="icon" companyName="QuickStatus" />
      <Logo type="text" companyName="QuickStatus" />
      <Logo type="full" companyName="QuickStatus" tagline="Real-Time Monitoring" />
    </div>
  )
}
