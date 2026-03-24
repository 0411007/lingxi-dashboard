"use client"

import { AIMessage } from "./ai-message"
import { UserMessage } from "./user-message"
import { OutfitHeroCard } from "./outfit-hero-card"
import { OutfitItemCard } from "./outfit-item-card"
import { OutfitCard } from "./outfit-card"

export function ChatArea() {
  return (
    <main className="flex-1 overflow-y-auto hide-scrollbar px-4 py-6 space-y-6 bg-gradient-to-b from-background via-background to-muted/20">
      {/* AI Welcome Message */}
      <AIMessage 
        delay={0}
        content={
          <p>
            亲爱的 <span className="text-primary font-semibold">88VIP</span>，晚上好！我是您的专属AI导购助理
            <br /><br />
            店铺目前全场 <span className="text-primary font-bold">满200减20</span>，现货48小时内发货～ 请问有什么可以帮您的？
          </p>
        }
      />
      
      {/* User Message with Image */}
      <UserMessage 
        delay={100}
        content="下周去三亚玩，想找一套类似图片里的度假风穿搭"
        imageUrl="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400"
      />
      
      {/* AI Response with Size Query */}
      <AIMessage 
        delay={200}
        content={
          <>
            <p>收到！正在为您识别图片风格...</p>
            <p className="mt-2">
              您发的是一套 <span className="font-bold text-primary">法式度假风裙装</span>。为了给您推荐最合身的尺码，请问您的身高体重大概是多少呢？
            </p>
          </>
        }
        quickReplies={["160cm/50kg", "165cm/55kg", "170cm/60kg"]}
      />
      
      {/* User Reply */}
      <UserMessage 
        delay={300}
        content="我160cm，体重50kg左右"
      />
      
      {/* AI with Outfit Hero Recommendation */}
      <AIMessage 
        delay={400}
        content={
          <p>
            完美！根据您的身材数据和图片风格，为您精准匹配了这套 <span className="text-primary font-bold">【法式度假轻奢穿搭】</span>。
            整套搭配融合了海岛浪漫感与轻奢质感，让您成为沙滩上最亮眼的存在！
          </p>
        }
      >
        {/* Main Outfit Hero Card */}
        <OutfitHeroCard 
          imageUrl="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80"
          title="法式度假轻奢穿搭"
          tags={["海岛风", "显瘦", "氛围感"]}
        />
        
        {/* Outfit Breakdown Section */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-[13px] font-bold text-foreground">穿搭单品明细</span>
            </div>
            <span className="text-[11px] text-muted-foreground">共3件单品</span>
          </div>
          
          <OutfitItemCard 
            title="法式蕾丝透视长裙 · 冰蓝色"
            imageUrl="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80"
            price={199}
            originalPrice={499}
            tag="裙装"
            isSelected={true}
          />
          
          <OutfitItemCard 
            title="珍珠贝壳手链 · 度假风配饰"
            imageUrl="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=400&q=80"
            price={89}
            originalPrice={199}
            tag="配饰"
            isSelected={true}
          />
          
          <OutfitItemCard 
            title="草编平底凉鞋 · 沙滩漫步款"
            imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80"
            price={159}
            originalPrice={329}
            tag="鞋履"
            isSelected={true}
          />
          
          {/* Total Price & Bundle Action */}
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-2xl p-4 border border-primary/10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[12px] text-muted-foreground">套装总价</span>
                <span className="text-[11px] text-muted-foreground line-through">¥1027</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[12px] text-muted-foreground">套装价</span>
                <span className="text-rose-500 text-[22px] font-black">¥447</span>
              </div>
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-primary via-purple-500 to-accent text-white text-[13px] font-bold rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
              一键加购整套穿搭 · 再减¥20
            </button>
          </div>
        </div>
      </AIMessage>
      
      {/* AI with Additional Outfit Suggestion */}
      <AIMessage 
        delay={500}
        content={
          <p>
            如果您还想看看其他风格，这里还有 <span className="text-primary font-bold">更多度假Look推荐</span>，
            每一套都是根据您的风格偏好精心搭配的哦～
          </p>
        }
      >
        <OutfitCard />
      </AIMessage>
    </main>
  )
}
