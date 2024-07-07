import quoteIcon from '../../assets/quote-icon.svg'
import { Text } from '../../ui/Typography'

interface Props {
  quoteText: string
  quoteImage: string
}

export const QuoteSection = ({
  quoteText,
  quoteImage,
}: Props) => {
  return (
    <div className="h-screen">
      <div className="relative">
      <div style={{ backgroundImage: `url(${quoteImage})` }} className="h-screen bg-cover bg-center" />
      <article className="absolute inset-x-auto top-10 flex flex-col items-center gap-6 py-6 px-3 xl:px-20 w-full">
        <img src={quoteIcon} className='h-11 w-12 object-cover'/>
        <Text fontStyle='italic' color="tertiary" weight="medium" level={1}>
          {quoteText}
        </Text>
      </article>
      </div>
    </div>
  )
}
