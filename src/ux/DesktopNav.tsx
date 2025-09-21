"use client"
import { NAV_ITEMS, NavItem } from '@/config/nav.config';
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const DesktopNav: React.FC = () => {
  const pathname = usePathname();
  
  const renderNavItem = (item: NavItem) => {
    switch (item.type) {
      case 'link':
        return (
          <li key={item.id} className="desktop-nav__item">
            <Link href={item.href} className={pathname === item.href ? "desktop-nav__link desktop-nav__link--active" : "desktop-nav__link"}>
              {item.icon && <span className="desktop-nav__icon">{item.icon}</span>}
              {item.label}
            </Link>
          </li>
        );

      case 'dropdown':
        return (
          <li key={item.id} className="desktop-nav__item">
            <span className={pathname === item.href ? "desktop-nav__link desktop-nav__link--active" : "desktop-nav__link"}>
              {item.icon && <span className="desktop-nav__icon">{item.icon}</span>}
              {item.label}
            </span>
            {item.children && (
              <div className="desktop-nav__dropdown">
                {item.children.map((child) => (
                  <div key={child.id} className="desktop-nav__dropdown-item">
                    <Link href={child.href} className="desktop-nav__dropdown-link">
                      {child.label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </li>
        );

      case 'mega-menu':
        return (
          <li key={item.id} className="desktop-nav__item">
            <span className={pathname === item.href ? "desktop-nav__link desktop-nav__link--active" : "desktop-nav__link"}>
              {item.icon && <span className="desktop-nav__icon">{item.icon}</span>}
              {item.label}
            </span>
            {item.featured && (
              <div className="desktop-nav__mega-menu">
                <div className="desktop-nav__mega-menu-grid">
                  {item.featured.map((section) => (
                    <div key={section.title} className="desktop-nav__mega-menu-section">
                      <h4 className="desktop-nav__mega-menu-title">{section.title}</h4>
                      <ul className="desktop-nav__mega-menu-list">
                        {section.items.map((sectionItem) => (
                          <li key={sectionItem.id} className="desktop-nav__mega-menu-item">
                            <Link href={sectionItem.href} className="desktop-nav__mega-menu-link">
                              {sectionItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        );

      default:
        return null;
    }
  };

  return (
    <nav className="desktop-nav" aria-label="Hauptnavigation">
      <ul className="desktop-nav__list">
        {NAV_ITEMS.map(renderNavItem)}
      </ul>
    </nav>
  );
};

export default DesktopNav;