"use client"

import { Languages, Zap, BarChart3, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Languages,
      title: "Multilingual Agents",
      description: "Support for 20+ African languages & dialects for seamless, context-aware communication.",
      benefits: ["Cultural Awareness", "Real-Time Translation", "Inclusive Reach"],
      grad: "from-purple-500 via-fuchsia-400 to-yellow-300",
      marble: "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-200 shadow-yellow-100/30"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Blazing realtime responses (<100ms), 99.9% uptime — born agile, built reliable.",
      benefits: ["Sub-second Processing", "Auto Scaling", "Enterprise Grade"],
      grad: "from-cyan-400 via-blue-500 to-sky-300",
      marble: "bg-gradient-to-tr from-cyan-300 via-blue-400 to-teal-100 shadow-cyan-200/30"
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Effortless dashboards, prediction, and crystal-clear control in your hands.",
      benefits: ["Real-Time Insights", "Predictive Reports", "Custom Views"],
      grad: "from-indigo-600 via-purple-400 to-fuchsia-300",
      marble: "bg-gradient-to-tr from-indigo-400 via-purple-300 to-pink-200 shadow-purple-200/20"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Behavior, sentiment, and personalization—know and serve your customer like never before.",
      benefits: ["Sentiment Tracking", "Personalization", "Behavioral Patterns"],
      grad: "from-emerald-400 via-green-400 to-blue-400",
      marble: "bg-gradient-to-br from-emerald-300 via-green-300 to-blue-100 shadow-blue-200/30"
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Unique background decor: blobs and sparkles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-6rem] left-1/4 w-72 h-72 md:w-[24vw] md:h-[24vw] bg-gradient-to-br from-fuchsia-400 via-pink-400 to-yellow-300 opacity-30 blur-3xl animate-blob-move1" />
        <div className="absolute bottom-[4rem] right-[12%] w-64 h-64 md:w-[20vw] md:h-[20vw] bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-300 opacity-25 blur-2xl animate-blob-move2" />
        <div className="absolute bottom-0 left-[7vw] w-40 h-40 bg-gradient-to-br from-indigo-400 via-violet-300 to-fuchsia-200 opacity-20 blur-2xl animate-blob-move3" />
        {[...Array(8)].map((_,i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white opacity-40 animate-twinkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${i * 0.5 + Math.random()}s`
            }}
          />
        ))}
        <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: "radial-gradient(circle at 50% 60%,rgba(255,255,255,0.12) 0%,rgba(0,0,0,0.17) 70%)"}} />
      </div>
      <style>
        {`
        @keyframes twinkle {
          0%,100%{ opacity:0.4; transform:scale(1);}
          47% { opacity:1; transform:scale(1.5);}
          53% { opacity:0.8;}
        }
        @keyframes blob-move1 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(14px,32px) scale(1.09);}
        }
        @keyframes blob-move2 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(22px,-18px) scale(1.07);}
        }
        @keyframes blob-move3 {
          0%,100% { transform: translate(0,0) scale(1);}
          50% { transform: translate(-15px,20px) scale(1.09);}
        }
        .animate-blob-move1 { animation: blob-move1 13s ease-in-out infinite;}
        .animate-blob-move2 { animation: blob-move2 18s ease-in-out infinite;}
        .animate-blob-move3 { animation: blob-move3 14s ease-in-out infinite;}
        .animate-twinkle { animation: twinkle 6s infinite;}
        `}
      </style>

      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-20">
          <span className="block text-transparent bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-lg font-semibold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 tracking-tight
            transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              The Afrainity Edge
            </span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            True African understanding meets next-gen tech. Local, fast, insightful and built for you.
          </p>
        </div>

        {/* Responsive flex: vertical stack on mobile, horizontal row on lg+ */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {features.map((feature, i) => (
            <div
              key={i}
              tabIndex={0}
              className={`
                relative group flex-1 min-w-0 w-full max-w-full
                rounded-3xl
                bg-slate-900/85
                backdrop-blur-md
                border border-white/15
                px-8 py-10 mb-8 lg:mb-0
                flex flex-col
                ${
                  hovered === i
                    ? "scale-[1.06] border-2 border-white/25 shadow-2xl shadow-white/10 z-20"
                    : "hover:scale-[1.025] hover:z-10"
                }
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                focus:ring-2 focus:ring-pink-300 outline-none transition-all duration-500 ease-out
              `}
              style={{ transitionDelay: `${i * 0.14}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {/* Floating “Marble/Blob” Accent */}
              <div className={`
                absolute top-[-2.5rem] right-[-1.2rem] w-14 h-14 rounded-full blur-md
                z-0 transition-all
                ${feature.marble}
                ${hovered===i ? 'opacity-70 scale-125 shadow-2xl' : 'opacity-40 scale-100'}
                group-hover:opacity-70 group-hover:scale-110
              `} />

              {/* SHINY sweep on hover */}
              <div className={`
                pointer-events-none absolute inset-0 z-10 rounded-[1.5rem] overflow-hidden
                before:content-[''] before:absolute before:-left-24 before:top-0 before:h-full before:w-20
                  before:bg-gradient-to-tr before:from-white/30 before:to-transparent before:blur-xl
                  before:rotate-12 before:transition-transform
                before:duration-900
                ${hovered===i ? "before:translate-x-[400%]" : "before:-translate-x-6"}
              `}
              />

              <div className="relative z-20">
                <div className={`w-14 h-14 bg-gradient-to-tr ${feature.grad} rounded-2xl flex items-center justify-center mb-6 drop-shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-gray-200 mb-5">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((b, j) => (
                    <li key={j} className="flex items-center text-cyan-200 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                {/* Learn more wiggle, animated in on hover */}
              </div>
              {/* Sparkle highlights on hover (on top of card) */}
              {hovered === i && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, s) => (
                    <div
                      key={s}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white/60 blur-[1.5px] animate-twinkle"
                      style={{
                        left: `${18+Math.random()*60}%`,
                        top: `${18+Math.random()*60}%`,
                        animationDelay: `${Math.random()+s*0.7}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 transition-all duration-1000 delay-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "<100ms", label: "Responses" },
            { number: "20+", label: "Languages" },
            { number: "24/7", label: "Support" },
          ].map((stat, k) => (
            <div key={k} className="text-center p-6 rounded-2xl bg-white/10 border border-white/6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}