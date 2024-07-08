import heroImg from '../../assets/field.jpg'
import { Button } from '../../ui/Button/Button'
import { Heading, Text } from '../../ui/Typography'

export const HeroSection = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(255, 255, 255, 0) 65%), url(${heroImg})` }} 
        className="lg:min-h-[400px] xl:min-h-[580px] h-[100vh] bg-cover bg-right-top" />
      <article className="absolute xl:left-20 xl:bottom-20 lg:left-0 lg:bottom-0 flex flex-col lg:py-6 sm:px-3 lgx:px-12 lgx:py-12 max-w-lg">
        <Heading color="secondary">
          DITT INRE VÄLMÅENDE
        </Heading>
        <Text color="secondary" level={2} weight="medium">
          Varmt välkommen till en plats där ditt inre välmående står i centrum. Som legitimerad psykoterapeut är jag här för att stödja dig i din utveckling och förändring.
        </Text>
        <Button href="https://www.google.com" className="mt-8">
          Boka terapi
        </Button>
      </article>
    </div>
  )
}
