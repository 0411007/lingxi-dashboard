"use client"

import { Signal, Wifi, Battery } from "lucide-react"

export function IOSStatusBar() {
  return (
    <div className="relative h-14 flex items-center justify-between px-8 pt-3 flex-shrink-0 z-40 bg-background">
      {/* Left: Time */}
      <div className="w-16">
        <span className="text-[15px] font-semibold text-foreground tracking-tight">9:41</span>
      </div>
      
      {/* Center: Space for Dynamic Island */}
      <div className="w-[126px]" />
      
      {/* Right: Status Icons */}
      <div className="w-16 flex items-center justify-end gap-1">
        <Signal className="w-4 h-4 text-foreground" />
        <Wifi className="w-4 h-4 text-foreground" />
        <div className="relative flex items-center">
          <Battery className="w-6 h-6 text-foreground" />
        </div>
      </div>
    </div>
  )
}
