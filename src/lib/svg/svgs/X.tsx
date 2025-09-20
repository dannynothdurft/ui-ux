'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const X: FC<SVGProps> = ({
  width = '22px',
  height = '22px',
  Dref,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-ref={Dref}
    >
      <g>
        <path
          id="Vector"
          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
          strokeWidth="2"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-ref={Dref}
        />
      </g>
    </svg>
  )
}

export default X
