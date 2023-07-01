import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md: w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl"></p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Web Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Well Versed with MongoDB, Express.js, React.js, Node.js. Which is a
            powerful combination of technologies that allows me to build robust,
            scalable, and efficient web applications.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl"></p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Programming
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            &#x2022; Good grip on C/C++ and Javascript <br />
            &#x2022; Understanding of Data Structures and Algorithms
            <br />
            &#x2022; Solved 250+ DSA questions.
            <br />
          </p>
        </motion.div>
      </div>
      {/* Skills */}
      <div className="md:flex md:justify-between mt-16 gap-16">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl"></p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">CS Fundamentals</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            &#x2022; Understanding of Object-Oriented Programming, Computer networks and Database
            Management System. <br/>
            &#x2022; Familiar with MySQL RDBMS
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl"></p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tools & Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            &#x2022; Version Control using Git & Github <br />
            &#x2022; Postman for testing APIs <br />
            &#x2022; Tailwindcss & Bootstrap for designing <br />
            &#x2022; MongoDB Atlas for Database <br />
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl"></p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Soft Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          &#x2022; Verbal and Written Communication <br />
          &#x2022; Teamwork <br />
          &#x2022; Leadership <br />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
