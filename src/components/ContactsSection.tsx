import Icon from '@/components/ui/icon'

export default function ContactsSection() {
  return (
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
  )
}