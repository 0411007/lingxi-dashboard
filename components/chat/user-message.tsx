"use client"

interface UserMessageProps {
  content: string
  delay?: number
  imageUrl?: string
}

export function UserMessage({ content, delay = 0, imageUrl }: UserMessageProps) {
  return (
    <div 
      className="flex flex-col items-end gap-2 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image if provided */}
      {imageUrl && (
        <div className="w-[150px] h-[200px] rounded-2xl overflow-hidden shadow-soft border border-border/30">
          <img 
            src={imageUrl} 
            alt="用户上传图片" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Text Bubble */}
      <div className="user-bubble p-3.5 text-[14px] leading-relaxed text-white max-w-[260px]">
        {content}
      </div>
    </div>
  )
}
