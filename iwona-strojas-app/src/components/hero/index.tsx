import heroImg from '../../assets/field.jpg'
import { Button } from '../../ui/Button/Button'
import { Heading, Text } from '../../ui/Typography'

export const HeroSection = () => {
  return (
    <div className="relative">
      <div style={{ backgroundImage: `url(${heroImg})`}} className="h-screen bg-cover bg-right-top" />
      <article className="absolute left-0 bottom-5 flex flex-column py-6 px-3">
        <Heading color="secondary">
          DITT INRE VÄLMÅENDE
        </Heading>
        <Text fontStyle='italic' color="secondary">
          Varmt välkommen till en plats där ditt inre välmående står i centrum. Som legitimerad psykoterapeut är jag här för att stödja dig i din utveckling och förändring.
        </Text>
        <Button href="https://www.google.com" className="mt-8">
          Boka terapi
        </Button>
      </article>
    </div>
  )
}
