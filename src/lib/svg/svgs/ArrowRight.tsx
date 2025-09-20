'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const ArrowRight: FC<SVGProps> = ({
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
        d="M5 12H19M19 12L13 6M19 12L13 18"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
    </svg>
  )
}

export default ArrowRight
