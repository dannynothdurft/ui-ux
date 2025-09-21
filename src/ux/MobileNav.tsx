"use client"
import { NAV_ITEMS, NavItem } from '@/config/nav.config';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenus(new Set());
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setOpenSubmenus(new Set());
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenus(new Set());
  };

  const toggleSubmenu = (id: string) => {
    const newOpenSubmenus = new Set(openSubmenus);
    if (newOpenSubmenus.has(id)) {
      newOpenSubmenus.delete(id);
    } else {
      newOpenSubmenus.add(id);
    }
    setOpenSubmenus(newOpenSubmenus);
  };

  const renderNavItem = (item: NavItem) => {
    switch (item.type) {
      case 'link':
        return (
          <li key={item.id} className="mobile-nav__item">
            <Link 
              href={item.href} 
              className={pathname === item.href ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"}
              onClick={closeMenu}
            >
              {item.icon && <span className="mobile-nav__icon">{item.icon}</span>}
              {item.label}
            </Link>
          </li>
        );

      case 'dropdown':
        return (
          <li key={item.id} className="mobile-nav__item">
            <button 
              className={`mobile-nav__link mobile-nav__link--has-children ${openSubmenus.has(item.id) ? 'mobile-nav__link--expanded' : ''}`}
              onClick={() => toggleSubmenu(item.id)}
              aria-expanded={openSubmenus.has(item.id)}
            >
              {item.icon && <span className="mobile-nav__icon">{item.icon}</span>}
              {item.label}
              <svg 
                className={`mobile-nav__chevron ${openSubmenus.has(item.id) ? 'mobile-nav__chevron--rotated' : ''}`} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {item.children && (
              <div className={`mobile-nav__dropdown ${openSubmenus.has(item.id) ? 'mobile-nav__dropdown--open' : ''}`}>
                {item.children.map((child) => (
                  <div key={child.id} className="mobile-nav__dropdown-item">
                    <Link 
                      href={child.href} 
                      className="mobile-nav__dropdown-link"
                      onClick={closeMenu}
                    >
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
          <li key={item.id} className="mobile-nav__item">
            <button 
              className={`mobile-nav__link mobile-nav__link--has-children ${openSubmenus.has(item.id) ? 'mobile-nav__link--expanded' : ''}`}
              onClick={() => toggleSubmenu(item.id)}
              aria-expanded={openSubmenus.has(item.id)}
            >
              {item.icon && <span className="mobile-nav__icon">{item.icon}</span>}
              {item.label}
              <svg 
                className={`mobile-nav__chevron ${openSubmenus.has(item.id) ? 'mobile-nav__chevron--rotated' : ''}`} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {item.featured && (
              <div className={`mobile-nav__mega-menu ${openSubmenus.has(item.id) ? 'mobile-nav__mega-menu--open' : ''}`}>
                {item.featured.map((section) => (
                  <div key={section.title} className="mobile-nav__mega-menu-section">
                    <h4 className="mobile-nav__mega-menu-title">{section.title}</h4>
                    <ul className="mobile-nav__mega-menu-list">
                      {section.items.map((sectionItem) => (
                        <li key={sectionItem.id} className="mobile-nav__mega-menu-item">
                          <Link 
                            href={sectionItem.href} 
                            className="mobile-nav__mega-menu-link"
                            onClick={closeMenu}
                          >
                            {sectionItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <button
        className={`mobile-nav__toggle ${isOpen ? 'mobile-nav__toggle--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menü öffnen oder schließen"
        aria-expanded={isOpen}
      >
        <span className="mobile-nav__toggle-line"></span>
        <span className="mobile-nav__toggle-line"></span>
        <span className="mobile-nav__toggle-line"></span>
      </button>

      <div 
        className={`mobile-nav__overlay ${isOpen ? 'mobile-nav__overlay--visible' : ''}`} 
        onClick={closeMenu}
      ></div>

      <nav 
        ref={mobileNavRef}
        className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} 
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav__header">
          <button 
            className="mobile-nav__close" 
            onClick={closeMenu}
            aria-label="Menü schließen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <ul className="mobile-nav__list">
          {NAV_ITEMS.map(renderNavItem)}
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;