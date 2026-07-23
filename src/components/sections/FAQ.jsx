import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";


const FAQ = ({ openContact }) => {


const [active,setActive] = useState(0);



const faqs = [

{
question:"What services does Tcongs Infotech offer?",
answer:
"We offer web development, mobile app development, custom software solutions, eCommerce management, UI/UX design, and digital marketing services to help businesses grow online."
},


{
question:"How long does it take to build a website or app?",
answer:
"The timeline depends on project requirements, features, design complexity, and development scope."
},


{
question:"Do you work with international clients?",
answer:
"We collaborate with businesses remotely and provide communication support throughout the project lifecycle."
},


{
question:"Can you help grow my business after development?",
answer:
"support businesses with optimization, analytics, and digital improvement strategies."},


{
question:"What makes Tcongs Infotech different?",
answer:
"We focus on complete business solutions — from idea planning and development to launch and growth."
},


{
question:"How can I get started?",
answer:
"Simply contact us, share your requirements, and our team will guide you with the best solution for your business."
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


{/* Glow */}

<div
className="
absolute
left-1/2
top-1/2
h-[500px]
w-[500px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-cyan-500/10
blur-[150px]
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
gap-12
"
>


{/* LEFT */}


<motion.div

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<p
className="
uppercase
tracking-[6px]
text-cyan-400
text-lg
md:text-xl
font-bold
"
>
Frequently Asked Questions
</p>



<h2
className="
mt-5
text-4xl
md:text-5xl
font-bold
text-white
leading-tight
"
>

Questions?
<br/>

We've Got
<span
className="
text-cyan-400
"
>
 Answers
</span>

</h2>



<p
className="
mt-6
text-gray-400
leading-8
"
>

Tcongs Infotech helps businesses grow with web development, mobile apps, eCommerce solutions, and digital marketing. Here are answers to common questions from our clients.

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
    hover:scale-105
    transition
  "
>
  Book a Free Call 🚀
</button>



</motion.div>





{/* RIGHT FAQ */}



<motion.div

initial={{
opacity:0,
x:30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
space-y-4
"

>


{
faqs.map((faq,index)=>(


<div

key={index}

className={`
rounded-2xl
border
transition
overflow-hidden

${
active===index
?
"border-cyan-400 bg-white/10 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
:
"border-white/10 bg-white/5"
}

`}

>


<button

onClick={()=>setActive(
active===index ? -1 : index
)}

className="
w-full
flex
items-center
justify-between
p-6
text-left
"

>


<h3
className="
text-white
font-semibold
text-sm
md:text-base
"
>

{faq.question}

</h3>



<div
className={`
h-8
w-8
rounded-full
flex
items-center
justify-center
transition

${
active===index
?
"bg-cyan-500 text-white rotate-45"
:
"bg-white/10 text-gray-300"
}

`}
>

<Plus size={18}/>

</div>


</button>




<AnimatePresence>


{
active===index && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

transition={{
duration:0.3
}}

>


<p
className="
px-6
pb-6
text-gray-400
text-sm
leading-7
"
>

{faq.answer}

</p>


</motion.div>

)

}


</AnimatePresence>


</div>


))

}



</motion.div>


</div>


</div>


</section>


)

}


export default FAQ;