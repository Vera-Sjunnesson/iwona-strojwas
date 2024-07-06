import { Heading, Text } from '../Typography'
import CardStyles from './Card.module.css'

interface Props {
  articleImg: string
  heading: string
  paragraph1: string
  paragraph2?: string
  order?: string,
  key: number,
}

export const ArticleCard = ({
  articleImg,
  heading,
  paragraph1,
  paragraph2,
  order,
  key,
}: Props) => {

  const classes = [CardStyles['card']]

  return (
    <section key={key} className="h-screen flex justify-center items-center">
      <article className={classes.join(' ')}>
        <Heading className="absolute bottom-0 right-0" color="tertiary">
          DITT INRE VÄLMÅENDE
        </Heading>
        <section className={`flex flex-col ${order}`}>
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
        <img src={articleImg} className="w-full h-full object-cover" />
      </article>
    </section>
  )
}
