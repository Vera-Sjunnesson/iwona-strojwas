import { Text, TextColor } from "../../ui/Typography"

interface Props {
  photographerName?: string
  color: TextColor
  website?: boolean
  isPositionLeft?: boolean
}

export const PhotoTag = ({photographerName, color, website = false, isPositionLeft = false }: Props) => {
  return (
    <>
    {website
      ? (
        <Text
          level={3}
          color={color}
          fontStyle="italic"
          className="absolute bottom-0 right-0 z-40 text-white italic p-1">
            Konst:&nbsp;
            <a
              href="http://www.matsbergquist.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Mats Bergquist website"
              className="artist-website-link">
              {photographerName}
            </a>
        </Text>
      ):(
        <Text
        level={3}
        color={color}
        fontStyle="italic"
        className={
          `absolute bottom-0 z-40 text-white italic p-1 
          ${isPositionLeft ? 'left-0' : 'right-0'}`
          }>
          {photographerName}
      </Text>    
      )}
    </>   
  )
}