import { HeroSection } from "../components/hero"
import { ArticleCard } from "../ui/Card/Card"
import { articlesContent } from "../utils/articlesArray"

export const HeroPage = () => {
  const articleSection1 = articlesContent.slice(0, 1);
  const articleSection2 = articlesContent.slice(1, 3);
  const articleSection3 = articlesContent.slice(3, 5);

  return (
    <>
      <HeroSection />
      <div className="flex flex-col items-center">
        {articleSection1.map(item => (
          <ArticleCard
            articleImg={item.img}
            heading={item.heading}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            order={item.gridOrder} 
            key={item.id}/>
        ))}
        {articleSection2.map(item => (
          <ArticleCard
            articleImg={item.img}
            heading={item.heading}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            order={item.gridOrder}
            key={item.id} />
        ))}
        {articleSection3.map(item => (
          <ArticleCard
            articleImg={item.img}
            heading={item.heading}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            order={item.gridOrder}
            key={item.id} />
        ))}
      </div>
    </>
  )
}
