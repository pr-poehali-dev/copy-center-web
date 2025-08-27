import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Icon from '@/components/ui/icon'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  price: string
}

interface GalleryItem {
  id: string
  title: string
  image: string
  category: string
}

interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
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

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Рабочее место копицентра',
    image: '/img/9dcddbc4-5a5d-4f82-a57a-26003a8debdc.jpg',
    category: 'workspace'
  },
  {
    id: '2',
    title: 'Галерея готовых работ',
    image: '/img/bb429f76-6a3e-49c3-bbb4-48afa2f5f674.jpg',
    category: 'products'
  },
  {
    id: '3',
    title: 'Примеры печати',
    image: '/img/10b6c2bf-a560-45ef-8787-f2552233a643.jpg',
    category: 'examples'
  }
]

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

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    comment: '',
    file: null as File | null
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, file })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заказ отправлен:', formData)
    // Здесь будет логика отправки формы
    alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Copy" className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary font-display">КопиЦентр</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('prices')} className="text-gray-600 hover:text-primary transition-colors">
                Цены
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-600 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
                Наши услуги
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('order')}
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

      {/* Services Section */}
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

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея работ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ: от персональных подарков до корпоративной продукции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Печать на кружках</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">350₽</div>
                <p className="text-gray-600 text-sm">за одну кружку с дизайном</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Печать на футболках</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">450₽</div>
                <p className="text-gray-600 text-sm">за одну футболку</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Печать фотографий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">15₽</div>
                <p className="text-gray-600 text-sm">за фото 10x15 см</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Ксерокопирование</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">3₽</div>
                <p className="text-gray-600 text-sm">за лист А4 ч/б</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Скидки при больших объемах! Звоните для уточнения цен.</p>
            <Button onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* Order Form Section */}
      <section id="order" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Оформить заказ</h2>
              <p className="text-xl text-gray-600">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (000) 000-00-00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга *</label>
                    <Select required onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Макет/файл для печати</label>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.doc,.docx"
                      className="cursor-pointer"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Поддерживаются форматы: JPG, PNG, PDF, DOC, DOCX (макс. 10 МБ)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий к заказу</label>
                    <Textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Опишите детали заказа, размеры, количество, пожелания..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить заказ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы находимся в центре города и всегда готовы помочь
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва, ул. Центральная, д. 15<br />
                      Метро "Центральная", выход №2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-gray-600">
                      <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@copycentr.ru" className="hover:text-primary transition-colors">
                        info@copycentr.ru
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Пн-Пт: 9:00 - 20:00</p>
                      <p>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Icon name="Map" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg">Интерактивная карта</p>
                  <p className="text-sm">Здесь будет размещена карта с нашим расположением</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}