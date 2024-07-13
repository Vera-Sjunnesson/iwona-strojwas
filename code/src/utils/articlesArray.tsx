import articleImg1 from "../assets/karl-gabor-kampong-luong-cambodia.jpg"
import articleImg2 from "../assets/mountains.jpg"
import articleImg3 from "../assets/maze.jpg"
import articleImg4 from "../assets/tree.jpg"
import articleImg5 from "../assets/art1.jpg"
import { TextColor } from "../ui/Typography"

export type gridColumns =
  | 'grid-default'
  | 'grid-leftLarge'
  | 'grid-rightLarge'

  interface Article {
    id: number,
    img: string,
    alt: string,
    heading: string,
    featuredHeading: string,
    paragraph1: string,
    paragraph2: string,
    style: string,
    headingPosition: string,
    grid: gridColumns,
    photoTagColor: TextColor,
    photographerName?: string,
    website?: boolean,
    isTagPositionLeft?: boolean,
  }

export const articlesContent: Article[]  = [
  {
    "id": 1,
    "img": articleImg1,
    "alt": "Man i båt",
    "heading": "Vilken hjälp kan du få av mig?",
    "featuredHeading": "LÄR KÄNNA DIG SJÄLV",
    "paragraph1": "Som leg. psykoterapeut med utbildning inom systemisk familjeterapi och psykodynamisk terapi och lång erfarenhet från samtal med par, familjer, vuxna, ungdomar och barn kan jag hjälpa dig med dina utmaningar i livet.",
    "paragraph2": "Söker du vägar för att bättre förstå dig själv, utforska dina känslor och kommunikation till andra eller förstå hur dina egna familjemönster påverkar dig Individuell terapi är skräddarsytt för att möta just dina behov. Tillsammans utforskar vi dina känslor och tankar, relationer till andra eller familjemönster från din uppväxt och ger dig de strategier du behöver för att möta livets utmaningar med ny styrka.",
    "style": "sx:justify-start sx:order-none",
    "headingPosition": "right-12 -bottom-16",
    "grid": "grid-default",
    "photoTagColor": "inverted",
    "photographerName": "Foto: Karl Gabor"
  },
  {
    "id": 2,
    "img": articleImg2,
    "alt": "Man i båt",
    "heading": "Sorgearbete och trauma",
    "featuredHeading": "TRAUMA OCH SORG",
    "paragraph1": "Har du drabbats av förlust och behöver hjälp att hantera sorg? Har du varit med om en traumatisk händelse och behöver hantera det som har hänt. Sorg och trauma kan djupt påverka vårt välbefinnande och vår förmåga att röra oss framåt i livet. Om du har drabbats av en förlust, vare sig det rör sig om en älskad person, en relation, eller något annat betydande i ditt liv, är det viktigt att du vet att det finns stöd och förståelse att få.",
    "paragraph2": "Mina terapitjänster erbjuder en stödjande miljö där du kan bearbeta din sorg, lära dig att leva med din förlust, och hitta vägar att återigen hitta mening och glädje i livet. För de som har upplevt trauma kan vägen till återhämtning kännas särskilt svår och ensam. Jag är här för att ge dig det stöd och de verktyg du behöver för att bearbeta traumatiska händelser, övervinna de känslor av rädsla eller hjälplöshet som kan ha följt med, och återbygga en känsla av säkerhet och hopp.",
    "style": "sx:justify-end sx:order-1",
    "headingPosition": "left-1 -top-20",
    "grid": "grid-leftLarge",
    "photoTagColor": "inverted",
    "photographerName": "Foto: Karl Gabor",
    "isTagPositionLeft": true
  },
  {
    "id": 3,
    "img": articleImg3,
    "alt": "Man i båt",
    "heading": "Samtal för att hantera oro, ångest, existentiell kris",
    "featuredHeading": "VÅRA SAMTAL",
    "paragraph1": "Livet är i ständig förändring och kan utmana oss, det är mänskligt att känna oro, ångest eller hamna i en existentiell kris. Du behöver inte navigera dessa stormar ensam. Genom våra samtal erbjuder jag en säker plats där du kan utforska och hitta verktyg att hantera dessa känslor. Mitt mål är att samarbeta med dig för att identifiera orsakerna bakom din oro och ångest, för att sedan arbeta igenom dessa med skräddarsydda strategier som återspeglar dina unika behov och livssituation.",
    "paragraph2": "",
    "style": "sx:justify-center sx:order-none",
    "headingPosition": "right-1 -top-16",
    "grid": "grid-rightLarge",
    "photoTagColor": "default",
    "photographerName": "Foto: Ashley Batz"
  },
  {
    "id": 4,
    "img": articleImg4,
    "alt": "Man i båt",
    "heading": "Stärk familjebanden med Familjeterapi",
    "featuredHeading": "FAMILJETERAPI",
    "paragraph1": "Familjen är hjärtat av vårt välbefinnande, men ibland kan kommunikationen bli bristfällig och konflikter kan uppstå. Genom familjeterapi eller rådgivning erbjuder jag en bro till ökad förståelse och bättre relationer inom familjen. Oavsett om det handlar om tonårs utmaningar, anpassning till nya familjesituationer, eller annan stress, finns jag här för att stärka er som en enhet och navigera er genom svårigheterna. ",
    "paragraph2": "",
    "style": "sx:justify-end sx:order-1",
    "headingPosition": "sx:right-32 lgx:left-60 sx:top-3",
    "grid": "grid-leftLarge",
    "photoTagColor": "inverted",
    "photographerName": "Foto: Amal Ben Saad",
    "isTagPositionLeft": true
  },
  {
    "id": 5,
    "img": articleImg5,
    "alt": "Man i båt",
    "heading": "Parterapi som förnyar relationen",
    "featuredHeading": "PARTERAPI",
    "paragraph1": "Är du och din partner fast i ett mönster som hindrar er från att känna glädje tillsammans? Parterapin är här för att bryta dessa mönster och öppna upp för djupare förståelse och förnyad kärlek. Jag hjälper er att kommunicera på ett sätt som bygger broar snarare än murar, och utforskar tillsammans hur ni kan stärka er relation även när livet utmanar.",
    "paragraph2": "",
    "style": "sx:justify-start sx:order-none",
    "headingPosition": "sx:left-52 lgx:left-96 sx:bottom-0",
    "grid": "grid-rightLarge",
    "photoTagColor": "default",
    "photographerName": "matsbergquist.com",
    "website": true
  }
]