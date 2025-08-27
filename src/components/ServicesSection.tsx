import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from '@/components/ui/icon'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  price: string
}

const services: Service[] = [
  {
    id: '1',
    title: 'Печать на кружках',
    description: 'Индивидуальные дизайны на керамических кружках. Ваши фото, логотипы, надписи.',
    icon: 'Coffee',
    price: 'от 350₽'
  },
  {
    id: '2',
    title: 'Печать на футболках',
    description: 'Качественная печать на текстиле любых размеров. Корпоративная и персональная одежда.',
    icon: 'Shirt',
    price: 'от 450₽'
  },
  {
    id: '3',
    title: 'Фотоуслуги',
    description: 'Профессиональная съемка и печать фотографий. Студийные и выездные сессии.',
    icon: 'Camera',
    price: 'от 200₽'
  },
  {
    id: '4',
    title: 'Ксерокопирование',
    description: 'Быстрое копирование документов, книг, чертежей. Черно-белая и цветная печать.',
    icon: 'Printer',
    price: 'от 3₽'
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг печати и копирования для частных лиц и организаций
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {service.price}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}