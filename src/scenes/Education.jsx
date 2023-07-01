import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";


const Education = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 450px)");
  return (
    <section id="education" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EDUCATION
        </p>
        <LineGradient width="mx-auto w-2/5" />
        
      </motion.div>

      {/* Education*/}
      <div className="md:flex md:justify-between gap-8">
      {isAboveSmallScreens ? (
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-education1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-xl">Sardar Vallabhbhai National Institute of Technology, Surat.</p>
          <p className=" text-l text-black">
           Bachelors of Technology Majors Electronics and Communication Engineering <br/>CGPA: 8.46
          </p>
        </motion.div>
      ):(
        <div className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48">
        <p className="font-opensans text-2xl pb-4">SVNIT, Surat.</p>
          <p className=" text-l text-black">
           Bachelors of Technology Majors Electronics and Communication Engineering <br/>CGPA: 8.46
          </p>
        </div>
      )}
        
      {isAboveSmallScreens ? (
        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-education2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-xl pb-10">Coast Guard Public School, Daman </p>
          <p className="text-l text-black" >
            Higher Secondary Education <br className="xs:hidden"/>
            Stream: Science with Maths<br className="xs:hidden"/>
            Passing Year: 2020<br className="xs:hidden"/>
            Percentage- 94.6% <br className="xs:hidden"/>
          </p>
        </motion.div>
      ):(
        <div className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48">
        <p className="font-opensans text-xl pb-6">Coast Guard Public School, Daman </p>
          <p className="text-l text-black" >
            Higher Secondary Education <br className="xs:hidden"/>
            Stream: Science with Maths<br className="xs:hidden"/>
            Passing Year: 2020<br className="xs:hidden"/>
            Percentage- 94.6% <br className="xs:hidden"/>
          </p>
        </div>
      )}
        

        
      </div>
    </section>
  );
};

export default Education;