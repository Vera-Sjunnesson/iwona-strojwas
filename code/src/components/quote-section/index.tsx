import quoteIcon from '../../assets/quote-icon.svg'
import { Text, TextColor } from '../../ui/Typography'

interface Props {
  quoteText: string
  quoteImage: string
  topPosition?: string
  color?: TextColor
}

export const QuoteSection = ({
  quoteText,
  quoteImage,
  topPosition="sx:top-10 sm:top-4",
  color="tertiary"
}: Props) => {
  return (
    <div className="h-screen">
      <div className="relative">
        <div style={{ backgroundImage: `url(${quoteImage})` }} className="h-screen bg-cover bg-center" />
        <article className={`absolute w-full flex flex-col justify-center items-center ${topPosition}`}>
          <span className="sx:w-9/12 sm:w-[90%] flex flex-col items-center gap-6">
            <img src={quoteIcon} className='h-11 w-12 object-cover'/>
            <Text fontStyle='italic' color={color} weight="medium" level={1} className="text-center">
              {quoteText}
            </Text>
          </span>
        </article>
      </div>
    </div>
  )
}
