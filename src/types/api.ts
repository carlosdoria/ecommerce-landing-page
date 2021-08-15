export type LogoProps = {
  altenativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAbountProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: Array<{
    title: string
    icon: {
      url: string
    }
  }>
}

export type SectionConceptsProps = {
  title: string
  concecpts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionCalendarProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: Array<{
    benefit: string
  }>
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Array<{
    name: string
    role: string
    description: string
    socialLinks: Array<{
      title: string
      url: string
    }>
    image: {
      alternativeText: string
      url: string
    }
  }>
}

export type SectionReviewsProps = {
  title: string
  reviews: Array<{
    name: string
    text: string
    image: {
      url: string
    }
  }>
}

export type SectionFaqProps = {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAbountProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionCalendar: SectionCalendarProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
