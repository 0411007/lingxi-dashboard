"use client"

import { ChatHeader } from "@/components/chat/chat-header"
import { ChatArea } from "@/components/chat/chat-area"
import { ChatInput } from "@/components/chat/chat-input"
import { IOSStatusBar } from "@/components/chat/ios-status-bar"

export default function ChatPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 p-4">
      {/* iPhone Frame */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-background rounded-[48px] overflow-hidden shadow-2xl border-[10px] border-slate-900 flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-slate-900 rounded-b-[24px] z-50" />
        
        {/* iOS Status Bar */}
        <IOSStatusBar />
        
        {/* Header */}
        <ChatHeader />
        
        {/* Chat Area */}
        <ChatArea />
        
        {/* Input Bar */}
        <ChatInput />
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-slate-900/30 rounded-full" />
      </div>
    </div>
  )
}
