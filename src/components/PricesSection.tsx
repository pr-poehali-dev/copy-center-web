import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from '@/components/ui/icon'

interface PricesSectionProps {
  onSectionClick: (sectionId: string) => void
}

export default function PricesSection({ onSectionClick }: PricesSectionProps) {
  return (
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
          <Button onClick={() => onSectionClick('contacts')}>
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            Узнать подробнее
          </Button>
        </div>
      </div>
    </section>
  )
}