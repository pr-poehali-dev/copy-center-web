import { Button } from "@/components/ui/button"
import Icon from '@/components/ui/icon'

interface HeaderProps {
  onSectionClick: (sectionId: string) => void
}

export default function Header({ onSectionClick }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Copy" className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-display">КопиЦентр</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onSectionClick('home')} className="text-gray-600 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => onSectionClick('services')} className="text-gray-600 hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => onSectionClick('gallery')} className="text-gray-600 hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => onSectionClick('prices')} className="text-gray-600 hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => onSectionClick('contacts')} className="text-gray-600 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          
          <Button 
            onClick={() => onSectionClick('order')}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Заказать
          </Button>
        </div>
      </div>
    </nav>
  )
}