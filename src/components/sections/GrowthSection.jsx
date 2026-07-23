import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Bot,
  BarChart3,
  Globe2,
  TrendingUp
} from "lucide-react";


const GrowthSection = ({openContact}) => {


const growthSteps = [
  {
    title:"BUILD",
    subtitle:"Create Digital Products",
    icon:Code2,
    items:[
      "Web Applications",
      "Mobile Apps",
      "Custom Software"
    ],
    color:"from-cyan-500 to-blue-600"
  },


  {
    title:"SCALE",
    subtitle:"Grow With Technology",
    icon:Cloud,
    items:[
      "Cloud Solutions",
      "AI Automation",
      "Smart Systems"
    ],
    color:"from-purple-500 to-indigo-600"
  },


  {
    title:"GROW",
    subtitle:"Expand Your Business",
    icon:TrendingUp,
    items:[
      "Analytics",
      "Global Reach",
      "Business Growth"
    ],
    color:"from-emerald-500 to-green-600"
  }

];



return (

<section
className="
relative
overflow-hidden
bg-black
py-24
"
>


{/* Background Glow */}

<div
className="
absolute
left-1/2
top-1/2
h-[600px]
w-[600px]
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
max-w-7xl
mx-auto
px-6
"
>


<div
className="
grid
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
duration:0.7
}}

>


<p
className="
uppercase
tracking-[5px]
text-cyan-400
text-sm
"
>
Business Growth
</p>



<h2
className="
mt-5
text-4xl
md:text-6xl
font-bold
text-white
leading-tight
"
>

Build.
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
Scale.
</span>

<br/>

Grow Your Digital Business.

</h2>



<p
className="
mt-6
text-gray-400
leading-8
max-w-xl
"
>

We create powerful digital solutions that help businesses
build innovative products, scale with modern technology,
and achieve sustainable growth globally.

</p>



<button
  onClick={openContact}
  className="
    mt-8
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
    hover:scale-105
    transition
  "
>
  Start Your Project 🚀
</button>



</motion.div>







{/* RIGHT DASHBOARD */}



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
duration:0.7
}}

className="
relative
"
>



<div
className="
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
shadow-2xl
"
>



{/* Growth Header */}


<div
className="
flex
items-center
justify-between
"
>

<div>

<p
className="
text-gray-400
text-sm
"
>
Business Growth
</p>


<h3
className="
mt-2
text-3xl
font-bold
text-white
"
>
Digital Solutions
</h3>


</div>



<div
className="
h-14
w-14
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-600
flex
items-center
justify-center
"
>

<BarChart3
className="text-white"
/>

</div>


</div>





{/* Graph */}


<div
className="
mt-8
h-32
rounded-2xl
bg-black/40
border
border-white/10
p-5
flex
items-end
gap-3
"
>


{
[40,60,45,80,70,100].map((height,index)=>(

<motion.div

key={index}

initial={{
height:0
}}

whileInView={{
height:`${height}%`
}}

transition={{
delay:index*0.1
}}

className="
flex-1
rounded-t-xl
bg-gradient-to-t
from-cyan-500
to-blue-500
"

/>

))

}


</div>






{/* Build Scale Grow Cards */}



<div
className="
mt-8
grid
grid-cols-3
gap-3
"
>


{
growthSteps.map((step,index)=>{


const Icon = step.icon;


return(

<motion.div

key={index}

whileHover={{
y:-8
}}

className="
rounded-2xl
border
border-white/10
bg-black/30
p-4
"
>


<div
className={`
h-10
w-10
rounded-xl
bg-gradient-to-r
${step.color}
flex
items-center
justify-center
`}
>

<Icon
size={20}
className="text-white"
/>

</div>



<h4
className="
mt-4
font-bold
text-white
"
>

{step.title}

</h4>


<p
className="
text-xs
text-gray-400
mt-1
"
>
{step.subtitle}
</p>



</motion.div>

)

})

}


</div>



</div>



</motion.div>


</div>


</div>


</section>

)

}


export default GrowthSection;