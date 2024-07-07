import heroImg from '../../assets/climbing.jpg'
import { Button } from '../../ui/Button/Button'
import { Heading, Text } from '../../ui/Typography'

export const TextOnImage = () => {
  return (
    <div className="xl:h-screen lg:h-[51.625rem] w-screen">
      <div className="relative">
      <div style={{ backgroundImage: `url(${heroImg})` }} className="xl:h-screen lg:h-[51.625rem] bg-cover bg-right-top" />
      <div style={{ backgroundImage: "linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(34, 34, 34, 0.5) 65%)" }} className="xl:hidden lg:block w-full absolute top-0 left-0 lg:h-[51.625rem] bg-cover bg-right-top" />
      <article className="absolute sx:left-20 top-20 sx:mx-auto flex flex-col py-6 px-3 sx:max-w-lg">
        <Heading color="responsive">
          PSYKOTERAPI ONLINE
        </Heading>
        <Text color="responsive" level={2} weight="medium">
        Livet kan vara hektiskt och att det inte alltid är lätt att ta sig tid för terapi. Du bor kanske långt bort från någon mottagning vilket gör det svårt för dig att få terapi när du behöver det.
        </Text>
      </article>
      <article className="absolute sx:right-20 bottom-20 sx:mx-auto flex flex-col py-6 px-3 sx:max-w-lg">
        <Text color="secondary" level={2} weight="medium">
        Därför erbjuder jag psykoterapi online och rådgivning som gör det möjligt för dig att få stöd var och när det passar dig bäst med samma engagemang och professionalism som i personliga möten och flexibla tider.  Samtalen sker genom en videolänk som skickas till dig vid bokning. Du behöver mobil eller dator, internetuppkoppling och BankID för att logga in. Videotjänsten är säker och skyddad. Tiden bokar du genom att fylla formuläret nedan. 
        </Text>
        <Button href="https://www.google.com" className="mt-8">
          Boka terapi
        </Button>
      </article>
      </div>
    </div>
  )
}
