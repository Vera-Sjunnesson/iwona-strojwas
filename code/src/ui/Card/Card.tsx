import { Heading, Text } from '../Typography'
import CardStyles from './Card.module.css'

interface Props {
  articleImg: string
  heading?: string
  featuredHeading?: string
  paragraph1: string
  paragraph2?: string
  key?: number,
  className?: string
  headingPosition?: string
}

export const ArticleCard = ({
  articleImg,
  heading,
  featuredHeading,
  paragraph1,
  paragraph2,
  key,
  className,
  headingPosition,
}: Props) => {

  const sectionClasses = [CardStyles['section']]
  const cardClasses = [CardStyles['card']]
  const cardSectionClasses = [CardStyles['cardSection']]
  const headingClasses = [CardStyles['featured-heading']]

  if (className) {
    cardSectionClasses.push(className)
  }

  if (headingPosition) {
    headingClasses.push(headingPosition)
  }

  return (
    <section key={key} className={sectionClasses.join(' ')}>
      <article className={cardClasses.join(' ')}>
        <Heading className={headingClasses.join(' ')} color="tertiary">
          {featuredHeading}
        </Heading>
        <section className={cardSectionClasses.join(' ')}>
          <Heading level={4} weight="bold">
            {heading}
          </Heading>
          <Text level={2}>
            {paragraph1}
          </Text>
          {paragraph2 && (
            <Text level={2} className="mt-4">
              {paragraph2}
            </Text>
          )}
        </section>
        <img src={articleImg} className="w-full object-cover xl:h-full lg:h-96" />
      </article>
    </section>
  )
}
