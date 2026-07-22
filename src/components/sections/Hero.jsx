import { motion } from "framer-motion";
import { Shield } from "lucide-react";

import figma from "../../assets/logos/figma.svg";
import react from "../../assets/logos/react.svg";
import branding from "../../assets/logos/branding.svg";



const Hero = () => {


const tools = [
  {
    name:"Figma",
    image:figma
  },
  {
    name:"React",
    image:react
  },
  {
    name:"Branding",
    image:branding
  },
  
];



return (

<section
className="
relative
overflow-hidden
bg-white
pt-28
md:pt-36
pb-20
"
>


<div
className="
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
gap-14
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
rounded-2xl
lg:rounded-full
border
border-gray-200
bg-white
px-5
py-4
shadow-md
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
bg-green-100
"
>

<Shield
size={25}
className="text-green-600"
/>

</div>



<p
className="
text-sm
text-center
font-medium
text-gray-700
"
>

Trusted by businesses worldwide to build scalable digital solutions

</p>



<div
className="
hidden
lg:block
h-8
w-px
bg-gray-300
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
text-gray-900
"
>

Smart Digital
<br/>
Solutions for
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
text-gray-600
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
bg-black
px-8
py-4
text-white
font-semibold
transition
hover:bg-gray-800
"

>

Schedule Meeting

</button>


<button

className="
rounded-full
border
border-gray-300
px-8
py-4
font-semibold
transition
hover:bg-gray-100
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
mt-14
lg:mt-0
"

>


{/* Background Glow */}

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
from-blue-300
via-cyan-200
to-purple-300
blur-3xl
opacity-40
"
></div>



{/* Website Preview Card */}


<div

className="
relative
z-10
w-[300px]
sm:w-[380px]
lg:w-[500px]
overflow-hidden
rounded-[30px]
border
border-gray-200
bg-white
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
bg-gray-50
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
bg-white
px-4
py-2
text-xs
text-gray-500
"
>

tcongsinfotech.com

</div>


</div>


{/* Hero Preview */}


<div
className="
bg-gradient-to-r
from-blue-600
via-cyan-500
to-purple-600
p-8
text-white
"
>


<p
className="
text-sm
opacity-80
"
>

Digital Agency

</p>


<h2
className="
mt-3
text-3xl
font-bold
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



<button
className="
mt-6
rounded-full
bg-white
px-6
py-3
font-semibold
text-black
"
>

Get Started

</button>


</div>


{/* Services Cards */}

<div
className="
grid
grid-cols-2
gap-3
p-5
"
>

{/* Card Component Style */}


<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-blue-100
text-lg
"
>
🛒
</div>

<p className="mt-2 text-xs text-gray-500">
Solutions
</p>

<h3 className="text-sm font-bold">
E-Commerce
</h3>

</div>



<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-green-100
text-lg
"
>
💻
</div>

<p className="mt-2 text-xs text-gray-500">
Development
</p>

<h3 className="text-sm font-bold">
Web Apps
</h3>

</div>




<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-purple-100
text-lg
"
>
📱
</div>

<p className="mt-2 text-xs text-gray-500">
Solutions
</p>

<h3 className="text-sm font-bold">
Mobile Apps
</h3>

</div>




<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-orange-100
text-lg
"
>
🤖
</div>

<p className="mt-2 text-xs text-gray-500">
Innovation
</p>

<h3 className="text-sm font-bold">
AI Solutions
</h3>

</div>




<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-pink-100
text-lg
"
>
🎨
</div>

<p className="mt-2 text-xs text-gray-500">
Design
</p>

<h3 className="text-sm font-bold">
UI / UX
</h3>

</div>




<div
className="
rounded-xl
border
bg-gray-50
p-3
hover:shadow-md
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
bg-yellow-100
text-lg
"
>
📈
</div>

<p className="mt-2 text-xs text-gray-500">
Growth
</p>

<h3 className="text-sm font-bold">
Marketing
</h3>

</div>


</div>






</div>
{/* Floating Card - Projects */}


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
-left-8
top-16
rounded-2xl
bg-white
p-5
shadow-xl
border
border-gray-100
z-20
"

>


<p className="text-sm text-gray-500">
Services
</p>

<h3 className="text-2xl font-bold">
Web & Apps
</h3>


</motion.div>





{/* Floating Card - Rating */}


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
-right-6
bottom-4
rounded-2xl
bg-white
px-4
py-3
shadow-xl
border
border-gray-100
z-20
max-w-[180px]
"

>

<p className="
text-xs
text-gray-500
">
Expertise
</p>


<h3 className="
mt-1
text-sm
font-bold
leading-5
">
AI + Cloud
<br/>
Software Development
</h3>


</motion.div>







</motion.div>

{/* CLOSE GRID */}

</div>


</div>



{/* Background Decoration */}


<div
className="
absolute
-top-24
-left-24
h-72
w-72
rounded-full
bg-blue-100
opacity-40
blur-3xl
"
>
</div>



<div
className="
absolute
-bottom-24
-right-24
h-80
w-80
rounded-full
bg-purple-100
opacity-40
blur-3xl
"
>
</div>



</section>

);

};


export default Hero;