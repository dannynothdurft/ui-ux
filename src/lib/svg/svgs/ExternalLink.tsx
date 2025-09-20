'use client'
import SVGProps from '@/models/SVGProps'
import React, { FC } from 'react'

const ExternalLink: FC<SVGProps> = ({
  width = '22px',
  height = '22px',
  Dref,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 32 32"
      data-ref={Dref}
      height={height}
      width={width}
      fill="currentColor"
    >
      <path
        d="M23.5 23.5h-15v-15h4.791V6H6v20h20v-7.969h-2.5z"
        data-ref={Dref}
      />
      <path
        d="M17.979 6l3.016 3.018-6.829 6.829 1.988 1.987 6.83-6.828L26 14.02V6z"
        data-ref={Dref}
      />
    </svg>
  )
}

export default ExternalLink
