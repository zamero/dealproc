import { useState } from "react"
import { motion } from "framer-motion"
import { InvitationModal } from "././InvitationModal"
import Lottie from "react-lottie-player"
import lottieJson from "../../assets/images/herolottie.json"
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      className="w-screen flex flex-row justify-center items-center bg-customDarkBg1"
      id="home"
    >
      <script type="module">import "@lottiefiles/lottie-player";</script>
      <div className="w-full md:w-[800px] xl:w-[700px] flex flex-col justify-start pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
          Why manual labour when you can automate it with AI?
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline text-2xl md:hidden">
              Next-Level Automation, <br /> Turbocharge Your Success with AI
            </span>
            <span className="hidden md:inline">
              Next-Level Automation, <br /> Turbocharge Your Success with AI
            </span>
          </div>
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
          Accelerate Results, Slash Costs, and Scale Up with Relumify
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center items-center">
            <a href="https://calendly.com/relumify/konsult-mote">
              <div className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0">
                Get Started
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        ></motion.div>
      </div>
      <div className="w-full md:w-[800px] xl:w-[700px] hidden lg:block flex-col justify-start items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <Lottie loop animationData={lottieJson} play />
      </div>

      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
}
