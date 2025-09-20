'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const DoubleArrow: FC<SVGProps> = ({
  width = '30px',
  height = '30px',
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
        d="M13 19L7 12L8.5 10.25M13 5L11 7.33333"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="1.5"
        data-ref={Dref}
      />
      <path
        d="M17 5L11 12L12.5 13.75M17 19L15 16.6667"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        strokeWidth="1.5"
        data-ref={Dref}
      />
    </svg>
  )
}

export default DoubleArrow
