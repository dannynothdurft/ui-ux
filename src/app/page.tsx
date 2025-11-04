import { ServiceCard } from '@/module/service-card/ServiceCard'
export default function Home() {
  return (
    <>
      <ServiceCard />
      <ServiceCard
        config={{
          businessType: 'portfolio-project',
        }}
      />
      <ServiceCard
        config={{
          businessType: 'cooperation',
        }}
      />
    </>
  )
}
