import quoteIcon from '../../assets/quote-icon.svg'
import { Text, TextColor } from '../../ui/Typography'
import { PhotoTag } from '../photoTag'
interface Props {
  quoteText: string
  quoteImage: string
  topPosition?: string
  color?: TextColor
  photoTagColor: TextColor
  photographerName?: string
  website?: boolean
}

export const QuoteSection = ({
  quoteText,
  quoteImage,
  topPosition="sx:top-10 sm:top-4",
  color="tertiary",
  photoTagColor,
  photographerName,
  website
}: Props) => {
  return (
    <div className="relative h-auto min-h-fit">
      <div
        style={{ backgroundImage: `url(${quoteImage})` }} 
        className="min-h-[580px] h-[100vh] bg-cover bg-center" />
      <PhotoTag
        color={photoTagColor}
        photographerName={photographerName}
        website={website} /> 
      <article className={`absolute w-full flex flex-col justify-center items-center ${topPosition}`}>
        <span className="sx:w-9/12 sm:w-[90%] flex flex-col items-center gap-6">
          <img src={quoteIcon} className='h-11 w-12 object-cover'/>
          <Text fontStyle='italic' color={color} weight="medium" level={1} className="text-center">
            {quoteText}
          </Text>
        </span>
      </article>
    </div>
  )
}
