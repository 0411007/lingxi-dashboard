"use client"

import { useState } from "react"
import { Plus, Camera, Mic, Send, Image, Smile } from "lucide-react"

export function ChatInput() {
  const [message, setMessage] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <footer className="bg-card/98 backdrop-blur-xl border-t border-border/30 px-4 pt-4 pb-10 flex-shrink-0 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="mb-4 flex gap-6 justify-center py-4 animate-slide-up bg-muted/30 rounded-2xl mx-[-4px]">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm border border-border/50">
              <Camera className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">拍照</span>
          </button>
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm border border-border/50">
              <Image className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">相册</span>
          </button>
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm border border-border/50">
              <Mic className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">语音</span>
          </button>
        </div>
      )}
      
      {/* Input Row */}
      <div className="flex items-center gap-3">
        {/* Expand Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-sm ${
            isExpanded 
              ? 'bg-gradient-to-br from-primary to-accent text-white rotate-45 shadow-lg shadow-primary/30' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border/50'
          }`}
        >
          <Plus className="w-5 h-5" />
        </button>
        
        {/* Text Input */}
        <div className="flex-1 h-12 bg-muted/50 rounded-full px-5 flex items-center border border-border/50 focus-within:border-primary/40 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-primary/10 transition-all">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入您的穿搭需求..." 
            className="bg-transparent border-none outline-none w-full text-[14px] text-foreground placeholder:text-muted-foreground"
          />
          <button className="ml-2 text-muted-foreground hover:text-primary transition-colors">
            <Smile className="w-5 h-5" />
          </button>
        </div>
        
        {/* Send / Voice Button */}
        {message.trim() ? (
          <button className="w-12 h-12 btn-gradient rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40 active:scale-90 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <button className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all group border border-border/50">
            <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
      
      {/* Quick Actions */}
      <div className="flex gap-2.5 mt-4 overflow-x-auto hide-scrollbar pb-1">
        {["帮我搭配", "查看尺码", "有什么优惠", "推荐爆款"].map((action, index) => (
          <button 
            key={index}
            className="px-4 py-2 bg-white text-[12px] text-foreground font-medium rounded-full border border-border/60 hover:border-primary/40 hover:text-primary hover:bg-primary/5 hover:shadow-sm transition-all whitespace-nowrap flex-shrink-0"
          >
            {action}
          </button>
        ))}
      </div>
    </footer>
  )
}
