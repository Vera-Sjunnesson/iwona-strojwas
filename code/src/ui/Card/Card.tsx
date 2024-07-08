import { Heading, Text } from '../Typography'
import CardStyles from './Card.module.css'

export type gridColumns =
  | 'grid-default'
  | 'grid-leftLarge'
  | 'grid-rightLarge'

interface Props {
  articleImg: string
  heading?: string
  featuredHeading?: string
  paragraph1: string
  paragraph2?: string
  paragraph3?: string
  paragraph4?: string
  key?: number,
  className?: string
  headingPosition?: string
  gridColumns?: gridColumns
  columnDirection?: 'column' | 'column-reverse'
  imgSize?: string
}

export const ArticleCard = ({
  articleImg,
  heading,
  featuredHeading,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  key,
  className,
  headingPosition,
  gridColumns = "grid-default",
  columnDirection = "column",
  imgSize = "w-full xl:h-full lg:h-96"
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

  if (gridColumns) {
    cardClasses.push(CardStyles[`card--${gridColumns}`])
  }

  if (columnDirection) {
    cardClasses.push(CardStyles[`card--${columnDirection}`])
  }

  return (
    <section key={key} className={sectionClasses.join(' ')}>
      <article className={cardClasses.join(' ')}>
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
          {paragraph3 && (
            <Text level={2} className="mt-4">
              {paragraph3}
            </Text>
          )}
          {paragraph4 && (
            <Text level={2} className="mt-4">
              {paragraph4}
            </Text>
          )}
        </section>
        <div className="sm:relative">
          <img src={articleImg} className={`object-cover ${imgSize}`} />
          <Heading className={headingClasses.join(' ')} color="tertiary">
            {featuredHeading}
          </Heading>
        </div>
      </article>
    </section>
  )
}
