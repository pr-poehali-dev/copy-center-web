import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from '@/components/ui/icon'

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Анна Смирнова',
    rating: 5,
    text: 'Отличное качество печати на кружках! Заказывала подарки для коллег - все довольны. Быстро и профессионально.',
    date: '15 августа 2024'
  },
  {
    id: '2',
    name: 'Михаил Петров',
    rating: 5,
    text: 'Нужно было срочно напечатать документы и фотографии для презентации. Сделали за час, качество супер!',
    date: '22 августа 2024'
  },
  {
    id: '3',
    name: 'Елена Кузнецова',
    rating: 4,
    text: 'Печатала футболки для команды. Дизайн получился ярким, ткань хорошая. Рекомендую!',
    date: '25 августа 2024'
  }
]

export default function ReviewsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мнения реальных клиентов о качестве наших услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <p className="text-sm text-gray-500">{review.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}