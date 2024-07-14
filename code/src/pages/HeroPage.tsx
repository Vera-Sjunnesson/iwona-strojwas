import { HeroSection } from "../components/hero"
import { QuoteSection } from "../components/quote-section";
import { ArticleCard } from "../ui/Card/Card"
import { articlesContent } from "../utils/articlesArray"
import quoteImage1 from "../assets/art2.jpg"
import quoteImage2 from "../assets/beach.jpg"
import { SimpleCloud } from "../components/wordCloud";

export const HeroPage = () => {
  const articleSection1 = articlesContent.slice(0, 1);
  const articleSection2 = articlesContent.slice(1, 3);
  const articleSection3 = articlesContent.slice(3, 5);

  return (
    <>
      <HeroSection />
      {articleSection1.map(item => (
        <ArticleCard
          key={item.id}
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          className={item.style}
          headingPosition={item.headingPosition}
          gridColumns={item.grid}
          photoTagColor={item.photoTagColor}
          photographerName={item.photographerName}
          isTagPositionLeft={item.isTagPositionLeft} />
      ))}
      <QuoteSection 
        quoteText="Livet är i ständig förändring och kan utmana oss, det är mänskligt att känna oro, ångest eller hamna i en existentiell kris."
        quoteImage={quoteImage1}
        photoTagColor="default"
        website={true}
        photographerName="matsbergquist.com" />
      {articleSection2.map(item => (
        <ArticleCard
          key={item.id} 
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          className={item.style}
          headingPosition={item.headingPosition}
          gridColumns={item.grid}
          photoTagColor={item.photoTagColor}
          photographerName={item.photographerName}
          isTagPositionLeft={item.isTagPositionLeft} />
      ))}
      <SimpleCloud />
      <QuoteSection
        quoteText="Familjen är hjärtat av vårt välbefinnande. Genom familjeterapi eller rådgivning erbjuder jag en bro till ökad förståelse och bättre relationer inom familjen."
        quoteImage={quoteImage2}
        topPosition="sx:top-24 sm:top-4 "
        photoTagColor="inverted"
        photographerName="Foto: Annie Spratt" />
      {articleSection3.map(item => (
        <ArticleCard
          key={item.id} 
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          className={item.style}
          headingPosition={item.headingPosition}
          gridColumns={item.grid}
          photoTagColor={item.photoTagColor}
          photographerName={item.photographerName}
          website={item.website}
          isTagPositionLeft={item.isTagPositionLeft} />
      ))}
    </>
  )
}
