import { motion, AnimatePresence } from "framer-motion"

import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon"
import { CloseIcon } from "../../assets/icons/CloseIcon"
import { TailcastLogo } from "../../assets/logos/TailcastLogo"

export const CallToAction = () => (
  <AnimatePresence>
    <div className="flex justify-center items-center my-8 px-4">
      <div className="flex flex-col md:flex-row bg-customDarkBgTransparent rounded-lg border border-gray-600 p-4 md:p-6 shadow-lg w-full max-w-4xl">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold tracking-normal text-white mb-2">
            Share Your Challenges
          </h2>
          <h2 className="text-xl md:text-2xl font-bold tracking-normal text-customSecondary">
            We'll Build Custom AI Automations to Turn Them into Effortless Solutions.
          </h2>

          {/* <ul className="mb-6 text-white mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Vestibulum viverra</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Morbi mollis metus pretium</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Etiam lectus nunc, commodo</span>
                </li>
              </ul> */}
        </div>
        <div className="w-full md:w-1/2 flex items-center flex-col justify-center">
          <div className="flex flex-wrap">
            {/* <div className="w-full sm:w-4/5 p-2 mx-auto">
                  <input
                    className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    id="newsletterInput3-1"
                    type="text"
                    placeholder="Your email address"
                  />
                </div> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex">
                <a href="https://calendly.com/relumify/konsult-mote">
                  <div className="w-86 h-16 custom-button-colored px-5  text-2xl font-bold">
                    Let's solve it
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </AnimatePresence>
)
