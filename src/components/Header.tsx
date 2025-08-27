import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Icon from '@/components/ui/icon'

interface HeaderProps {
  onSectionClick: (sectionId: string) => void
}

export default function Header({ onSectionClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = (sectionId: string) => {
    onSectionClick(sectionId)
    setIsOpen(false)
  }

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'prices', label: 'Цены' },
    { id: 'contacts', label: 'Контакты' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Copy" className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-display">КопиЦентр</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              onClick={() => onSectionClick('order')}
              className="bg-secondary hover:bg-secondary/90 text-white hidden md:flex"
            >
              Заказать
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <Icon name="Menu" className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Icon name="Copy" className="w-6 h-6 text-primary" />
                    <span className="text-xl font-bold text-primary font-display">КопиЦентр</span>
                  </div>
                  
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      className="text-left text-lg text-gray-700 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <Button 
                    onClick={() => handleMenuClick('order')}
                    className="bg-secondary hover:bg-secondary/90 text-white mt-6"
                  >
                    Заказать
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}