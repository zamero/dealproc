import { motion } from "framer-motion"

import { QuoteIcon } from "../assets/icons/QuoteIcon"
import testimonial1 from "../assets/images/testimonial1.png"
import testimonial2 from "../assets/images/testimonial2.png"
import testimonial3 from "../assets/images/testimonial3.png"

const testimonialsData = [
  {
    customerName: "Moses Amari",
    customerTitle: "VD",
    content:
      "Webbutvecklingsverket har varit en fantastisk partner för vårt företag. Deras expertis inom webbutveckling har hjälpt oss att skapa en modern och engagerande webbplats. Vi är så tacksamma för deras support och engagemang.",
    image: testimonial1,
  },
  {
    customerName: "Anna Persson",
    customerTitle: "VD",
    content:
      "Samarbetet med Webbutvecklingsverket har verkligen boostat vårt företags online-närvaro. Deras skickliga team har inte bara byggt en fantastisk webbplats åt oss, utan de har också hjälpt oss med SEO-strategier som har ökat vår synlighet på nätet.",
    image: testimonial2,
  },
  {
    customerName: "Erik Nilsson",
    customerTitle: "CMO",
    content:
      "Jag kan inte nog tacka Webbutvecklingsverket för deras enastående arbete. Vår nya webbplats är precis vad vi behövde för att marknadsföra vårt företag. Den är snygg, funktionell och har gett oss ett imponerande digitalt avtryck.",
    image: testimonial3,
  },
]

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Rekommendationer
        </div>
        <div className="custom-block-medium-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Entreprenörer som dig älskar Webbutvecklingsverket
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)
