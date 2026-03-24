"use client"

import { AIMessage } from "./ai-message"
import { UserMessage } from "./user-message"
import { ProductCard } from "./product-card"
import { OutfitCard } from "./outfit-card"

export function ChatArea() {
  return (
    <main className="flex-1 overflow-y-auto hide-scrollbar px-4 py-5 space-y-5 bg-background">
      {/* AI Welcome Message */}
      <AIMessage 
        delay={0}
        content={
          <p>
            亲爱的 <span className="text-primary font-semibold">88VIP</span>，晚上好！我是您的专属AI导购助理 ✨
            <br /><br />
            店铺目前全场 <span className="text-primary font-bold">满200减20</span>，现货48小时内发货～ 请问有什么可以帮您的？
          </p>
        }
      />
      
      {/* User Message with Image */}
      <UserMessage 
        delay={100}
        content="下周去三亚玩，想找一套类似图片里的度假风穿搭 🌴"
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
      
      {/* AI with Product Recommendation */}
      <AIMessage 
        delay={400}
        content={
          <p>
            完美！根据您的身材数据，为您精准匹配了图片同款 <span className="text-primary font-bold">【法式蕾丝微透长裙】</span>。
            这款不仅有海边的浪漫感，微透视蕾丝还带出一种轻高级感 ✨
          </p>
        }
      >
        <ProductCard 
          title="冰蓝色蕾丝拼接抹胸长裙"
          imageUrl="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80"
          price={199}
          originalPrice={499}
          matchRate={98}
          sales="2000+"
          features={["蕾丝透纱拼接（法式慵懒）", "冰丝清凉肤感（海边绝配）", "高腰设计显瘦显高"]}
        />
      </AIMessage>
      
      {/* AI with Outfit Suggestion */}
      <AIMessage 
        delay={500}
        content={
          <p>
            为了让您的度假穿搭更加完整，灵犀还为您搭配了 <span className="text-primary font-bold">一整套度假风Look</span>，
            包含配饰和鞋子，一键get海边氛围感！
          </p>
        }
      >
        <OutfitCard />
      </AIMessage>
    </main>
  )
}
