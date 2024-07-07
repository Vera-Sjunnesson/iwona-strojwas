import iwonaPortrait from "../assets/iwona-strojwas.jpg"
import { ArticleCard } from "../ui/Card/Card"

export const AboutPage = () => {
  return (
    <>
      <ArticleCard
          articleImg={iwonaPortrait}
          featuredHeading="IWONA STROJWAS"
          paragraph1="Jag heter Iwona och har över 25 års erfarenhet av psykosocialt behandlingsarbete inom regionen, kommunen, ideell sektor och privata mottagningar."
          paragraph2="Transkulturella frågor och existentiella frågor ligger mig varmt om hjärtat tack vare alla möten med människor som sökt min hjälp i kris, migranter, flyktingar och familjer drabbade av barncancer."
          headingPosition="bottom-0 right-0" />
    </>
  )
}