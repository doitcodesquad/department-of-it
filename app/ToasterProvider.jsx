// app/ToasterProvider.js
'use client'
import { Toaster } from 'sonner'
import { Icon } from '@iconify/react'

export function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'left-style group pointer-events-auto relative flex w-[83%] md:w-full items-center justify-center md:justify-start space-x-3 overflow-hidden border-2 border-black bg-emerald-50 p-3 md:p-4 shadow-lg transition-all absolute z-30 right-14 md:bottom-12 scale-90 md:scale-100',
        },
        icons: {
          success: () => <Icon icon="ic:round-check-circle" className="text-blue-300 text-8xl mr-3" />,
          error: () => <Icon icon="ic:round-error" className="text-red-500 text-2xl mr-3" />,
          info: () => <Icon icon="ic:round-info" className="text-blue-500 text-2xl mr-3" />,
          warning: () => <Icon icon="ic:round-warning" className="text-yellow-500 text-2xl mr-3" />,
        },
      }}
    />
  )
}