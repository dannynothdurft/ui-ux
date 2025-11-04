import React from 'react'
import Link from 'next/link'
import styles from './styles/ServiceCard.module.css'
import { ServiceCardProps } from './types/ServiceCard.types'
import {
  defaultConfig,
  getStatusInfo,
  getBusinessTypeText,
  getConfigByBusinessType,
} from './config/ServiceCard.config'
import Lucy from './images/lucy.png'
import Image from 'next/image'

export const ServiceCard: React.FC<ServiceCardProps> = ({
  config = {},
  className = '',
}) => {
  // Konfiguration basierend auf Business Type laden
  const businessType = config.businessType || defaultConfig.businessType
  const mergedConfig = getConfigByBusinessType(businessType, config)

  const statusInfo = mergedConfig.service.status
    ? getStatusInfo(mergedConfig.service.status)
    : null
  const businessTypeText = getBusinessTypeText(mergedConfig.businessType)

  return (
    <section className={`${styles.card} ${className}`}>
      {/* Left Column - Service Info */}
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Image
            src={Lucy}
            alt={`${mergedConfig.developer.name} Logo`}
            width={120}
            height={120}
            className={styles.icon}
          />
        </div>
        <div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{mergedConfig.service.title}</h2>
            {statusInfo && (
              <span
                className={`${styles.statusBadge} ${
                  styles[statusInfo.className]
                }`}
              >
                {statusInfo.text}
              </span>
            )}
          </div>
          <p className={styles.description}>
            {mergedConfig.service.description}
          </p>
          {mergedConfig.service.technologies &&
            mergedConfig.service.technologies.length > 0 && (
              <div className={styles.technologiesContainer}>
                {mergedConfig.service.technologies.map((tech, index) => (
                  <span key={index} className={styles.technologyChip}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>

      {/* Right Column - Developer & Business Info */}
      <div className={styles.content}>
        <p className={styles.intro}>
          Diese Webseite wurde konzipiert, gestaltet und entwickelt von:
        </p>

        <div className={styles.developerCard}>
          <h3 className={styles.developerName}>
            {mergedConfig.developer.name}
          </h3>
          <p className={styles.developerDescription}>
            {mergedConfig.developer.description}
          </p>
          {mergedConfig.developer.role && (
            <p className={styles.developerRole}>
              <strong>Rolle:</strong> {mergedConfig.developer.role}
            </p>
          )}
        </div>

        {/* Business Info Section */}
        {mergedConfig.display?.showBusinessInfo && (
          <div className={styles.businessInfo}>
            <div className={styles.businessInfoItem}>
              <span className={styles.businessInfoLabel}>Projekt-Typ:</span>
              <span className={styles.businessInfoValue}>
                {businessTypeText}
              </span>
            </div>
            {mergedConfig.project?.businessModel && (
              <div className={styles.businessInfoItem}>
                <span className={styles.businessInfoLabel}>
                  Business-Modell:
                </span>
                <span className={styles.businessInfoValue}>
                  {mergedConfig.project.businessModel}
                </span>
              </div>
            )}
            {mergedConfig.project?.acquisitionDate && (
              <div className={styles.businessInfoItem}>
                <span className={styles.businessInfoLabel}>Akquiriert:</span>
                <span className={styles.businessInfoValue}>
                  {mergedConfig.project.acquisitionDate}
                </span>
              </div>
            )}
          </div>
        )}

        <Link
          href={mergedConfig.developer.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.websiteLink}
        >
          {mergedConfig.developer.websiteDisplay}
        </Link>
      </div>
    </section>
  )
}
