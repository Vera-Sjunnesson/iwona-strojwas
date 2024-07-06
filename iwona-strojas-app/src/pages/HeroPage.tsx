import { HeroSection } from "../components/hero"
import { QuoteSection } from "../components/quote-section";
import { ArticleCard } from "../ui/Card/Card"
import { articlesContent } from "../utils/articlesArray"

export const HeroPage = () => {
  const articleSection1 = articlesContent.slice(0, 1);
  const articleSection2 = articlesContent.slice(1, 3);
  const articleSection3 = articlesContent.slice(3, 5);

  return (
    <>
      <HeroSection />
      {articleSection1.map(item => (
        <ArticleCard
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          key={item.id}
          className={item.style}
          headingPosition={item.headingPosition} />
      ))}
      <QuoteSection />
      {articleSection2.map(item => (
        <ArticleCard
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          key={item.id} 
          className={item.style}
          headingPosition={item.headingPosition} />
      ))}
      {articleSection3.map(item => (
        <ArticleCard
          articleImg={item.img}
          heading={item.heading}
          featuredHeading={item.featuredHeading}
          paragraph1={item.paragraph1}
          paragraph2={item.paragraph2}
          key={item.id} 
          className={item.style}
          headingPosition={item.headingPosition} />
      ))}
    </>
  )
}
