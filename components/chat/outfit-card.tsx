"use client"

import { Check, ShoppingBag } from "lucide-react"

const outfitItems = [
  {
    id: 1,
    name: "法式蕾丝长裙",
    category: "主裙装",
    price: 199,
    imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=200&q=80",
    selected: true,
  },
  {
    id: 2,
    name: "珍珠贝壳项链",
    category: "配饰",
    price: 39,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
    selected: true,
  },
  {
    id: 3,
    name: "编织草帽",
    category: "帽子",
    price: 49,
    imageUrl: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=200&q=80",
    selected: true,
  },
  {
    id: 4,
    name: "细带凉鞋",
    category: "鞋子",
    price: 129,
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=200&q=80",
    selected: false,
  },
]

export function OutfitCard() {
  const totalPrice = outfitItems.filter(item => item.selected).reduce((acc, item) => acc + item.price, 0)
  const originalTotal = outfitItems.reduce((acc, item) => acc + item.price, 0)
  
  return (
    <div className="w-full bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl overflow-hidden border border-secondary/20 mt-2">
      {/* Header */}
      <div className="p-4 pb-3 border-b border-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-secondary/20 flex items-center justify-center">
              <span className="text-[12px]">👗</span>
            </div>
            <h3 className="text-[13px] font-bold text-foreground">度假风完整穿搭</h3>
          </div>
          <span className="text-[10px] bg-secondary/20 text-secondary px-2 py-1 rounded-full font-bold">
            AI搭配
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1.5 ml-8">
          一键购买全套，享受额外 <span className="text-primary font-bold">9折</span> 优惠
        </p>
      </div>
      
      {/* Items Grid */}
      <div className="p-3 grid grid-cols-4 gap-2">
        {outfitItems.map((item) => (
          <div 
            key={item.id} 
            className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
              item.selected 
                ? 'border-primary shadow-soft' 
                : 'border-transparent opacity-60'
            }`}
          >
            <div className="aspect-square bg-muted">
              <img 
                src={item.imageUrl} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Selection Check */}
            {item.selected && (
              <div className="absolute top-1 right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" />
              </div>
            )}
            
            {/* Item Info */}
            <div className="p-1.5 bg-card/90 backdrop-blur-sm">
              <p className="text-[9px] text-muted-foreground truncate">{item.category}</p>
              <p className="text-[10px] font-bold text-foreground truncate">{item.name}</p>
              <p className="text-[10px] font-bold text-primary">¥{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="p-3 pt-0">
        <div className="bg-card rounded-2xl p-3 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] text-muted-foreground">套装价</span>
              <span className="text-[18px] font-black text-primary">¥{(totalPrice * 0.9).toFixed(0)}</span>
              <span className="text-[11px] text-muted-foreground line-through">¥{originalTotal}</span>
            </div>
            <p className="text-[10px] text-emerald-600 font-medium mt-0.5">已省 ¥{(originalTotal - totalPrice * 0.9).toFixed(0)}</p>
          </div>
          <button className="px-4 py-2.5 btn-gradient text-[11px] font-bold text-white rounded-xl shadow-float active:scale-95 transition-all flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>一键购买套装</span>
          </button>
        </div>
      </div>
    </div>
  )
}
