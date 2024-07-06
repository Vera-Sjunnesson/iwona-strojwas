import { Heading, Text } from '../Typography'

interface Props {
  articleImg: string
  heading: string
  paragraph1: string
  paragraph2?: string
}

export const ArticleCard = ({
  articleImg,
  heading,
  paragraph1,
  paragraph2,
}: Props) => {

  return (
    <article className="flex flex-column py-6 px-3">
      <section>
        <Heading level={4}>
          {heading}
        </Heading>
        <Text level={2}>
          {paragraph1}
        </Text>
        {paragraph2 && (
          <Text level={2}>
            {paragraph2}
          </Text>
        )}
      </section>
      <img  src={articleImg} />
    </article>
  )
}
