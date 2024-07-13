import iwonaPortrait from "../assets/iwona-strojwas.jpg"
import { Heading, Text } from "../ui/Typography"

const educationList = [
  { id: 1, text: "Psykoterapeutprogrammet, inriktning systemisk familjeterapi Linköpings Universitet" },
  { id: 2, text: "Grundläggande utbildning i Familjeterapi /Utbildningsenheten UBI BUP i Stockholm" },
  { id: 3, text: "Grundläggande utbildning i Psykoterapi, psykodynamisk inriktning/Studiefrämjande" },
  { id: 4, text: "Grundkurs i socialantropologi /Stockholms universitet" },
  { id: 5, text: "Socialomsorg linje med inriktning mot socialpedagogiskt behandlingsarbete /Stockholms universitet" },
  { id: 6, text: "Fördjupningskurs i transkulturell psykiatri / Transkulturell Centrum" },
  { id: 8, text: "Bedömning och behandling av barn och tonåringar med autismspektrumstörningar Utbildningsenheten SLL." },
  { id: 9, text: "Orienteringskurs i KBT och KP med barn och ungdomar, Utbildningsenhet SLL" },
]

export const AboutPage = () => {
  return (
    <div className="py-20 px-4 lgx:py-32 xl:py-40 lgx:px-10 xl:px-0 xl:flex xl:justify-center">
      <article className="flex flex-col-reverse sx:grid sx:grid-cols-2 lgx:gap-16 xl:gap-32 xl:max-w-[70%]">
        <section>
          <Heading
            level={4}
            weight="bold"
            className="mb-3">
            Om mig
          </Heading>
          <Text level={2}>
            Jag heter Iwona Strojwas, är legitimerad psykoterapeut och har över 25 års erfarenhet av
            psykosocialt behandlingsarbete inom regionen, kommunen, ideell sektor och privata
            mottagningar. Mina tidigare arbetsplatser har bl.a. varit Barncancerfonden, Familjeresursen
            och Barn och Ungdomspsykiatri.
          </Text>
          <Text level={2} className="mt-4">
            Det existentiella och transkulturella perspektivet har intresserat mig speciellt, både teoretiskt
            och erfarenhetsmässigt tack vare samtal med människor på flykt, migranter och människor i
            sorg och kris.
          </Text>
          <Text level={2} className="mt-4">
            Min värdegrund är humanistisk och jag inspireras av den komplexitet som vi som individer,
            par, grupper, rymmer och befinner oss i. Som psykoterapeut har jag helhetsperspektiv, har
            fokus på både inre individuella processer och yttre sammanhang, relationer, nätverk,
            arbetssituation mm.
          </Text>
          <Text level={2} className="mt-4 mb-8">
            Förutom svenska kan jag erbjuda samtal på engelska och polska som är mitt modersmål.
          </Text>
          <div className="flex flex-col">
            <Heading
              level={4}
              weight="bold"
              className="mb-3">
              Utbildningar i urval
            </Heading>
              <ul className="list-disc">
                {educationList.map(item => (
                  <li key={item.id} className="ml-6 mb-3 pl-1.5">
                    {item.text}
                  </li>
                ))}
              </ul>
          </div>
        </section>
        <section className="max-w-full pb-8 flex flex-col gap-2">
          <img src={iwonaPortrait} className="object-cover max-w-full w-96 sx:w-[400px] sm:h-96 sx:h-[30rem] pb-1" />
          <Heading color="tertiary">
            IWONA STROJWAS
          </Heading>
        </section>
      </article>
    </div>
  )
}