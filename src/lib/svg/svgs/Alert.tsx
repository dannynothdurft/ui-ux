'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const Alert: FC<SVGProps> = ({
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
        opacity="0.1"
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        fill="currentColor"
        data-ref={Dref}
      />
      <path
        d="M12 8L12 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-ref={Dref}
      />
      <path
        d="M12 16V15.9888"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-ref={Dref}
      />
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-ref={Dref}
      />
    </svg>
  )
}

export default Alert
