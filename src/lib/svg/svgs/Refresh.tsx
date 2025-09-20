'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const Refresh: FC<SVGProps> = ({
  width = '22px',
  height = '22px',
  Dref,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      data-ref={Dref}
      height={height}
      width={width}
      fill="none"
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        stroke-Linejoin="round"
        data-ref={Dref}
      />
    </svg>
  )
}

export default Refresh
