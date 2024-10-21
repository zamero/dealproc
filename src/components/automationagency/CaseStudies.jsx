import { motion } from "framer-motion";
import caseStudiesData from "./caseStudies.json";

export const CaseStudies = () => (
  <section className="w-full flex justify-center pt-10 mt-16 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Case Studies
        </div>
        <div className="custom-block-medium-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Explore Our Success Stories
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 xl:px-0">
          {Object.entries(caseStudiesData).map(([key, caseStudy]) => (
            <a
              href={`/case-studies/${key}`}
              className="custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              key={key}
            >
              <img src={caseStudy.image} alt={caseStudy.title} className="mb-4 rounded-lg" />
              <div className="custom-content-text-white font-medium mb-2">
                {caseStudy.title}
              </div>
              <div className="custom-content-text-gray">
                {caseStudy.description}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
