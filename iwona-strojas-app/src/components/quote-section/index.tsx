import quoteImg from '../../assets/art2.jpg'
import quoteIcon from '../../assets/quote-icon.svg'
import { Text } from '../../ui/Typography'

export const QuoteSection = () => {
  return (
    <div className="h-screen">
      <div className="relative">
      <div style={{ backgroundImage: `url(${quoteImg})` }} className="h-screen bg-cover bg-right-top" />
      <article className="absolute inset-x-auto top-10 flex flex-col items-center gap-6 py-6 px-3 max-w-lg">
        <img src={quoteIcon} className='h-11 w-12 object-cover'/>
        <Text fontStyle='italic' color="tertiary" weight="medium" level={1}>
          Livet är i ständig förändring och kan utmana oss, det är mänskligt att känna oro, ångest eller hamna i en existentiell kris. 
        </Text>
      </article>
      </div>
    </div>
  )
}
