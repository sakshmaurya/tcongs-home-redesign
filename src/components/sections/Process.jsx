import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Bug,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const processData = [
  {
    id: 1,
    number: "01",
    title: "Discovery",
    icon: Search,
    color: "from-cyan-500 to-blue-600",

    heading: "Business Research & Analysis",

    description:
      "We analyze your business objectives, target audience, industry trends, and competitors to uncover opportunities and define a strong project foundation.",

    points: [
      {
        title: "Business Objectives",
        description:
          "Understand your vision, goals, challenges, and business requirements before starting the project.",
      },
      {
        title: "Audience Research",
        description:
          "Identify target users, customer behavior, and user expectations to create better experiences.",
      },
      {
        title: "Competitor Analysis",
        description:
          "Study competitors to discover opportunities, strengths, weaknesses, and market positioning.",
      },
      {
        title: "Market Research",
        description:
          "Research industry trends and customer demands to build future-ready solutions.",
      },
    ],
  },

  {
    id: 2,
    number: "02",
    title: "Planning",
    icon: Lightbulb,
    color: "from-violet-500 to-purple-600",

    heading: "Strategy & Technical Architecture",

    description:
      "Our experts create a detailed roadmap, user journey, technology stack, and scalable architecture for successful execution.",

    points: [
      {
        title: "Project Roadmap",
        description:
          "Create milestones, timelines, and delivery phases for efficient execution.",
      },
      {
        title: "User Journey",
        description:
          "Map every user interaction to maximize usability and engagement.",
      },
      {
        title: "System Architecture",
        description:
          "Design scalable backend architecture that supports future business growth.",
      },
      {
        title: "Technology Stack",
        description:
          "Select the most suitable technologies based on project requirements.",
      },
    ],
  },

  {
    id: 3,
    number: "03",
    title: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",

    heading: "UI / UX & Brand Experience",

    description:
      "We design beautiful, intuitive, and responsive interfaces that strengthen your brand identity while ensuring exceptional user experience.",

    points: [
      {
        title: "Wireframes",
        description:
          "Create layout structures that define the application's overall flow.",
      },
      {
        title: "Interactive Prototype",
        description:
          "Build clickable prototypes to validate the user experience before development.",
      },
      {
        title: "Brand Identity",
        description:
          "Design consistent colors, typography, icons, and branding elements.",
      },
      {
        title: "Responsive Interface",
        description:
          "Ensure seamless experience across desktop, tablet, and mobile devices.",
      },
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Development",
    icon: Code2,
    color: "from-emerald-500 to-green-600",

    heading: "Web, Mobile & Custom Software",

    description:
      "Using modern frameworks and best development practices, we build secure, scalable, and high-performance digital solutions.",

    points: [
      {
        title: "Frontend Development",
        description:
          "Develop fast, responsive, and interactive user interfaces using React and modern technologies.",
      },
      {
        title: "Backend Development",
        description:
          "Create secure APIs, authentication systems, and scalable server-side applications.",
      },
      {
        title: "API Integration",
        description:
          "Integrate payment gateways, third-party services, cloud storage, and external APIs.",
      },
      {
        title: "Database Design",
        description:
          "Build optimized database structures ensuring performance, security, and scalability.",
      },
    ],
  },

  {
    id: 5,
    number: "05",
    title: "Testing",
    icon: Bug,
    color: "from-orange-500 to-red-500",

    heading: "Quality Assurance & Optimization",

    description:
      "Every feature undergoes rigorous testing to ensure security, performance, responsiveness, and flawless functionality.",

    points: [
      {
        title: "Performance Testing",
        description:
          "Optimize application speed, loading time, and responsiveness.",
      },
      {
        title: "Security Testing",
        description:
          "Protect applications from vulnerabilities through comprehensive security testing.",
      },
      {
        title: "Bug Fixing",
        description:
          "Identify, track, and resolve issues before production deployment.",
      },
      {
        title: "Optimization",
        description:
          "Improve scalability, efficiency, and overall user experience.",
      },
    ],
  },

  {
    id: 6,
    number: "06",
    title: "Launch & Growth",
    icon: Rocket,
    color: "from-indigo-500 to-sky-500",

    heading: "Deployment & Continuous Improvement",

    description:
      "After launch, we continuously monitor, maintain, optimize, and improve your product to support long-term business growth.",

    points: [
      {
        title: "Deployment",
        description:
          "Deploy your application securely on production environments with best practices.",
      },
      {
        title: "SEO Optimization",
        description:
          "Improve search engine visibility through technical SEO and performance optimization.",
      },
      {
        title: "Maintenance",
        description:
          "Provide regular updates, backups, monitoring, and technical support.",
      },
      {
        title: "Growth Strategy",
        description:
          "Analyze user behavior and continuously improve the product based on insights.",
      },
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState(1);

  const current = processData.find(
    (item) => item.id === active
  );

  return (
    <section className="relative overflow-hidden bg-black py-24">

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="max-w-3xl mx-auto text-center"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            Our Process
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Turning Ideas Into
            <br />
            Digital Success
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            At Tcongs Infotech, every successful project begins with a clear strategy.
            From understanding your vision to delivering scalable digital solutions,
            our streamlined process ensures innovation, quality, and measurable
            business growth at every stage.
          </p>

        </motion.div>
                {/* =========================
              TIMELINE
        ========================= */}

        <div className="mt-20">

          {/* Desktop Timeline */}

          <div className="hidden lg:block">

            <div className="relative">

              {/* Base Line */}

              <div className="absolute left-0 right-0 top-7 h-[3px] rounded-full bg-white/10" />

              {/* Active Line */}

              <motion.div
                className="absolute top-7 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"
                animate={{
                  width: `${((active - 1) / 5) * 100}%`,
                }}
                transition={{ duration: 0.45 }}
              />

              <div className="grid grid-cols-6 gap-4">

                {processData.map((item) => {

                  const Icon = item.icon;

                  return (

                    <motion.button
                      key={item.id}
                      onMouseEnter={() => setActive(item.id)}
                      onClick={() => setActive(item.id)}
                      whileHover={{ y: -5 }}
                      className="relative flex flex-col items-center"
                    >

                      {/* Dot */}

                      <motion.div
                        animate={{
                          scale: active === item.id ? 1.15 : 1,
                        }}
                        className={`
                          z-20
                          h-14
                          w-14
                          rounded-full
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-300

                          ${
                            active === item.id
                              ? `bg-gradient-to-r ${item.color} shadow-[0_0_30px_#22d3ee]`
                              : "bg-zinc-900 border border-zinc-700"
                          }
                        `}
                      >
                        <Icon
                          size={22}
                          className="text-white"
                        />
                      </motion.div>

                      {/* Number */}

                      <p
                        className={`
                          mt-4
                          text-sm
                          font-semibold
                          transition

                          ${
                            active === item.id
                              ? "text-cyan-400"
                              : "text-gray-500"
                          }
                        `}
                      >
                        {item.number}
                      </p>

                      {/* Title */}

                      <h4
                        className={`
                          mt-1
                          text-base
                          font-semibold
                          transition

                          ${
                            active === item.id
                              ? "text-white"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {item.title}
                      </h4>

                    </motion.button>

                  );

                })}

              </div>

            </div>

          </div>

          {/* ======================
                Mobile Timeline
          ====================== */}

        <div className="lg:hidden">

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

    {processData.map((item) => {

      const Icon = item.icon;

      return (

        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`
            rounded-2xl
            border
            p-4
            transition-all
            duration-300

            ${
              active === item.id
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-white/10 bg-white/5"
            }
          `}
        >

          <div
            className={`
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              ${item.color}
            `}
          >
            <Icon size={20} className="text-white" />
          </div>

          <p className="mt-3 text-xs text-cyan-400">
            {item.number}
          </p>

          <h4 className="mt-2 text-sm font-semibold text-white">
            {item.title}
          </h4>

        </button>

      );

    })}

  </div>

</div>

        </div>
                {/* =========================
              ACTIVE CONTENT
        ========================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            className="
              mt-20
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
            "
          >

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* LEFT */}

              <div className="p-8 lg:p-12">

                <div
                  className={`
                    inline-flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${current.color}
                  `}
                >
                  <current.icon
                    size={30}
                    className="text-white"
                  />
                </div>

                <p className="mt-6 text-cyan-400 uppercase tracking-[4px] text-sm">
                  Step {current.number}
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {current.heading}
                </h2>

<p className="mt-6 text-base md:text-lg leading-8 text-gray-400">         
           {current.description}
                </p>

              </div>

              {/* RIGHT */}

              <div
  className="
    border-t
    lg:border-t-0
    lg:border-l
    border-white/10
    p-8
    lg:p-12
  "
>

<h3 className="text-2xl font-bold text-white">                  
  Key Deliverables
                </h3>

                <div className="mt-8 grid gap-6">

                  {current.points.map((point, index) => (

  <motion.div
    key={point.title}
    initial={{
      opacity: 0,
      x: 20,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: index * 0.08,
    }}
    whileHover={{
      scale: 1.02,
      x: 6,
    }}
    className="
      group
      flex
      items-start
      gap-5
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:bg-cyan-500/10
    "
  >

    <div
      className={`
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        ${current.color}
      `}
    >
      <CheckCircle2
        size={20}
        className="text-white"
      />
    </div>

    <div>

      <h4 className="text-lg font-semibold text-white">
        {point.title}
      </h4>

      <p className="mt-2 text-sm leading-7 text-gray-400">
        {point.description}
      </p>

    </div>

  </motion.div>

))}

                </div>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>
              </div>
    </section>
  );
}