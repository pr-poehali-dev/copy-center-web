import { Card, CardContent } from "@/components/ui/card"

interface GalleryItem {
  id: string
  title: string
  image: string
  category: string
}

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

export default function GallerySection() {
  return (
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
  )
}