import { BusinessType, ServiceCardConfig } from '../types/ServiceCard.types'

export const defaultConfig: ServiceCardConfig = {
  businessType: 'own-saas',
  service: {
    title: 'Webdesign & Entwicklung',
    description: 'Professionelle Webentwicklung mit modernsten Technologien',
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    status: 'active',
  },
  developer: {
    name: 'DevDanny',
    description:
      'Spezialisiert auf moderne Webentwicklung, responsive Design und benutzerfreundliche Lösungen für Unternehmen jeder Größe.',
    website: 'https://www.devdanny.de',
    websiteDisplay: 'www.DevDanny.de',
    email: 'kontakt@devdanny.de',
    role: 'Full-Stack Entwickler & Unternehmer',
  },
  project: {
    technologiesUsed: ['React', 'TypeScript', 'Tailwind CSS'],
    businessModel: 'SaaS',
  },
  display: {
    showTechnologies: true,
    showStatus: true,
    showBusinessInfo: true,
    compactMode: false,
  },
}

// Vollständige Beispiele für verschiedene Business-Types
export const configExamples: Record<BusinessType, ServiceCardConfig> = {
  'own-saas': {
    businessType: 'own-saas',
    service: {
      title: 'Meine SaaS Plattform',
      description: 'Eigenentwicklung einer innovativen Business-Lösung',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      status: 'active',
    },
    developer: {
      name: 'DevDanny',
      description:
        'Entwickler und Gründer eigener SaaS-Produkte mit Fokus auf skalierbare Architekturen.',
      website: 'https://www.devdanny.de',
      websiteDisplay: 'www.DevDanny.de',
      email: 'kontakt@devdanny.de',
      role: 'Founder & Full-Stack Developer',
    },
    project: {
      businessModel: 'Subscription SaaS',
      technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    },
    display: {
      showTechnologies: true,
      showStatus: true,
      showBusinessInfo: true,
      compactMode: false,
    },
  },
  'client-work': {
    businessType: 'client-work',
    service: {
      title: 'Kundenprojekt Webentwicklung',
      description: 'Maßgeschneiderte Web-Lösung für Kunden',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'CMS'],
      status: 'active',
    },
    developer: {
      name: 'DevDanny',
      description:
        'Spezialisiert auf moderne Webentwicklung, responsive Design und benutzerfreundliche Lösungen für Unternehmen jeder Größe.',
      website: 'https://www.devdanny.de',
      websiteDisplay: 'www.DevDanny.de',
      email: 'kontakt@devdanny.de',
      role: 'Freelance Full-Stack Entwickler',
    },
    project: {
      businessModel: 'Project-based',
      technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    },
    display: {
      showTechnologies: true,
      showStatus: true,
      showBusinessInfo: true,
      compactMode: false,
    },
  },
  cooperation: {
    businessType: 'cooperation',
    service: {
      title: 'Partnerschafts-Projekt',
      description: 'Gemeinsame Software-Entwicklung mit Partnern',
      technologies: ['React', 'TypeScript', 'Firebase', 'AWS'],
      status: 'development',
    },
    developer: {
      name: 'DevDanny',
      description:
        'Erfahrung in agiler Zusammenarbeit mit Partnern und Tech-Teams.',
      website: 'https://www.devdanny.de',
      websiteDisplay: 'www.DevDanny.de',
      email: 'kontakt@devdanny.de',
      role: 'Tech Partner & Entwickler',
    },
    project: {
      businessModel: 'Revenue Share',
      technologiesUsed: ['React', 'TypeScript', 'Firebase', 'AWS Amplify'],
    },
    display: {
      showTechnologies: true,
      showStatus: true,
      showBusinessInfo: true,
      compactMode: false,
    },
  },
  'acquired-project': {
    businessType: 'acquired-project',
    service: {
      title: 'Akquiriertes Projekt',
      description:
        'Übernommenes Online-Projekt - Weiterentwicklung & Skalierung',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      status: 'active',
    },
    developer: {
      name: 'DevDanny',
      description:
        'Experte für Due-Diligence, Technologie-Migration und Performance-Optimierung.',
      website: 'https://www.devdanny.de',
      websiteDisplay: 'www.DevDanny.de',
      email: 'kontakt@devdanny.de',
      role: 'Acquisition & Tech Lead',
    },
    project: {
      acquisitionDate: '2024',
      businessModel: 'Mixed Revenue',
      technologiesUsed: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    },
    display: {
      showTechnologies: true,
      showStatus: true,
      showBusinessInfo: true,
      compactMode: false,
    },
  },
  'portfolio-project': {
    businessType: 'portfolio-project',
    service: {
      title: 'Portfolio Projekt',
      description: 'Zum Verkauf stehendes Software-Projekt',
      technologies: ['React', 'MongoDB', 'Express', 'Node.js'],
      status: 'for-sale',
    },
    developer: {
      name: 'DevDanny',
      description:
        'Erfahrung im Aufbau, Betrieb und Verkauf von Software-Projekten.',
      website: 'https://www.devdanny.de',
      websiteDisplay: 'www.DevDanny.de',
      email: 'kontakt@devdanny.de',
      role: 'Project Owner & Developer',
    },
    project: {
      businessModel: 'For Sale',
      technologiesUsed: ['MERN Stack', 'JWT', 'REST API'],
    },
    display: {
      showTechnologies: true,
      showStatus: true,
      showBusinessInfo: true,
      compactMode: false,
    },
  },
}

// Helper function to get status text and color
export const getStatusInfo = (status: string) => {
  const statusMap = {
    active: {
      text: 'Aktiv',
      color: 'green',
      className: 'statusBadgeActive',
    },
    maintenance: {
      text: 'In Wartung',
      color: 'blue',
      className: 'statusBadgeMaintenance',
    },
    development: {
      text: 'In Entwicklung',
      color: 'yellow',
      className: 'statusBadgeDevelopment',
    },
    'for-sale': {
      text: 'Zu Verkaufen',
      color: 'purple',
      className: 'statusBadgeForSale',
    },
  }
  return (
    statusMap[status as keyof typeof statusMap] || {
      text: status,
      color: 'gray',
      className: 'statusBadge',
    }
  )
}

// Helper function to get business type text
export const getBusinessTypeText = (type: BusinessType) => {
  const typeMap = {
    'own-saas': 'Eigenes SaaS',
    'client-work': 'Kundenprojekt',
    cooperation: 'Kooperation',
    'acquired-project': 'Akquiriertes Projekt',
    'portfolio-project': 'Portfolio Projekt',
  }
  return typeMap[type]
}

// Funktion um Konfiguration basierend auf Business Type zu laden
export const getConfigByBusinessType = (
  businessType: BusinessType,
  customConfig?: Partial<ServiceCardConfig>,
): ServiceCardConfig => {
  const baseConfig = configExamples[businessType]
  return {
    ...baseConfig,
    ...customConfig,
    service: {
      ...baseConfig.service,
      ...customConfig?.service,
    },
    developer: {
      ...baseConfig.developer,
      ...customConfig?.developer,
    },
    project: {
      ...baseConfig.project,
      ...customConfig?.project,
    },
    display: {
      ...baseConfig.display,
      ...customConfig?.display,
    },
  }
}
