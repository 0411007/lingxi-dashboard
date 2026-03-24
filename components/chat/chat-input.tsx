"use client"

import { useState } from "react"
import { Plus, Camera, Mic, Send, Image, Smile } from "lucide-react"

export function ChatInput() {
  const [message, setMessage] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <footer className="bg-card/95 backdrop-blur-xl border-t border-border/50 px-4 pt-3 pb-8 flex-shrink-0 z-40">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="mb-3 flex gap-4 justify-center py-3 animate-slide-up">
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Camera className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] text-muted-foreground">拍照</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Image className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] text-muted-foreground">相册</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mic className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] text-muted-foreground">语音</span>
          </button>
        </div>
      )}
      
      {/* Input Row */}
      <div className="flex items-center gap-3">
        {/* Expand Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isExpanded 
              ? 'bg-primary text-white rotate-45' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <Plus className="w-5 h-5" />
        </button>
        
        {/* Text Input */}
        <div className="flex-1 h-11 bg-muted/60 rounded-full px-4 flex items-center border border-transparent focus-within:border-primary/30 focus-within:bg-card focus-within:shadow-soft transition-all">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入您的穿搭需求..." 
            className="bg-transparent border-none outline-none w-full text-[13px] text-foreground placeholder:text-muted-foreground"
          />
          <button className="ml-2 text-muted-foreground hover:text-primary transition-colors">
            <Smile className="w-5 h-5" />
          </button>
        </div>
        
        {/* Send / Voice Button */}
        {message.trim() ? (
          <button className="w-11 h-11 btn-gradient rounded-full flex items-center justify-center text-white shadow-float active:scale-90 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <button className="w-11 h-11 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all group">
            <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="flex gap-2 mt-3 overflow-x-auto hide-scrollbar pb-1">
        {["帮我搭配", "查看尺码", "有什么优惠", "推荐爆款"].map((action, index) => (
          <button 
            key={index}
            className="px-3 py-1.5 bg-muted/50 text-[11px] text-muted-foreground font-medium rounded-full border border-border/50 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap flex-shrink-0"
          >
            {action}
          </button>
        ))}
      </div>
    </footer>
  )
}
