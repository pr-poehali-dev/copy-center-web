import { Button } from "@/components/ui/button"
import Icon from '@/components/ui/icon'

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void
}

export default function HeroSection({ onSectionClick }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Профессиональный <span className="text-primary">КопиЦентр</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Качественная печать, быстрые сроки и индивидуальный подход к каждому клиенту. 
            Воплощаем ваши идеи в жизнь!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => onSectionClick('services')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              Наши услуги
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onSectionClick('order')}
              className="px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Заказать сейчас
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Icon name="Clock" className="w-5 h-5 text-primary" />
              <span>Быстрое выполнение</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Icon name="Award" className="w-5 h-5 text-primary" />
              <span>Высокое качество</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Icon name="Users" className="w-5 h-5 text-primary" />
              <span>Индивидуальный подход</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}