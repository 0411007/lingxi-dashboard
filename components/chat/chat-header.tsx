"use client"

import { ChevronLeft, Headphones, Sparkles } from "lucide-react"

export function ChatHeader() {
  return (
    <header className="relative h-14 bg-card/90 backdrop-blur-xl border-b border-border/40 flex items-center justify-between px-4 flex-shrink-0 z-40">
      {/* Back Button */}
      <div className="flex items-center gap-0.5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors w-14">
        <ChevronLeft className="w-5 h-5" />
        <span className="text-[14px] font-medium">返回</span>
      </div>
      
      {/* Title & Status */}
      <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-[17px] font-bold text-foreground tracking-tight">灵犀</h1>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50" />
          <span className="text-[11px] text-muted-foreground font-medium">AI智能服务中</span>
        </div>
      </div>
      
      {/* Human Service Button - Pill Style */}
      <button className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/80 text-white text-[12px] font-semibold px-3.5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all shadow-md">
        <Headphones className="w-3.5 h-3.5" />
        <span>人工</span>
      </button>
    </header>
  )
}
