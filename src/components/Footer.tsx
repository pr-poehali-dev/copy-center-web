import { Separator } from "@/components/ui/separator"
import Icon from '@/components/ui/icon'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Icon name="Copy" className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold font-display">КопиЦентр</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 КопиЦентр. Все права защищены.</p>
            <p className="text-gray-400 text-sm">Качественная печать с 2010 года</p>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>Профессиональные услуги печати и копирования в Москве</p>
        </div>
      </div>
    </footer>
  )
}