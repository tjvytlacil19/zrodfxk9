import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProgramsGrid } from '@/components/programs-grid'
import { AboutTrainer } from '@/components/about-trainer'
import { StatsBand } from '@/components/stats-band'
import { Testimonials } from '@/components/testimonials'
import { Facility } from '@/components/facility'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { StickyContact } from '@/components/sticky-contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProgramsGrid />
        <AboutTrainer />
        <StatsBand />
        <Testimonials />
        <Facility />
        <Contact />
      </main>
      <SiteFooter />
      <StickyContact />
    </>
  )
}
