import { motion } from "framer-motion";
import { useMemo } from "react";


const AnimatedBackground = () => {


  const dots = useMemo(() => {

    return Array.from({ length: 80 }, (_, index) => ({

      id: index,

      left: Math.random() * 100,

      top: Math.random() * 100,

      duration: 6 + Math.random() * 10,

      delay: Math.random() * 5,

      size: 3 + Math.random() * 4,

    }));

  }, []);



  return (

    <div
      aria-hidden="true"
      className="
        fixed
        inset-0
        -z-10
        overflow-hidden
        pointer-events-none
        bg-[#050505]
      "
    >


      {/* Moving Particles */}

      {
        dots.map((dot)=>(

          <motion.span

            key={dot.id}

            className="
              absolute
              rounded-full
              bg-cyan-400
              shadow-[0_0_18px_#22d3ee]
            "

            style={{

              left:`${dot.left}%`,

              top:`${dot.top}%`,

              width:`${dot.size}px`,

              height:`${dot.size}px`

            }}


            animate={{

              y:[
                0,
                -120,
                0
              ],

              x:[
                0,
                50,
                0
              ],


              opacity:[
                0.2,
                1,
                0.2
              ],


              scale:[
                1,
                1.8,
                1
              ]

            }}


            transition={{

              duration:dot.duration,

              delay:dot.delay,

              repeat:Infinity,

              ease:"easeInOut"

            }}

          />

        ))
      }




      {/* Cyan Glow */}

      <motion.div

        animate={{

          x:[
            0,
            120,
            0
          ],

          y:[
            0,
            -80,
            0
          ]

        }}


        transition={{

          duration:15,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
          absolute
          left-10
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "

      />





      {/* Purple Glow */}

      <motion.div

        animate={{

          x:[
            0,
            -120,
            0
          ],

          y:[
            0,
            100,
            0
          ]

        }}


        transition={{

          duration:18,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
          absolute
          right-10
          bottom-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/20
          blur-[160px]
        "

      />



      {/* Blue Center Glow */}

      <motion.div

        animate={{

          scale:[
            1,
            1.3,
            1
          ]

        }}


        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut"

        }}


        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "

      />


    </div>

  );

};


export default AnimatedBackground;