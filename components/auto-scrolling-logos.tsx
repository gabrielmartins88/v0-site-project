"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Logo {
  name: string
  src: string
}

export default function AutoScrollingLogos() {
  // Mock client logos
  const logos: Logo[] = [
    { name: "TechCorp", src: "/logos/techcorp.svg" },
    { name: "DataFlow", src: "/logos/dataflow.svg" },
    { name: "InnovateSoft", src: "/logos/innovatesoft.svg" },
    { name: "GlobalTech", src: "/logos/globaltech.svg" },
    { name: "SecureNet", src: "/logos/securenet.svg" },
    { name: "CloudWave", src: "/logos/cloudwave.svg" },
    { name: "DigitalEdge", src: "/logos/digitaledge.svg" },
    { name: "SmartSystems", src: "/logos/smartsystems.svg" },
    { name: "FutureAI", src: "/logos/futureai.svg" },
    { name: "ConnectX", src: "/logos/connectx.svg" },
  ]

  // Duplicate logos to create seamless scrolling effect
  const [allLogos, setAllLogos] = useState<Logo[]>([...logos, ...logos])

  // Pause animation on hover
  const [isPaused, setIsPaused] = useState(false)

  // Function to rotate logos for infinite scrolling effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setAllLogos((prevLogos) => {
        const firstLogo = prevLogos[0]
        return [...prevLogos.slice(1), firstLogo]
      })
    }, 3000) // Adjust timing as needed

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      className="relative overflow-hidden py-10 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex animate-scroll">
        {allLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-12 grayscale hover:grayscale-0 transition-all duration-300">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={120}
              height={60}
              className="object-contain h-16"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
