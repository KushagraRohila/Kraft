import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
