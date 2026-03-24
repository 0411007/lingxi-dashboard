"use client"

import { ReactNode } from "react"
import { Sparkles } from "lucide-react"

interface AIMessageProps {
  content: ReactNode
  delay?: number
  quickReplies?: string[]
  children?: ReactNode
}

export function AIMessage({ content, delay = 0, quickReplies, children }: AIMessageProps) {
  return (
    <div 
      className="flex items-start gap-2.5 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* AI Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center border-2 border-white shadow-lg shadow-primary/30">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {/* Online Indicator */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm shadow-emerald-500/50" />
      </div>
      
      {/* Message Content */}
      <div className="flex flex-col gap-2.5 max-w-[260px]">
        <span className="text-[11px] text-muted-foreground font-medium ml-1">灵犀助理</span>
        
        {/* Text Bubble */}
        <div className="ai-bubble bg-card p-4 text-[14px] leading-relaxed text-foreground border border-border/60 shadow-lg shadow-slate-200/50">
          {content}
        </div>
        
        {/* Quick Reply Buttons */}
        {quickReplies && quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="px-3.5 py-2 bg-white border border-primary/30 rounded-full text-[12px] text-primary font-semibold hover:bg-primary/5 hover:border-primary/50 active:scale-95 transition-all shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}
        
        {/* Additional Content (Cards, etc.) */}
        {children}
      </div>
    </div>
  )
}
