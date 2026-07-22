import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "../../assets/logos/logo.svg";


const Footer = () => {


const companyLinks = [
"Home",
"Company",
"Solutions",
"Contact"
];


const services = [
"Web & App Development",
"Software Development",
"E-commerce Solutions",
"Digital Marketing",
"Branding & UI/UX",
"Business Growth"
];


const growth = [
"Launch on Top Marketplaces",
"Build High-Converting Stores",
"Optimize Listings for Sales",
"Run Profitable Ads",
"Grow Globally"
];



return (

<footer
className="
relative
overflow-hidden
bg-black
pt-20
pb-8
"
>


{/* Background Glow */}

<div
className="
absolute
top-0
left-1/2
h-[500px]
w-[500px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[150px]
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
sm:grid-cols-2
lg:grid-cols-4
gap-10
"
>



{/* About */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6
}}

>


<img
src={logo}
className="h-10 mb-6"
/>



<p
className="
text-gray-400
text-sm
leading-7
"
>

Empowering global brands with custom web development,
e-commerce solutions and digital growth strategies.
We turn ideas into scalable digital products.

</p>



<a
href="#"
className="
mt-6
flex
h-10
w-10
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
text-gray-300
hover:bg-cyan-500
hover:text-white
transition
"
>

<svg
xmlns="http://www.w3.org/2000/svg"
width="18"
height="18"
viewBox="0 0 24 24"
fill="currentColor"
>
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452z"/>
</svg>

</a>



</motion.div>





{/* Company */}


<div>


<h3
className="
text-white
font-semibold
mb-6
"
>
Company
</h3>


<ul
className="
space-y-4
"
>

{
companyLinks.map((item,index)=>(

<li key={index}>

<a
className="
text-gray-400
text-sm
hover:text-cyan-400
transition
flex
items-center
gap-2
"
>

{item}

<ArrowUpRight
size={14}
className="
opacity-0
group-hover:opacity-100
"
/>

</a>


</li>

))

}

</ul>


</div>





{/* Services */}


<div>


<h3
className="
text-white
font-semibold
mb-6
"
>
Specialized Services
</h3>


<ul
className="
space-y-4
"
>


{
services.map((item,index)=>(

<li
key={index}
className="
text-sm
text-gray-400
hover:text-cyan-400
cursor-pointer
transition
"
>

{item}

</li>

))

}


</ul>


</div>






{/* Growth */}


<div>


<h3
className="
text-white
font-semibold
mb-6
"
>
Scale Your Online Business
</h3>


<ul
className="
space-y-4
"
>


{
growth.map((item,index)=>(


<li

key={index}

className="
text-sm
text-gray-400
hover:text-cyan-400
transition
"

>

{item}

</li>


))

}


</ul>


</div>




</div>







{/* Bottom */}


<div
className="
mt-14
border-t
border-white/10
pt-6
flex
flex-col
md:flex-row
items-center
justify-between
gap-4
"
>


<p
className="
text-sm
text-gray-400
"
>

<strong className="text-white">
Mumbai Office:
</strong>

Based in Mumbai, India. Serving clients worldwide.

</p>



<p
className="
text-xs
text-gray-500
"
>

© 2026 Tcongs Infotech. All Rights Reserved.

</p>


</div>




</div>


</footer>


)

}


export default Footer;