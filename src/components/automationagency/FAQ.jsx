import { useState } from "react"
import { motion } from "framer-motion"

const FAQData = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation refers to the use of artificial intelligence to perform tasks and processes without continuous human intervention. It involves leveraging algorithms, machine learning, and other AI technologies to streamline and optimize repetitive or complex activities. The goal is to enhance efficiency, reduce manual labor, and improve overall productivity within various industries.",
  },
  {
    question: "How can AI automate tasks?",
    answer: `AI can automate tasks through advanced technologies like machine learning and algorithms. Platforms like Zapier allow for seamless integration between different apps and systems, automating workflows and data transfers. For instance, you can set up triggers and actions in Zapier to automate repetitive tasks and ensure smooth communication between various tools.
    OpenAI, on the other hand, offers powerful natural language processing capabilities. This can be leveraged to automate tasks involving language understanding and generation. Whether it's content creation, chatbots, or complex data analysis, OpenAI's capabilities enable businesses to automate tasks that require a deep understanding of natural language.
    The combination of platforms like Zapier and cutting-edge AI solutions from OpenAI opens up a world of possibilities for task automation, allowing businesses to operate more efficiently and intelligently.`,
  },
  {
    question: "What business categories can AI automation help with?",
    answer: (
      <>
        AI automation can provide substantial benefits across various business categories, including:
        <br /><br />
        Marketing:
        <br />
        Personalized campaigns, data analysis, and customer segmentation.
        <br /><br />
        Operations:
        <br />
        Process optimization, resource allocation, and workflow automation.
        <br /><br />
        Legal:
        <br />
        Contract review, legal research, and compliance monitoring.
        <br /><br />
        Content Creation:
        <br />
        Automated content generation, editing, and curation.
        <br /><br />
        Finance:
        <br />
        Fraud detection, risk management, and financial analysis.
        <br /><br />
        Customer Service:
        <br />
        Chatbots, automated ticket resolution, and customer support.
        <br /><br />
        Public Relations:
        <br />
        Social media monitoring, sentiment analysis, and content distribution.
        <br /><br />
        Supply Chain:
        <br />
        Demand forecasting, inventory management, and logistics optimization.
        <br /><br />
        Business Development:
        <br />
        Lead generation, market research, and strategic planning.
        <br /><br />
        AI automation can bring efficiency and innovation to these categories, transforming the way businesses operate and compete in today's dynamic environment.
      </>
    ),
  },
  {
    question: "How can AI automation save my company money?",
    answer: `AI automation can contribute to cost savings in various ways. By automating repetitive tasks, businesses can reduce the need for manual labor, leading to lower labor costs. The efficiency gained through automation also minimizes errors, decreasing the associated costs of fixing mistakes. Additionally, AI's ability to analyze data and provide insights helps in making informed decisions, optimizing resource allocation, and avoiding unnecessary expenses. Overall, AI automation can lead to improved operational efficiency and a more cost-effective use of resources.`,
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
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-50" : "max-h-0"
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
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
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
