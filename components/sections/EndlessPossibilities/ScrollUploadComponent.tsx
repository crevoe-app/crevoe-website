"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ScrollUploadComponent() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      // ✅ Two scrolls required to complete (multiply by 200 instead of 100)
      const scrollPercent = (scrollTop / docHeight) * 200
      const clampedProgress = Math.min(Math.max(scrollPercent, 0), 100)
      setUploadProgress(clampedProgress)

      // ✅ Check if this section is visible
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(inView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={targetRef} className="w-[300px] md:inline-block hidden absolute top-72 mx-auto">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
        >
          <Card className="p-2 border bg-white">
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 p-3 rounded-lg"
                whileHover={{ backgroundColor: "#fff" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/jpg.png" alt="file icon" className="w-6 h-6" />
                </motion.div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">filename.jpg</p>
                  <p className="text-sm text-gray-500">500kb</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Progress value={uploadProgress} className="h-2" />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
