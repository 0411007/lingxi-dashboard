"use client"

import { Camera, ShoppingCart, Search, Sparkles } from "lucide-react"

interface ProductCardProps {
  title: string
  imageUrl: string
  price: number
  originalPrice: number
  matchRate: number
  sales: string
  features: string[]
}

export function ProductCard({ 
  title, 
  imageUrl, 
  price, 
  originalPrice, 
  matchRate, 
  sales, 
  features 
}: ProductCardProps) {
  return (
    <div className="w-full bg-card rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60 border border-white/80 product-card mt-3">
      {/* Product Image */}
      <div className="relative h-[200px] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Match Rate Badge */}
        <div className="absolute bottom-3 left-3 bg-foreground/70 backdrop-blur-md px-3 py-2 rounded-full text-[10px] text-white flex items-center gap-1.5 font-semibold shadow-lg">
          <Camera className="w-3 h-3" />
          <span>同款视觉匹配度 {matchRate}%</span>
        </div>
        
        {/* Trending Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-primary to-accent px-3 py-1.5 rounded-full text-[10px] text-white font-bold flex items-center gap-1 shadow-lg shadow-primary/30">
          <Sparkles className="w-3 h-3" />
          <span>灵犀推荐</span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[14px] font-bold text-foreground leading-tight flex-1 pr-2">
            {title}
          </h3>
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-lg font-bold flex-shrink-0">
            热卖中
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mt-3">
          <span className="text-rose-500 text-[24px] font-black tracking-tight">
            ¥{price.toFixed(0)}
          </span>
          <span className="text-[12px] text-muted-foreground line-through">
            ¥{originalPrice}
          </span>
          <div className="ml-auto bg-muted/60 px-2.5 py-1 rounded-lg text-[10px] text-muted-foreground border border-border/50 font-medium">
            月销{sales}
          </div>
        </div>
        
        {/* Features */}
        <div className="mt-4 space-y-2.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0" />
              <p className="text-[12px] text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-4 pt-2 flex gap-3">
        <button className="flex-1 py-3.5 bg-muted/70 text-[12px] font-bold text-foreground rounded-2xl hover:bg-muted active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-border/50">
          <Search className="w-4 h-4" />
          <span>详情参数</span>
        </button>
        <button className="flex-[1.5] py-3.5 btn-gradient text-[12px] font-bold text-white rounded-2xl shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-1.5">
          <ShoppingCart className="w-4 h-4" />
          <span>一键加购</span>
        </button>
      </div>
      
      {/* Exclusive Coupon Section */}
      <div className="mx-4 mb-4 bg-gradient-to-br from-orange-50 to-amber-50/50 rounded-2xl p-4 border border-orange-100/80 shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-sm rotate-45" />
            <span className="text-[12px] font-bold text-orange-900">灵犀专享福利</span>
          </div>
          <span className="text-[9px] bg-orange-200/80 text-orange-700 px-2 py-0.5 rounded-full font-bold">限量50张</span>
        </div>
        <p className="text-[11px] text-orange-800/80 mb-3 leading-relaxed">
          我为您向掌柜争取到了专属券，下单立减 20 元，还送度假风配饰！
        </p>
        <div className="bg-white rounded-xl overflow-hidden flex items-center border border-orange-100 shadow-sm">
          <div className="px-4 py-3 flex flex-col justify-center border-r border-dashed border-orange-200/80">
            <span className="text-[18px] font-black text-rose-500 leading-none">¥20</span>
            <span className="text-[9px] text-muted-foreground font-medium mt-0.5">专属神券</span>
          </div>
          <button className="flex-1 text-[12px] font-bold text-orange-600 tracking-wider hover:bg-orange-50 transition-colors py-3.5">
            立即领券下单
          </button>
        </div>
      </div>
    </div>
  )
}
