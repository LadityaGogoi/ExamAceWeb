import { motion } from "framer-motion"
import images from "../constants/images"
import { useNavigate } from "react-router-dom";

const TrendingTopics = [
  { category: "Chemistry", chapter: "Chemical Kinetics", totalEnrollment: 3456, image: images.ChemistryBackground, testId: '123' },
  { category: "Math", chapter: "Functions", totalEnrollment: 2890, image: images.MathBackground, testId: '123' },
  { category: "Physics", chapter: "Electrostatics", totalEnrollment: 3124, image: images.PhysicsBackground, testId: '123' },
  { category: "Chemistry", chapter: "Coordination Compounds", totalEnrollment: 2750, image: images.ChemistryBackground, testId: '123' },
  { category: "Math", chapter: "Complex Numbers", totalEnrollment: 2333, image: images.MathBackground, testId: '123' },
  { category: "Physics", chapter: "Thermodynamics", totalEnrollment: 3688, image: images.PhysicsBackground, testId: '123' },
  { category: "Chemistry", chapter: "Organic Chemistry - General Principles", totalEnrollment: 4021, image: images.ChemistryBackground, testId: '123' },
  { category: "Chemistry", chapter: "Chemical Bonding", totalEnrollment: 3187, image: images.ChemistryBackground, testId: '123' }
];

const Trending = () => {
  const navigate = useNavigate()

  const handleClick = (route) => {
    navigate(route)
  }
  return (
    <div className="my-10">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-xl font-extrabold m-3">
        Trending Topics | JEE Mains
      </div>
      <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3">
        {
          TrendingTopics.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
              viewport={{ once: true }}
              className="transition-transform duration-300 hover:scale-105 w-1/5 h-64 cursor-pointer flex flex-col gap-3 m-3"
              key={item.chapter}
              onClick={() => handleClick(`/dashboard/course/${item.category}/${item.chapter}`)}
            >
              <div className='w-full h-32'>
                <img src={item.image} alt="background" className="rounded w-full h-full object-cover" />
              </div>
              <div className="text-base font-bold text-slate-500">
                {item.chapter}
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center gap-1">
                  <div className="text-xs text-green-500 font-extrabold">free</div>
                  <img src={images.unlock} alt="free" className="w-3 h-3" />
                </div>
                <div className="flex flex-row justify-between items-center gap-1">
                  <img src={images.view} alt="views" className="w-3 h-3" />
                  <div className="text-xs text-slate-500">{item.totalEnrollment}</div>
                </div>
              </div>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Trending;
