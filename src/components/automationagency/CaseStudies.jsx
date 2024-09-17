import { motion } from "framer-motion"

import { QuoteIcon } from "../../assets/icons/QuoteIcon"
import testimonial1 from "../../assets/images/testimonial1.png"
import testimonial2 from "../../assets/images/testimonial2.png"
import testimonial3 from "../../assets/images/testimonial3.png"

const testimonialsData = [
  {
    customerName: "Moses Amari",
    customerTitle: "CEO",
    content:
      "Working with Relumify was a game-changer for us. The efficiency boost from their AI automation solutions is unparalleled. Our processes are streamlined, and the cost savings have been a pleasant surprise. Highly recommended for businesses ready to conquer the future!",
    image: testimonial1,
  },
  {
    customerName: "Anna Persson",
    customerTitle: "CEO",
    content:
      "AI automation by Relumify turned our financial landscape around. Faster results and substantial cost reductions have been a financial boon. Their team's commitment to precision and scalability is unmatched. It's not just a service; it's a strategic partnership.",
    image: testimonial2,
  },
  {
    customerName: "Erik Nilsson",
    customerTitle: "CMO",
    content:
      "In the fast-paced world of marketing, speed and accuracy are paramount. Relumify delivered on both fronts with their AI solutions. Our campaigns now move at lightning speed, and the improved accuracy in data processing has elevated our decision-making. A true innovation ally!",
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
          Recommendations
        </div>
        <div className="custom-block-medium-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Hear What Our Trailblazers Are Saying
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
