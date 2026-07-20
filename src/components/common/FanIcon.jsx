import React from 'react'

function FanIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill="#138808" />
      <circle cx="32" cy="32" r="24" fill="#ffffff" />
      <path
        d="M32 18c-2 8-8 12-14 12 6 0 10 4 14 12 4-8 8-12 14-12-6 0-12-4-14-12Z"
        fill="#138808"
      />
      <path
        d="M32 46c2-8 8-12 14-12-6 0-10-4-14-12-4 8-8 12-14 12 6 0 12 4 14 12Z"
        fill="#138808"
      />
      <path
        d="M18 32c8-2 12-8 12-14 0 6-4 10-12 14 8 4 12 8 12 14 0-6 4-10 12-14-8-2-12-8-12-14 0 6-4 10-12 14Z"
        fill="#138808"
      />
      <circle cx="32" cy="32" r="5" fill="#FF9933" stroke="#138808" strokeWidth="2" />
    </svg>
  )
}

export default FanIcon
