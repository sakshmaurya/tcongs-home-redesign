import { motion } from "framer-motion";
import {
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send
} from "lucide-react";


const Contact = () => {


const points = [
  "You'll hear from us within one business day.",
  "We'll understand your goals and requirements.",
  "You'll receive clear pricing & timeline."
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
tracking-[6px]
text-cyan-400
text-lg
font-bold
"
>
Contact Us
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

Let's Build Something
<br/>

<span
className="
bg-gradient-to-r
from-cyan-400
to-blue-600
bg-clip-text
text-transparent
"
>
You'll Be Proud Of
</span>

</h2>



<p
className="
mt-6
text-gray-400
leading-8
max-w-xl
"
>

Have a project in mind? Whether you need a website,
mobile app, or digital solution, our team is ready to
turn your ideas into reality.

</p>





{/* Points */}


<div
className="
mt-8
space-y-4
"
>


{
points.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
x:-20
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*0.1
}}

className="
flex
items-center
gap-3
text-gray-300
"

>

<CheckCircle2
size={22}
className="
text-cyan-400
"
/>


<span>
{item}
</span>


</motion.div>


))

}


</div>



</motion.div>








{/* FORM */}



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
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
shadow-2xl
"

>


<form
className="
space-y-5
"
>


{/* Name */}


<div
className="
relative
"
>

<User
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
size={20}
/>


<input

type="text"

placeholder="Full Name"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
py-4
pl-12
pr-4
text-white
outline-none
focus:border-cyan-400
transition
"

 />


</div>





{/* Email */}


<div
className="
relative
"
>

<Mail
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
size={20}
/>


<input

type="email"

placeholder="Email Address"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
py-4
pl-12
pr-4
text-white
outline-none
focus:border-cyan-400
transition
"

 />


</div>






{/* Phone */}


<div
className="
relative
"
>

<Phone
className="
absolute
left-4
top-1/2
-translate-y-1/2
text-gray-400
"
size={20}
/>


<input

type="tel"

placeholder="Phone Number"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
py-4
pl-12
pr-4
text-white
outline-none
focus:border-cyan-400
transition
"

 />


</div>






{/* Message */}


<div
className="
relative
"
>


<MessageSquare

className="
absolute
left-4
top-5
text-gray-400
"

size={20}

/>


<textarea

rows="5"

placeholder="Tell us about your project"

className="
w-full
rounded-xl
border
border-white/10
bg-black/30
py-4
pl-12
pr-4
text-white
outline-none
focus:border-cyan-400
transition
"

></textarea>


</div>






{/* Verification */}


<div
className="
rounded-xl
border
border-white/10
bg-black/30
p-4
"
>


<p
className="
text-sm
text-gray-400
mb-3
"
>
Human Verification: 5 + 3 = ?
</p>


<input

type="number"

placeholder="Enter Answer"

className="
w-full
rounded-xl
border
border-white/10
bg-black/20
px-4
py-3
text-white
outline-none
focus:border-cyan-400
"

/>


</div>






{/* Button */}


<button

className="
flex
w-full
items-center
justify-center
gap-2
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
py-4
font-semibold
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:scale-105
"

>

Submit Inquiry

<Send size={18}/>

</button>




</form>






{/* Email */}


<p
className="
mt-8
text-sm
text-gray-400
"
>

Prefer email instead?

</p>


<a
href="mailto:info@tcongsinfotech.com"
className="
mt-2
block
text-cyan-400
"
>
info@tcongsinfotech.com
</a>



</motion.div>



</div>


</div>


</section>

)

}


export default Contact;