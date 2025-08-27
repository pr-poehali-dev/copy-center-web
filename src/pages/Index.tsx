import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import GallerySection from '@/components/GallerySection'
import PricesSection from '@/components/PricesSection'
import ReviewsSection from '@/components/ReviewsSection'
import OrderForm from '@/components/OrderForm'
import ContactsSection from '@/components/ContactsSection'
import Footer from '@/components/Footer'

export default function Index() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header onSectionClick={scrollToSection} />
      <HeroSection onSectionClick={scrollToSection} />
      <ServicesSection />
      <GallerySection />
      <PricesSection onSectionClick={scrollToSection} />
      <ReviewsSection />
      <OrderForm />
      <ContactsSection />
      <Footer />
    </div>
  )
}