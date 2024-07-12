import heroImg from '../assets/climbing.jpg'
import { PhotoTag } from '../components/photoTag'
import { Button } from '../ui/Button/Button'
import { Heading, Text } from '../ui/Typography'

const servicesList = [
  { id: 1, text: "Gratis konsultation, 20 min." },
  { id: 2, text: "Individuell psykoterapi, 45–60 min" },
  { id: 3, text: "Familjeterapi, 60–90 min" },
  { id: 4, text: "Parterapi, 60–90 min" },
  { id: 5, text: "Föräldrarådgivning 45-60-90 min" },
  { id: 6, text: "Rådgivning 30-45-60 min" },
  { id: 8, text: "Pris, från 1100. Ej högkostnadsskydd eller frikort." },
]

const contactList = [
  { id: 1, text: "För att boka samtal behöver du bank-id. Videolänken fungerar även i mobilen." },
  { id: 2, text: "Boka samtal: Fyll i formuläret nedan, jag kontaktar dig inom 48 timmar." },
  { id: 3, text: "Du som har pågående kontakt, logga in i samtalsrummet." },
]

export const InfoPage = () => {
  return (
    <>
      <div className="xl:h-[100vh] lg:h-[51.625rem] min-h-[51.625rem] w-screen">
      <div className="relative h-full">
        <div style={{ backgroundImage: `url(${heroImg})` }} className="h-full bg-cover bg-right-top" />
        <div
          style={{
            backgroundImage: "linear-gradient(15deg, rgba(34, 34, 34, 0.8) 30%, rgba(34, 34, 34, 0.5) 65%)"
          }}
          className="xl:hidden lg:block w-full h-full absolute top-0 left-0 lg:h-[51.625rem] bg-cover bg-right-top" />
        <PhotoTag
          color="inverted"
          photographerName="Foto: Willian Justen de Vasconcellos" />
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
    <div className="flex flex-col gap-8">
        <div>
          <Heading level={4} weight="bold">
            Tjänster
          </Heading>
          <ul className="list-disc">
            {servicesList.map(item => (
              <li key={item.id} className="ml-6 mb-3 pl-1.5">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading level={4} weight="bold">
            Kontakt
          </Heading>
          <ul>
            {contactList.map(item => (
              <li key={item.id} className="mb-3">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
