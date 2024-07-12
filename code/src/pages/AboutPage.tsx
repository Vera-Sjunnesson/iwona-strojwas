import iwonaPortrait from "../assets/iwona-strojwas.jpg"
import { ArticleCard } from "../ui/Card/Card"
import { Heading } from "../ui/Typography"

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
    <div className="sm:px-2 pb-24 pt-12 lgx:flex lgx:flex-col h-auto">
      <ArticleCard
        articleImg={iwonaPortrait}
        featuredHeading="IWONA STROJWAS"
        paragraph1="Jag heter Iwona Strojwas, är legitimerad psykoterapeut och har över 25 års erfarenhet av
        psykosocialt behandlingsarbete inom regionen, kommunen, ideell sektor och privata
        mottagningar. Mina tidigare arbetsplatser har bl.a. varit Barncancerfonden, Familjeresursen
        och Barn och Ungdomspsykiatri."
        paragraph2="Det existentiella och transkulturella perspektivet har intresserat mig speciellt, både teoretiskt
        och erfarenhetsmässigt tack vare samtal med människor på flykt, migranter och människor i
        sorg och kris."
        paragraph3="Min värdegrund är humanistisk och jag inspireras av den komplexitet som vi som individer,
        par, grupper, rymmer och befinner oss i. Som psykoterapeut har jag helhetsperspektiv, har
        fokus på både inre individuella processer och yttre sammanhang, relationer, nätverk,
        arbetssituation mm."
        paragraph4="Förutom svenska kan jag erbjuda samtal på engelska och polska som är mitt modersmål."
        headingPosition="lgx:right-36 xl:-bottom-2 xl:right-44 2xl:right-52 sx:max-w-48 sm:-bottom-10"
        gridColumns="grid-leftLarge"
        columnDirection="column-reverse"
        imgSize="xl:h-4/6 lg:h-80 lg:max-w-72" />
      <section className="flex flex-col sx:items-center xl:-[100vh] lgx:h-[70vh] sm:px-3 lgx:pb-24">
        <div className="xl:grid xl:grid-cols-2 lgx:w-[90%] xl:max-w-[70%] flex flex-col-reverse xl:items-center lg:items-start gap-8">
          <div>
              <Heading level={4} weight="bold">
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
        </div>
      </section>
    </div>
  )
}