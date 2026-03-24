"use client"

import { Sparkles, ChevronRight } from "lucide-react"

interface OutfitHeroCardProps {
  imageUrl: string
  title: string
  tags: string[]
  onGetOutfit?: () => void
}

export function OutfitHeroCard({ 
  imageUrl = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  title = "法式度假轻奢穿搭",
  tags = ["海岛风", "显瘦", "氛围感"],
  onGetOutfit
}: OutfitHeroCardProps) {
  return (
    <div className="w-full mt-3 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-white/60 group">
      {/* Hero Image Container */}
      <div className="relative h-[380px] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Top Right Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary via-purple-500 to-accent px-4 py-2 rounded-full text-[11px] text-white font-bold flex items-center gap-1.5 shadow-xl shadow-primary/40 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>灵犀推荐</span>
        </div>
        
        {/* Bottom Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Tags */}
          <div className="flex items-center gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] text-white font-medium border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-white text-[20px] font-bold mb-4 tracking-wide text-shadow-lg">
            {title}
          </h3>
          
          {/* CTA Button */}
          <button 
            onClick={onGetOutfit}
            className="w-full py-4 bg-gradient-to-r from-primary via-purple-500 to-accent text-white text-[14px] font-bold rounded-2xl shadow-xl shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/50"
          >
            <Sparkles className="w-4 h-4" />
            <span>一键获取同款穿搭</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
