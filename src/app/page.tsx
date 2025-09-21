import Logo from '@/ux/Logo';

export default function Home() {
  return (   <div className="flex flex-col gap-6 items-center">
      <Logo type="icon" companyName="QuickStatus" />
      <Logo type="text" companyName="QuickStatus" />
      <Logo type="full" companyName="QuickStatus" tagline="Real-Time Monitoring" />
    </div>
  )
}
