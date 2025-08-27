import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Icon from '@/components/ui/icon'

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
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

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
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Icon name="ZoomIn" className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm capitalize">Категория: {item.category}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}