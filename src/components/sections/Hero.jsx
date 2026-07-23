import { useState } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import figma from "../../assets/logos/figma.svg";
import react from "../../assets/logos/react.svg";
import branding from "../../assets/logos/branding.svg";
import MagneticButton from "../common/MagneticButton";

const Hero = ({ openContact }) => {
  

  const tools = [
    {
      name: "Figma",
      image: figma,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Branding",
      image: branding,
    },
  ];


return (

<section
className="
relative
z-10
overflow-x-hidden
bg-black
pt-28
md:pt-36
pb-24
"
>

{/* Background Glow */}

<div
className="
absolute
left-1/2
top-1/2
h-[650px]
w-[650px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-cyan-500/10
blur-[160px]
"
/>


<div
className="
relative
mx-auto
max-w-7xl
px-6
lg:px-8
"
>


<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
lg:gap-16
items-center
"
>


{/* LEFT CONTENT */}


<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

className="
flex
flex-col
items-center
lg:items-start
"
>


{/* TRUST BADGE */}


<div
className="
w-full
max-w-3xl
flex
flex-col
sm:flex-row
items-center
justify-center
gap-4
rounded-3xl
lg:rounded-full
border
border-white/10
bg-white/5
backdrop-blur-xl
px-5
py-4
"
>


<div
className="
flex
h-12
w-12
shrink-0
items-center
justify-center
rounded-full
bg-green-500/20
"
>

<Shield
size={25}
className="text-green-400"
/>

</div>



<p
className="
text-sm
text-center
font-medium
text-gray-300
"
>

Building digital solutions for modern businesses .

</p>


<div
className="
hidden
lg:block
h-8
w-px
bg-white/20
"
/>



<div
className="
flex
items-center
gap-3
"
>

{
tools.map((tool,index)=>(

<img

key={index}

src={tool.image}

alt={tool.name}

className="
h-7
w-7
object-contain
hover:scale-110
transition
"
/>

))
}

</div>


</div>





{/* HEADING */}


<h1
className="
mt-10
text-center
lg:text-left
text-4xl
sm:text-5xl
lg:text-7xl
font-bold
leading-tight
text-white
"
>

Smart Digital
<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
bg-clip-text
text-transparent
"
>
Solutions
</span>

<br/>

Modern Businesses

</h1>





{/* DESCRIPTION */}


<p
className="
mt-6
max-w-xl
text-center
lg:text-left
text-base
sm:text-lg
leading-8
text-gray-400
"
>

We help brands grow with web development,
mobile applications, UI/UX design,
branding, AI solutions and digital marketing
across the globe.

</p>





{/* BUTTONS */}


<div
className="
mt-10
flex
flex-col
sm:flex-row
gap-4
w-full
justify-center
lg:justify-start
"
>


<button

className="
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
px-8
py-4
text-white
font-semibold
shadow-lg
shadow-cyan-500/20
transition
hover:scale-105
"

>

Schedule Meeting

</button>



<button

onClick={()=>{
document
.getElementById("services")
?.scrollIntoView({
behavior:"smooth"
})
}}

className="
rounded-full
border
border-white/20
bg-white/5
backdrop-blur-xl
px-8
py-4
text-white
font-semibold
transition
hover:bg-white/10
"

>
Services
</button>



</div>



</motion.div>
{/* RIGHT CONTENT */}

<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

className="
relative
flex
justify-center
w-full
mt-10
lg:mt-0
px-0
"

>


{/* Glow */}

<div
className="
absolute
h-[280px]
w-[280px]
sm:h-[380px]
sm:w-[380px]
lg:h-[520px]
lg:w-[520px]
rounded-full
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
blur-3xl
opacity-30
"
/>



{/* Website Preview */}


<div
className="
relative
z-10
w-full
max-w-[500px]
overflow-hidden
rounded-[30px]
border
border-white/10
bg-white/5
backdrop-blur-xl
shadow-2xl
"
>

{/* Browser Header */}

<div
className="
flex
items-center
justify-between
border-b
border-white/10
bg-black/40
px-5
py-4
"
>


<div className="flex gap-2">

<span className="h-3 w-3 rounded-full bg-red-400"></span>

<span className="h-3 w-3 rounded-full bg-yellow-400"></span>

<span className="h-3 w-3 rounded-full bg-green-400"></span>

</div>


<div
className="
rounded-full
border
border-white/10
bg-white/5
px-4
py-2
text-xs
text-gray-300
"
>

digital-product-preview

</div>


</div>





{/* Preview Hero */}


<div
className="
bg-gradient-to-r
from-cyan-500
via-blue-600
to-purple-600
p-5
sm:p-8
text-white
"
>


<p className="text-sm opacity-80">
Digital Agency
</p>


<h2
className="
mt-3
text-2xl
sm:text-3xl
font-bold
leading-tight
"
>
Build Your Digital Future
</h2>


<p
className="
mt-3
text-sm
text-blue-100
"
>

Web • Apps • AI • Marketing

</p>
<div
className="
mt-6
rounded-2xl
border
border-white/20
bg-white/10
backdrop-blur-xl
p-3
sm:p-4
"
>
<p className="text-sm font-semibold">
👋 Welcome to Tcongs Infotech
</p>

<p className="mt-2 text-sm text-blue-100 leading-6">
We create modern websites, mobile applications,
AI-powered software and digital marketing strategies
that help businesses launch faster, grow smarter
and scale globally.
</p>
</div>


<MagneticButton

onClick={openContact}

className="
mt-6
rounded-full
bg-white
px-6
py-3
font-semibold
text-black
shadow-lg
"

>

Get Started →

</MagneticButton>


</div>





{/* Services Cards */}


<div
className="
grid
grid-cols-2
gap-2
sm:gap-3
p-3
sm:p-5
bg-black/20
"
>


{
[
["🛒","E-Commerce"],
["💻","Web Apps"],
["📱","Mobile Apps"],
["🤖","AI Solutions"],
["🎨","UI / UX"],
["📈","Marketing"]

].map((item,index)=>(


<div

key={index}

className="
rounded-xl
border
border-white/10
bg-white/5
p-3
hover:bg-white/10
transition
"

>


<div
className="
flex
h-9
w-9
items-center
justify-center
rounded-lg
bg-white/10
text-lg
"
>

{item[0]}

</div>


<p
className="
mt-2
text-xs
sm:text-sm
font-semibold
text-white
"
>

{item[1]}

</p>


</div>


))

}


</div>



</div>





{/* Floating Card 1 */}


<motion.div

animate={{
y:[-10,10,-10]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
hidden
lg:block
absolute
left-[-32px]
top-16
rounded-2xl
border
border-white/10
bg-black/70
backdrop-blur-xl
p-5
shadow-xl
z-20
"

>


<p className="text-sm text-gray-400">
Services
</p>


<h3 className="text-2xl font-bold text-white">
Web & Apps
</h3>


</motion.div>





{/* Floating Card 2 */}


<motion.div

animate={{
y:[-5,5,-5]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className="
hidden
lg:block
absolute
right-[-24px]
bottom-4
rounded-2xl
border
border-white/10
bg-black/70
backdrop-blur-xl
px-4
py-3
shadow-xl
z-20
"

>

<p className="text-xs text-gray-400">
Expertise
</p>


<h3
className="
mt-1
text-sm
font-bold
text-white
"
>

AI + Cloud
<br/>
Software Development

</h3>


</motion.div>



</motion.div>
</div> 
</div> 
</section>

);

};


export default Hero;