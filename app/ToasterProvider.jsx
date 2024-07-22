// app/ToasterProvider.js
'use client'
import { Toaster } from 'sonner'
import { Icon } from '@iconify/react'

export function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        unstyled: true,
        closeButton: true,
        classNames: {
          success: 'toast-success group pointer-events-auto relative flex w-[83%] md:w-full items-center justify-start md:justify-start space-x-3 overflow-hidden border-2 border-black bg-emerald-50 p-3 md:p-4 shadow-lg transition-all absolute z-30 right-14 md:bottom-12 scale-90 md:scale-100',
          error: 'toast-error group pointer-events-auto relative flex w-[83%] md:w-full items-center justify-start md:justify-start space-x-3 overflow-hidden border-2 border-black bg-emerald-50 p-3 md:p-4 shadow-lg transition-all absolute z-30 right-14 md:bottom-12 scale-90 md:scale-100',
          description: 'text-sm text-black'
        },
      }}
    />
  )
}