import { PhotoTag } from '../../components/photoTag'
import { Heading, Text, TextColor } from '../Typography'
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
  className?: string
  headingPosition?: string
  gridColumns?: gridColumns
  columnDirection?: 'column' | 'column-reverse'
  imgSize?: string
  photoTagColor?: TextColor
  photographerName?: string
  website?: boolean
  isTagPositionLeft?: boolean
}

export const ArticleCard = ({
  articleImg,
  heading,
  featuredHeading,
  paragraph1,
  paragraph2,
  className,
  headingPosition,
  gridColumns = "grid-default",
  columnDirection = "column",
  imgSize = "w-full sx:h-full sm:h-96",
  photoTagColor = "default",
  photographerName,
  website,
  isTagPositionLeft,
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
    <section className={sectionClasses.join(' ')}>
      <article className={cardClasses.join(' ')}>
        <section className={cardSectionClasses.join(' ')}>
          <Heading
            level={4}
            weight="bold"
            className="mb-3">
            {heading}
          </Heading>
          <Heading
            className="xl:hidden mb-3 break-words hyphens-manual"
            color="tertiary">
            {featuredHeading}
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
        <div className="sm:relative">
          <div className="relative h-full">
            <img src={articleImg} className={`object-cover ${imgSize}`} />
            <PhotoTag
              color={photoTagColor}
              photographerName={photographerName}
              isPositionLeft={isTagPositionLeft}
              website={website} /> 
          </div>
          <Heading className={headingClasses.join(' ')} color="tertiary">
            {featuredHeading}
          </Heading>
        </div>
      </article>
    </section>
  )
}
