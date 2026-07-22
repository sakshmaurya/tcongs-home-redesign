import { useState } from "react";
import { solutions } from "../../data/solutions";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logos/logo.svg";


const Navbar = () => {


  const [activeSolution,setActiveSolution] = useState(solutions[0]);
  const [mobileMenu,setMobileMenu] = useState(false);
  const [mobileSolution,setMobileSolution] = useState(false);



  return (

    <header className="fixed top-0 left-0 w-full z-50">


      <nav className="
      mx-auto mt-5
      max-w-7xl
      flex items-center justify-between
      rounded-full
      border border-gray-200
      bg-white/80
      px-6 py-4
      backdrop-blur-lg
      ">



        {/* Logo */}

        <motion.a
        href="/"
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        >

          <img
          src={logo}
          alt="Tcongs"
          className="h-10 w-auto"
          />

        </motion.a>






        {/* Desktop Menu */}

        <div className="
        hidden md:flex
        items-center
        gap-8
        text-sm
        font-medium
        ">


          <a href="/" className="hover:text-blue-600">
            Home
          </a>


          <a href="/company" className="hover:text-blue-600">
            Company
          </a>




          {/* Solution */}

          <div className="relative group">


            <button
            className="
            flex items-center gap-1
            hover:text-blue-600
            "
            >

              Solution
              <ChevronDown size={16}/>

            </button>





            <div
            className="
            absolute
            hidden
            group-hover:flex
            top-full
            pt-4
            left-1/2
            -translate-x-1/2
            "
            >


              <div className="
              w-[900px]
              bg-black
              text-white
              rounded-2xl
              shadow-xl
              flex
              overflow-hidden
              ">


                {/* Categories */}

                <div className="
                w-[35%]
                border-r
                border-gray-700
                p-5
                ">


                {
                  solutions.map((solution,index)=>{

                    const Icon = solution.icon;


                    return(

                      <div
                      key={index}
                      onMouseEnter={()=>
                      setActiveSolution(solution)
                      }
                      className={`
                      flex items-center gap-3
                      px-4 py-3
                      rounded-lg
                      cursor-pointer
                      mb-2
                      ${
                        activeSolution.title===solution.title
                        ?
                        "bg-blue-600"
                        :
                        "hover:bg-gray-800"
                      }
                      `}
                      >


                        <Icon size={20}/>


                        <span>
                          {solution.title}
                        </span>


                      </div>

                    )


                  })
                }


                </div>





                {/* Services */}

                <div className="
                w-[65%]
                p-6
                grid grid-cols-2
                gap-4
                ">


                {
                  activeSolution.services?.map((service,index)=>{


                    const Icon = service.icon;


                    return(

                      <div
                      key={index}
                      className="
                      flex gap-3
                      p-3
                      rounded-xl
                      hover:bg-gray-800
                      "
                      >

                        {
                          Icon &&
                          <Icon size={22}/>
                        }


                        <div>

                          <h4 className="text-sm font-semibold">
                            {service.title}
                          </h4>


                          <p className="
                          text-xs
                          text-gray-300
                          ">
                            {service.description}
                          </p>


                        </div>


                      </div>

                    )

                  })
                }


                </div>



              </div>


            </div>



          </div>





          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>


        </div>






        {/* Desktop Button */}

        <button
        className="
        hidden md:block
        rounded-full
        bg-black
        px-6 py-3
        text-white
        "
        >

          Launch Your Idea 🚀

        </button>






        {/* Mobile Button */}

        <button
        onClick={()=>setMobileMenu(!mobileMenu)}
        className="md:hidden"
        >

          {
            mobileMenu
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }

        </button>



      </nav>







      {/* Mobile Menu */}

      {
        mobileMenu && (

          <div
          className="
          mx-5
          mt-3
          rounded-2xl
          bg-black
          text-white
          p-6
          md:hidden
          "
          >


            <a
            href="/"
            className="block py-3"
            >
              Home
            </a>


            <a
            href="/company"
            className="block py-3"
            >
              Company
            </a>





            {/* Mobile Solution */}

            <button
            onClick={()=>
            setMobileSolution(!mobileSolution)
            }
            className="
            flex
            items-center
            justify-between
            w-full
            py-3
            "
            >

              Solution

              <ChevronDown size={18}/>


            </button>




            {
              mobileSolution && (

                <div className="mt-3">


                {
                  solutions.map((item,index)=>(

                    <div
                    key={index}
                    className="
                    border-b
                    border-gray-700
                    py-3
                    "
                    >

                      <h4 className="font-semibold">
                        {item.title}
                      </h4>


                      {
                        item.services?.map((service,i)=>(

                          <p
                          key={i}
                          className="
                          text-sm
                          text-gray-300
                          mt-2
                          "
                          >

                            {service.title}

                          </p>

                        ))
                      }


                    </div>


                  ))
                }


                </div>

              )
            }




            <a
            href="/contact"
            className="block py-3"
            >
              Contact
            </a>




            <button
            className="
            mt-4
            w-full
            rounded-full
            bg-white
            text-black
            py-3
            "
            >

              Launch Your Idea 🚀

            </button>


          </div>

        )

      }



    </header>

  )

}


export default Navbar;