import { useState } from "react";
import { solutions } from "../../data/solutions";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logos/logo.svg";
import ContactModal from "../common/ContactModal";


const Navbar = ({ openContact }) => {


const [activeSolution,setActiveSolution] = useState(solutions[0]);
const [mobileMenu,setMobileMenu] = useState(false);
const [mobileSolution,setMobileSolution] = useState(false);




return (

<header className="fixed top-0 left-0 w-full z-50 px-4">


<nav
className="
mx-auto
mt-5
max-w-7xl
flex
items-center
justify-between
rounded-full
border
border-white/10
bg-black/60
px-6
py-4
backdrop-blur-xl
shadow-2xl
"
>


{/* LOGO */}

<motion.a

href="/"

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

whileHover={{
scale:1.05
}}

>

<img
src={logo}
alt="Tcongs"
className="h-10"
/>

</motion.a>





{/* DESKTOP MENU */}

<div
className="
hidden
md:flex
items-center
gap-8
text-sm
font-medium
text-gray-300
"
>


<a
href="/"
className="hover:text-cyan-400 transition"
>
Home
</a>


<a
href="/company"
className="hover:text-cyan-400 transition"
>
Company
</a>





{/* SOLUTION DROPDOWN */}

<div className="relative group">


<button
className="
flex
items-center
gap-1
hover:text-cyan-400
transition
"
>

Solution

<ChevronDown
size={16}
className="
group-hover:rotate-180
transition
"
/>

</button>



<div
className="
absolute
hidden
group-hover:block
top-full
pt-5
left-1/2
-translate-x-1/2
"
>


<div
className="
w-[900px]
rounded-3xl
overflow-hidden
border
border-white/10
bg-black/90
backdrop-blur-xl
shadow-2xl
flex
text-white
"
>


{/* LEFT */}

<div
className="
w-[35%]
border-r
border-white/10
p-5
"
>


{
solutions.map((solution,index)=>{


const Icon=solution.icon;


return(

<motion.div

key={index}

onMouseEnter={()=>
setActiveSolution(solution)
}

whileHover={{
x:5
}}

className={`
flex
items-center
gap-3
px-4
py-3
rounded-xl
cursor-pointer
mb-2
transition

${
activeSolution.title===solution.title

?

"bg-gradient-to-r from-cyan-500 to-blue-600"

:

"hover:bg-white/10"

}

`}

>


<Icon size={20}/>


<span>
{solution.title}
</span>


</motion.div>

)


})

}


</div>





{/* RIGHT */}

<div
className="
w-[65%]
grid
grid-cols-2
gap-4
p-6
"
>


{
activeSolution.services?.map((service,index)=>{


const Icon=service.icon;


return(

<motion.div

key={index}

whileHover={{
scale:1.03
}}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-4
hover:bg-white/10
transition
"

>


<div className="flex gap-3">


{
Icon &&

<div
className="
h-10
w-10
flex
items-center
justify-center
rounded-xl
bg-cyan-500/20
text-cyan-400
"
>

<Icon size={20}/>

</div>

}



<div>


<h4
className="
text-sm
font-semibold
"
>

{service.title}

</h4>


<p
className="
text-xs
text-gray-400
mt-1
"
>

{service.description}

</p>


</div>


</div>


</motion.div>

)


})

}


</div>


</div>


</div>


</div>






<a
href="/contact"
className="
hover:text-cyan-400
transition
"
>
Contact
</a>


</div>





{/* BUTTON */}

<button
  onClick={openContact}
  className="
  hidden
  md:block
  rounded-full
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  px-6
  py-3
  text-white
  font-semibold
  shadow-lg
  shadow-cyan-500/20
  hover:scale-105
  transition
"
>
  Launch Your Idea 🚀
</button>





{/* MOBILE ICON */}

<button
onClick={()=>setMobileMenu(!mobileMenu)}
className="md:hidden text-white"
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






{/* MOBILE MENU */}

<AnimatePresence>


{
mobileMenu &&

<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}

className="
mt-3
mx-4
rounded-3xl
bg-black/95
border
border-white/10
p-6
text-white
md:hidden

max-h-[80vh]
overflow-y-auto
"
>


<a
href="/"
className="
block
py-3
text-gray-300
hover:text-cyan-400
transition
"
>
Home
</a>


<a
href="/company"
className="
block
py-3
text-gray-300
hover:text-cyan-400
transition
"
>
Company
</a>




<button
  onClick={() => setMobileSolution(!mobileSolution)}
  className="
  flex
  items-center
  justify-between
  w-full
  py-3
  text-gray-300
  hover:text-cyan-400
  transition
  "
>
  <span>Solution</span>

  <ChevronDown
    size={18}
    className={`transition ${
      mobileSolution ? "rotate-180" : ""
    }`}
  />
</button>



<AnimatePresence>

{
mobileSolution &&

<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}

className="
overflow-hidden
pl-4
pb-3
"
>


{
solutions.map((item,index)=>(

<div
key={index}
className="
border-b
border-white/10
py-3
"
>


<h4 className="font-semibold">
{item.title}
</h4>


{
item.services?.map((service, i) => (

<p
key={i}
className="
block
py-2
text-sm
text-gray-400
hover:text-cyan-400
transition
"
>
{service.title}

</p>

))

}


</div>


))

}


</motion.div>

}

</AnimatePresence>



<a
href="/contact"
className="
block
py-3
text-gray-300
hover:text-cyan-400
transition
"
>
Contact
</a>



<button
  onClick={openContact}
  className="
  mt-6
  w-full
  rounded-full
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  py-3
  text-white
  font-semibold
"
>
  Launch Your Idea 🚀
</button>



</motion.div>

}


</AnimatePresence>



</header>

)

}


export default Navbar;