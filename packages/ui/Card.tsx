import * as React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-300 shadow-md p-4 rounded-2xl">
      {children}
    </div>
  )
}
