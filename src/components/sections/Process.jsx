import { useState } from "react";
import { motion } from "framer-motion";

import {
  Search,
  Lightbulb,
  Palette,
  Code2,
  Bug,
  Rocket
} from "lucide-react";


import discoveryImg from "../../assets/images/process.jpg";
import strategyImg from "../../assets/images/process.jpg";
import designImg from "../../assets/images/process.jpg";
import developmentImg from "../../assets/images/process.jpg";
import testingImg from "../../assets/images/process.jpg";
import launchImg from "../../assets/images/process.jpg";



const leftProcess = [

{
icon:Search,
number:"01",
title:"Discovery",
desc:"Understanding your business goals, audience and requirements.",
image:discoveryImg
},


{
icon:Lightbulb,
number:"02",
title:"Strategy",
desc:"Creating the right roadmap and technology planning.",
image:strategyImg
},


{
icon:Palette,
number:"03",
title:"Design",
desc:"Designing modern UI/UX experiences for users.",
image:designImg
}

];





const rightProcess = [

{
icon:Code2,
number:"04",
title:"Development",
desc:"Building scalable websites and applications.",
image:developmentImg
},


{
icon:Bug,
number:"05",
title:"Testing",
desc:"Checking quality, performance and security.",
image:testingImg
},


{
icon:Rocket,
number:"06",
title:"Launch",
desc:"Deploying products and helping business growth.",
image:launchImg
}

];







const ProcessCard = ({
item,
setActiveImage,
activeImage
})=>{


const Icon=item.icon;


return(


<motion.div


whileHover={{
y:-8
}}


onClick={()=>setActiveImage(item.image)}



className={`
cursor-pointer
group
relative
rounded-3xl
border
backdrop-blur-xl
p-6
transition

${
activeImage===item.image
?
"border-cyan-400 bg-white/10"
:
"border-white/10 bg-white/5"
}

`}


>



<div

className="
absolute
right-5
top-3
text-5xl
font-bold
text-white/5
"

>

{item.number}

</div>




<div

className="
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-cyan-400
to-blue-600
flex
items-center
justify-center
text-white
"

>

<Icon size={24}/>

</div>





<h3

className="
mt-5
text-xl
font-bold
text-white
"

>

{item.title}

</h3>




<p

className="
mt-3
text-sm
leading-6
text-gray-400
"

>

{item.desc}

</p>





<div

className="
mt-5
h-[2px]
w-0
bg-cyan-400
group-hover:w-full
transition-all
duration-500
"

>

</div>



</motion.div>


)

}
const Process = ()=>{


const allProcess=[
...leftProcess,
...rightProcess
];


const [activeImage,setActiveImage]=useState(
allProcess[0].image
);



return(


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
-translate-x-1/2
-translate-y-1/2
h-[500px]
w-[500px]
rounded-full
bg-cyan-500/20
blur-[120px]
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



{/* Heading */}


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



className="
text-center
max-w-3xl
mx-auto
"


>


<p

className="
text-sm
uppercase
tracking-[5px]
text-cyan-400
"

>

Our Process

</p>



<h2

className="
mt-5
text-4xl
sm:text-5xl
font-bold
text-white
"

>

From Idea To
<br/>
Digital Solution

</h2>




<p

className="
mt-5
text-gray-400
"

>

A simple process that transforms ideas into powerful digital products.

</p>



</motion.div>







{/* Cards + Image */}



<div


className="
mt-16
grid
grid-cols-1
lg:grid-cols-3
gap-8
items-center
"


>



{/* LEFT SIDE */}



<div

className="
space-y-6
"

>


{

leftProcess.map((item,index)=>(


<motion.div


key={index}


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
delay:index*0.2
}}

>


<ProcessCard

item={item}

setActiveImage={setActiveImage}

activeImage={activeImage}

/>



</motion.div>


))


}



</div>







{/* CENTER IMAGE */}



<motion.div


key={activeImage}


initial={{
opacity:0,
scale:0.8
}}


animate={{
opacity:1,
scale:1
}}


transition={{
duration:0.5
}}



className="
flex
justify-center
"

>


<div

className="
relative
"

>


<div

className="
absolute
inset-0
bg-cyan-400/30
blur-3xl
rounded-full
"

/>



<img


src={activeImage}


alt="process"


className="
relative
w-[320px]
sm:w-[380px]
rounded-3xl
border
border-white/10
shadow-2xl
"

/>



</div>


</motion.div>







{/* RIGHT SIDE */}



<div

className="
space-y-6
"

>


{

rightProcess.map((item,index)=>(


<motion.div


key={index}


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
delay:index*0.2
}}


>


<ProcessCard


item={item}

setActiveImage={setActiveImage}

activeImage={activeImage}


/>


</motion.div>


))


}



</div>





</div>



</div>


</section>



)


}



export default Process;