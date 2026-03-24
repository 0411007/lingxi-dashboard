"use client"

import { ChevronLeft, Settings, Headphones, Sparkles } from "lucide-react"

export function ChatHeader() {
  return (
    <header className="relative h-14 bg-card/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-4 flex-shrink-0 z-40">
      {/* Back Button */}
      <div className="flex items-center gap-1 text-muted-foreground cursor-pointer hover:text-foreground transition-colors w-16">
        <ChevronLeft className="w-5 h-5" />
        <span className="text-[13px] font-medium">店铺</span>
      </div>
      
      {/* Title & Status */}
      <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <h1 className="text-[15px] font-bold text-foreground tracking-tight">灵犀</h1>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] text-muted-foreground font-medium">AI 在线服务中</span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-2 w-16 justify-end">
        <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors">
          <Settings className="w-4 h-4 text-muted-foreground" />
        </button>
        <button className="flex items-center gap-1 text-primary text-[11px] font-bold bg-primary/10 px-2 py-1.5 rounded-lg hover:bg-primary/15 transition-colors">
          <Headphones className="w-3.5 h-3.5" />
          <span>人工</span>
        </button>
      </div>
    </header>
  )
}
