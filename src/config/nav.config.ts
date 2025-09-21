// config/nav.config.ts
export interface NavItem {
  id: string;
  label: string;
  href: string;
  type: 'link' | 'dropdown' | 'mega-menu';
  description?: string;
  icon?: string;
  children?: NavItem[];
  featured?: {
    title: string;
    items: NavItem[];
  }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    type: 'link'
  },
  {
    id: 'services',
    label: 'Leistungen',
    href: '/services',
    type: 'dropdown',
    children: [
      {
        id: 'web-development',
        label: 'Webentwicklung',
        href: '/services/web-development',
        type: 'link'
      },
      {
        id: 'seo',
        label: 'SEO Optimization',
        href: '/services/seo',
        type: 'link'
      }
    ]
  },
  {
    id: 'about',
    label: 'Über uns',
    href: '/about',
    type: 'mega-menu',
    featured: [
      {
        title: 'Unternehmen',
        items: [
          {
            id: 'team',
            label: 'Team',
            href: '/about/team',
            type: 'link'
          },
          {
            id: 'history',
            label: 'Geschichte',
            href: '/about/history',
            type: 'link'
          }
        ]
      },
       {
        title: 'Unternehmen',
        items: [
          {
            id: 'team',
            label: 'Team',
            href: '/about/team',
            type: 'link'
          },
          {
            id: 'history',
            label: 'Geschichte',
            href: '/about/history',
            type: 'link'
          }
        ]
       },
        {
        title: 'Unternehmen',
        items: [
          {
            id: 'team',
            label: 'Team',
            href: '/about/team',
            type: 'link'
          },
          {
            id: 'history',
            label: 'Geschichte',
            href: '/about/history',
            type: 'link'
          }
        ]
      }
    ]
  },
  {
    id: 'contact',
    label: 'Kontakt',
    href: '/contact',
    type: 'link'
  }
];