import { motion } from "framer-motion"

import caseStudy1 from "../../assets/images/case1paragraph1.jpg"
import caseStudy2 from "../../assets/images/feature2.jpg"
import caseStudy3 from "../../assets/images/case1paragraph1image2.png"

const caseStudiesData = {
  "case-study-1": {
    title: "Case Study 1",
    description: "Description of case study 1",
    image: caseStudy1,
    section1: {
      title: "Discover How AI Makes One Photo Unlock Instant, Detailed Inventory Insights",
      content: "Our AI-driven solution simplifies the entire inventory process. Simply snap a picture of an item, and the AI instantly identifies and provides detailed information about it—everything from material and color to its condition. For example, take a photo of a chair, and the AI will tell you: `This is a swivel office chair, made of synthetic leather, in black, and in good condition`. Whether it's a chair, table, or even a flowerpot, our AI identifies the item and fills in the details, saving you hours of manual work.",
      images: [caseStudy1, caseStudy3, caseStudy3, caseStudy3],
    },
    section2: {
      title: "How Detailed Inventories Instantly Speed Up Property Sales",
      content: "When selling a property, clarity is key. Providing potential buyers with a clear, detailed inventory of what's included builds trust and streamlines the process. Our AI-powered inventory solution helps sellers quickly and accurately document every item, giving buyers confidence while avoiding disputes later on. With automation handling the tedious work, sellers save time and ensure nothing is missed.",
      images: [caseStudy2, caseStudy3],
    },
    section3: {
      title: "Close Deals Faster with Instant Inventory Reports",
      content: "Buyers move quicker when they know exactly what they’re getting. By providing a detailed, automated inventory report early in the sales process, sellers eliminate uncertainty and speed up negotiations. Our system saves hours of manual work, ensuring every item is properly documented, so deals close faster.",
      images: [caseStudy3, caseStudy1, caseStudy2, caseStudy3],
    },
  },
  // "case-study-2": {
  //   title: "Case Study 2",
  //   description: "Description of case study 2",
  //   image: caseStudy1,
  //   section1: {
  //     title: "Title 2",
  //     content: "Content for section 2",
  //     images: [caseStudy1, caseStudy2, caseStudy3, caseStudy1],
  //   },
  //   section2: {
  //     title: "Title 2",
  //     content: "Content for section 2",
  //     images: [caseStudy2, caseStudy3],
  //   },
  //   section3: {
  //     title: "Title 3",
  //     content: "Content for section 3",
  //     images: [caseStudy3, caseStudy1, caseStudy2, caseStudy3],
  //   },
  // },
  // "case-study-3": {
  //   title: "Case Study 3",
  //   description: "Description of case study 3",
  //   image: caseStudy1,
  //   section1: {
  //     title: "Title 3",
  //     content: "Content for section 3",
  //     images: [caseStudy1, caseStudy2, caseStudy3, caseStudy1],
  //   },
  //   section2: {
  //     title: "Title 2",
  //     content: "Content for section 2",
  //     images: [caseStudy2, caseStudy3],
  //   },
  //   section3: {
  //     title: "Title 3",
  //     content: "Content for section 3",
  //     images: [caseStudy3, caseStudy1, caseStudy2, caseStudy3],
  //   },
  // },
};

export { caseStudiesData };

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
)
