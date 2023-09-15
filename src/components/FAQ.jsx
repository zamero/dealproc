import { useState } from "react"
import { motion } from "framer-motion"

const FAQData = [
  {
    question: "Hur köper man en hemsida?",
    answer:
      "Att köpa en webbsida för ditt företag kan vara en viktig investering. För det första bör du identifiera dina behov och budget. Sedan kan du söka efter pålitliga webbyråer med erfarenhet av webbdesign. Du behöver även bestämma domännamn och webbhotell. Byrån kommer sedan att skapa och anpassa webbsidan enligt dina specifikationer. Efter lanseringen är det viktigt att ha ett avtal om underhåll och support för att säkerställa att din webbsida fungerar smidigt över tiden.",
  },
  {
    question: "Vad kostar en hemsida företag?",
    answer: `Priset för att utveckla en företagswebbsida i Sverige kan variera kraftigt beroende på många faktorer. För att ge dig en grov uppskattning kan vi titta på några generella prisområden:

    Enkel informativ webbsida: En grundläggande webbsida med begränsad funktionalitet och enkel design kan kosta från 5 000 kr till 20 000 kr, beroende på företagets behov och den valda webbyrån.
    
    Medelstor företagswebbplats: En webbsida med mer avancerade funktioner, anpassad design och innehållsproduktion kan kosta mellan 20 000 kr och 50 000 kr.
    
    Avancerad e-handelswebbplats: Om du planerar att sälja produkter online och behöver avancerade e-handelsfunktioner kan priset variera från 50 000 kr till flera hundratusen kronor, beroende på komplexiteten.
    
    Kontinuerlig underhåll och support: Det är viktigt att komma ihåg att kostnaderna för underhåll och support inte är en engångsavgift. Du kan behöva budgetera för månatliga eller årliga kostnader för att säkerställa att din webbsida fortsätter att fungera korrekt och håller sig uppdaterad.
    
    Det är dock viktigt att notera att dessa priser är generella riktlinjer och att faktiska kostnader kan variera avsevärt beroende på dina specifika behov och vilken webbyrå du väljer att arbeta med. Det bästa rådet är att kontakta flera webbyråer för att begära offerter och diskutera dina krav för att få en mer exakt uppfattning om priset för din företagswebbsida.`,
  },
  {
    question: "Vad är skillnaden mellan en hemsida och en webbsida?",
    answer: `Skillnaden mellan en "hemsida" och en "webbsida" är egentligen ganska subtil och används ibland synonymt, men det finns en distinkt åtskillnad. En "webbsida" är en övergripande term som avser en enskild sida på internet som innehåller information, text, bilder och/eller andra medieelement. Å andra sidan refererar "hemsida" vanligtvis till den första sidan eller startsidan av en webbplats.`,
  },
  {
    question: "Vad kan ett företag använda en webbsida till?",
    answer: `En företagswebbsida kan användas för en mängd olika ändamål som gynnar verksamheten. För det första fungerar den som en digital närvaro och gör det möjligt för företaget att nå en bredare publik online. Den kan användas för att marknadsföra produkter eller tjänster, ge information om företagets historia och värderingar, underlätta kundkommunikation via kontaktformulär och livechatt, samt sälja varor eller tjänster genom en e-handelsplattform.`,
  },
]

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Har du några frågor?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">FAQ</h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
}
