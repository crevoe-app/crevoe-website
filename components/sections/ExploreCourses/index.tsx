import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    id: 1,
    image: "/figma.svg",
    title: "25+ procreate retro star stamp brush set",
    author: "Procreate Stamps, Brushes and Fonts by Laura Beuther",
    rating: null,
    reviewCount: "No ratings",
    price: "€5.00",
    originalPrice: null,
  },
  {
    id: 2,
    image: "/harping.png",
    title: "25+ procreate retro star stamp brush set",
    author: "Procreate Stamps, Brushes and Fonts by Laura Beuther",
    rating: 5.0,
    reviewCount: "(2)",
    price: "€0.00+",
    originalPrice: null,
  },
  {
    id: 3,
    image: "/html.svg",
    title: "50+ procreate retro star stamp brush set",
    author: "Procreate Stamps, Brushes and Fonts by Laura Beuther",
    rating: 4.9,
    reviewCount: "(8)",
    price: "€12.99",
    originalPrice: null,
  },
  {
    id: 4,
    image: "/cyber.svg",
    title: "75+ procreate retro star stamp brush set",
    author: "Procreate Stamps, Brushes and Fonts by Laura Beuther",
    rating: 4.8,
    reviewCount: "(15)",
    price: "€19.99",
    originalPrice: null,
  },
  {
    id: 5,
    image: "/figma.svg",
    title: "75+ procreate retro star stamp brush set",
    author: "Procreate Stamps, Brushes and Fonts by Laura Beuther",
    rating: 4.8,
    reviewCount: "(15)",
    price: "€19.99",
    originalPrice: null,
  },
]

export function CourseCards() {
  return (
    <section className="py-16 px-6  bg-slate-900 ">
      <div className="max-w-7xl flex md:flex-row flex-col gap-5 mx-auto">
        <div className="flex flex-col items-center justify-center md:w-1/3  ">
          <h2 className="md:text-3xl text-xl font-bold text-white">Hot new releases</h2>
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-primary-700 font-semibold px-14 py-2 rounded-full md:text-lg text-xs transition-all duration-300 shadow-lg hover:shadow-xl"
              >
              <Link href="https://app.crevoe.com/market" target="_blank" rel="noopener noreferrer">
                
                Explore Courses
                </Link>
              </motion.button>
            </motion.div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {courses.map((course) => (
            <div key={course.id} className="flex-shrink-0 w-60 bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Course Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={course.image }
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.author}</p>

                {/* Rating and Price Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-gray-400 text-gray-400" />
                    {course.rating ? (
                      <span className="text-sm text-gray-700">
                        {course.rating} {course.reviewCount}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">{course.reviewCount}</span>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
