"use client"

import { ShoppingCart, Check } from "lucide-react"

interface OutfitItemCardProps {
  title: string
  imageUrl: string
  price: number
  originalPrice: number
  tag: string
  isSelected?: boolean
  onToggle?: () => void
}

export function OutfitItemCard({
  title,
  imageUrl,
  price,
  originalPrice,
  tag,
  isSelected = false,
  onToggle
}: OutfitItemCardProps) {
  return (
    <div 
      className={`w-full bg-card rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border transition-all duration-200 ${
        isSelected 
          ? 'border-primary/50 ring-2 ring-primary/20' 
          : 'border-white/80 hover:border-primary/30'
      }`}
    >
      <div className="flex gap-3 p-3">
        {/* Image */}
        <div className="relative w-[90px] h-[90px] rounded-xl overflow-hidden flex-shrink-0 bg-muted">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Category Tag */}
          <div className="absolute top-1.5 left-1.5 bg-foreground/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-[9px] text-white font-medium">
            {tag}
          </div>
        </div>
        
        {/* Info */}
        <div className="flex-1 flex flex-col justify-between py-0.5">
          <h4 className="text-[13px] font-semibold text-foreground leading-tight line-clamp-2">
            {title}
          </h4>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-rose-500 text-[16px] font-bold">
                ¥{price}
              </span>
              <span className="text-[11px] text-muted-foreground line-through">
                ¥{originalPrice}
              </span>
            </div>
            
            {/* Selection Toggle */}
            <button 
              onClick={onToggle}
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                isSelected 
                  ? 'bg-primary text-white shadow-md shadow-primary/30' 
                  : 'bg-muted/80 text-muted-foreground hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {isSelected ? (
                <Check className="w-4 h-4" />
              ) : (
                <ShoppingCart className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
