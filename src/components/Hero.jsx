import { useState } from "react"
import { motion } from "framer-motion"

import { InvitationModal } from "./InvitationModal"
import dashboard from "../assets/images/dashboard.jpg"

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg1"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold">
            Stärk Ditt Varumärke Online
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline text-2xl md:hidden">
              Din Pålitliga Webbdesignpartner för Entreprenörer
            </span>
            <span className="hidden md:inline">
              Din Pålitliga Webbdesignpartner för Entreprenörer
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
            Din vision, vår webbmagi: Tillsammans bygger vi ditt online-imperium
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <a href="https://calendly.com/webbutvecklingsverket/konsult-mote">
              <div className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0">
                Boka tid
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        ></motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 90"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  )
}
