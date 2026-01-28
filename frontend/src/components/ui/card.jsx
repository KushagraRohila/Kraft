import React from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`${className} bg-white`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default Card
