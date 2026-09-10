import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProgramsGrid } from '@/components/programs-grid'
import { AboutTrainer } from '@/components/about-trainer'
import { Testimonials } from '@/components/testimonials'
import { Facility } from '@/components/facility'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProgramsGrid />
        <AboutTrainer />
        <Testimonials />
        <Facility />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
