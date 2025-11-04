export type BusinessType =
  | 'own-saas'
  | 'client-work'
  | 'cooperation'
  | 'acquired-project'
  | 'portfolio-project'

export interface ServiceCardConfig {
  businessType: BusinessType
  service: {
    title?: string
    description?: string
    technologies?: string[]
    status?: 'active' | 'maintenance' | 'development' | 'for-sale'
  }
  developer: {
    name: string
    description: string
    website: string
    websiteDisplay: string
    email?: string
    role?: string
  }
  project?: {
    acquisitionDate?: string
    developmentPeriod?: string
    technologiesUsed?: string[]
    businessModel?: string
  }
  display?: {
    showTechnologies?: boolean
    showStatus?: boolean
    showBusinessInfo?: boolean
    compactMode?: boolean
  }
}

export interface ServiceCardProps {
  config?: Partial<ServiceCardConfig>
  className?: string
}

export interface IconProps {
  className?: string
}

export interface StatusBadgeProps {
  status: string
  className?: string
}

export interface TechnologyChipProps {
  technology: string
  className?: string
}
