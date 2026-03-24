"use client"

import { User } from "lucide-react"

interface UserMessageProps {
  content: string
  delay?: number
  imageUrl?: string
}

export function UserMessage({ content, delay = 0, imageUrl }: UserMessageProps) {
  return (
    <div 
      className="flex items-start gap-2.5 justify-end animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Message Content */}
      <div className="flex flex-col items-end gap-2 max-w-[240px]">
        {/* Image if provided */}
        {imageUrl && (
          <div className="w-[140px] h-[180px] rounded-2xl overflow-hidden shadow-lg border-2 border-white/80">
            <img 
              src={imageUrl} 
              alt="用户上传图片" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Text Bubble */}
        <div className="user-bubble p-3.5 text-[14px] leading-relaxed text-white shadow-lg shadow-primary/20">
          {content}
        </div>
      </div>
      
      {/* User Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-white">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  )
}
