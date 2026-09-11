import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CtaBand } from '@/components/cta-band'
import { TrustBar } from '@/components/trust-bar'
import { ProgramsGrid } from '@/components/programs-grid'
import { AboutTrainer } from '@/components/about-trainer'
import { StatsBand } from '@/components/stats-band'
import { Testimonials } from '@/components/testimonials'
import { Facility } from '@/components/facility'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { StickyContact } from '@/components/sticky-contact'
import { BookingProvider } from '@/components/booking-dialog'

export default function Page() {
  return (
    <BookingProvider>
      <SiteHeader />
      <main>
        <Hero />
        <CtaBand />
        <TrustBar />
        <ProgramsGrid />
        <AboutTrainer />
        <StatsBand />
        <Testimonials />
        <Facility />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <StickyContact />
    </BookingProvider>
  )
}
