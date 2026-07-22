import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Palette,
  TrendingUp
} from "lucide-react";


const Services = () => {


const services = [
{
title:"Web & App Development",
tag:"FOR BUSINESSES",
icon:<Code2 size={32}/>,
},

{
title:"Software Development",
tag:"CUSTOM SOLUTIONS",
icon:<Smartphone size={32}/>,
},

{
title:"E-commerce Solutions",
tag:"ONLINE SELLERS",
icon:<ShoppingCart size={32}/>,
},

{
title:"Digital Marketing",
tag:"GROWTH FOCUSED",
icon:<Megaphone size={32}/>,
},

{
title:"Branding & UI/UX",
tag:"CREATIVE DESIGN",
icon:<Palette size={32}/>,
},

{
title:"Business Growth",
tag:"SCALING BUSINESS",
icon:<TrendingUp size={32}/>,
}

];



return (

<section
className="
bg-[#111111]
py-20
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


{/* Heading */}

<div className="text-center">


<p
className="
text-blue-400
text-sm
uppercase
font-semibold
"
>
WE ARE GREAT AT
</p>


<h2
className="
mt-4
text-3xl
md:text-5xl
font-bold
text-white
"
>
Digital Solutions & Development Services
</h2>


<p
className="
mt-4
text-gray-400
"
>
Scalable solutions for modern businesses
</p>


</div>





{/* Cards */}

<div
className="
mt-14
grid
md:grid-cols-2
gap-5
"
>


{
services.map((service,index)=>(


<motion.div

key={index}

whileHover={{
y:-8
}}

transition={{
duration:0.3
}}

className="
group
rounded-2xl
border
border-gray-700
bg-[#171717]
p-6
cursor-pointer
hover:border-blue-500
transition
"

>


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
text-xs
text-gray-400
uppercase
"
>
{service.tag}
</p>


<h3
className="
mt-3
text-xl
md:text-2xl
font-semibold
text-white
"
>
{service.title}
</h3>


</div>




<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-white/10
text-blue-400
group-hover:bg-blue-500
group-hover:text-white
transition
"
>

{service.icon}

</div>


</div>


</motion.div>


))

}


</div>


</div>


</section>

)

}


export default Services;