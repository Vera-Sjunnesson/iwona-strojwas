import climbingImg1 from '../assets/climbing.jpg'
import climbingImg2 from '../assets/climbing2.jpg'
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
    <div>
      <div className="h-[100vh] min-h-[51.625rem] w-screen">
      <div className="relative h-full">
        <div style={{ backgroundImage: `url(${climbingImg1})` }} className="h-full bg-cover bg-right-top lg:hidden" />
        <div style={{ backgroundImage: `url(${climbingImg2})` }} className="h-full bg-cover bg-left-top xl:hidden" />
{/*         <div
          style={{
            backgroundImage: "linear-gradient(180deg, rgb(255 255 255 / 70%) 30%, rgba(34, 34, 34, 0) 65%)"
          }}
          className="xl:hidden lg:block w-full h-full absolute top-0 left-0 bg-cover bg-right-top" /> */}
        <PhotoTag
          color="secondary"
          photographerName="Foto: Willian Justen de Vasconcellos" />
        <article className="lg:absolute lg:flex lg:flex-col gap-3 sm:mb-16 top-20 left-0">
          <section className="xl:absolute xl:left-20 top-20 sx:mx-auto flex flex-col xl:py-6 px-4 sx:max-w-lg">
            <Heading
              color="tertiary"
              className="mb-3">
              PSYKOTERAPI ONLINE
            </Heading>
            <Text level={2} weight="medium">
              Livet kan vara hektiskt och att det inte alltid är lätt att ta sig tid för terapi. Du bor kanske långt bort från någon mottagning vilket gör det svårt för dig att få terapi när du behöver det.
            </Text>
          </section>
          <section className="xl:absolute xl:right-20 bottom-20 sx:mx-auto flex flex-col xl:py-6 px-4 sx:max-w-lg">
            <Text color="responsive" level={2} weight="medium">
              Därför erbjuder jag psykoterapi online och rådgivning som gör det möjligt för dig att få stöd var och när det passar dig bäst med samma engagemang och professionalism som i personliga möten och flexibla tider.  Samtalen sker genom en videolänk som skickas till dig vid bokning. Du behöver mobil eller dator, internetuppkoppling och BankID för att logga in. Videotjänsten är säker och skyddad. Tiden bokar du genom att fylla formuläret nedan.
            </Text>
            <Button
              href="https://www.google.com"
              type="secondary"
              className="mt-8">
              Boka terapi
            </Button>
          </section>
        </article>
      </div>
    </div>
    <div className="flex flex-col gap-8 px-4 py-20 xl:px-24">
      <div>
        <Heading
         level={4}
         weight="bold"
         className="mb-3">
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
        <Heading
         level={4}
         weight="bold"
         className="mb-3 hover:text-black">
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
    </div>
  )
}
