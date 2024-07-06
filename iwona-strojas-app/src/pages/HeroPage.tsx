import { HeroSection } from "../components/hero"
import { ArticleCard } from "../ui/Card/Card"
import articleImg1 from "./../assets/928754_422276557926285_1024310257_n.jpg"

export const HeroPage = () => {
  return (
    <>
      <HeroSection />
      <ArticleCard
        articleImg={articleImg1}
        heading="Vilken hjälp kan du få av mig?"
        paragraph1="Som leg. psykoterapeut med utbildning inom systemisk familjeterapi och psykodynamisk terapi  och lång erfarenhet från samtal med par, familjer, vuxna, ungdomar och barn kan jag hjälpa dig med dina utmaningar i livet."
        paragraph2="Söker du vägar för att bättre förstå dig själv, utforska dina känslor och kommunikation till andra eller förstå hur dina egna familjemönster påverkar dig Individuell terapi är skräddarsytt för att möta just dina behov. Tillsammans utforskar vi dina känslor och tankar, relationer till andra eller familjemönster från din uppväxt och ger dig de strategier du behöver för att möta livets utmaningar med ny styrka." />
    </>
  )
}
