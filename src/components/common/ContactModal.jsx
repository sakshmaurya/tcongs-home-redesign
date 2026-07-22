import { X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/logos/logo.svg";


const ContactModal = ({open, close}) => {


if(!open) return null;


return (

<div
className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-black/70
backdrop-blur-sm
px-4
"
>


<motion.div

initial={{
opacity:0,
scale:0.8,
y:30
}}

animate={{
opacity:1,
scale:1,
y:0
}}

exit={{
opacity:0,
scale:0.8
}}

transition={{
duration:0.3
}}

className="
relative
w-full
max-w-xl
rounded-3xl
border
border-white/10
bg-[#111]
p-8
shadow-2xl
"

>



{/* Close Button */}

<button

onClick={close}

className="
absolute
right-5
top-5
text-gray-400
hover:text-white
transition
"

>

<X size={25}/>

</button>





{/* Logo Header */}


<div
className="
flex
items-center
gap-3
mb-6
border-b
border-white/10
pb-5
"
>


<img

src={logo}

alt="Tcongs Infotech"

className="
h-10
w-auto
"

/>



<div>

<h3
className="
text-white
font-semibold
text-lg
"
>

Tcongs Infotech

</h3>


<p
className="
text-xs
text-gray-400
"
>

Digital Solutions Partner

</p>


</div>


</div>






{/* Title */}


<h2

className="
text-3xl
font-bold
text-white
"

>

Let's Talk 🚀

</h2>



<p

className="
mt-2
text-gray-400
"

>

Tell us a bit about your project and we’ll reach out shortly.

</p>






{/* Form */}


<form

className="
mt-8
space-y-5
"

>



<input

placeholder="Full Name*"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
text-white
placeholder:text-gray-500
outline-none
focus:border-cyan-500
"

/>





<input

placeholder="Email Address*"

type="email"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
text-white
placeholder:text-gray-500
outline-none
focus:border-cyan-500
"

/>





<input

placeholder="Phone Number*"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
text-white
placeholder:text-gray-500
outline-none
focus:border-cyan-500
"

/>






<textarea

placeholder="Tell us about your project*"

rows="4"

className="
w-full
rounded-xl
border
border-white/10
bg-white/5
px-5
py-4
text-white
placeholder:text-gray-500
outline-none
focus:border-cyan-500
"

/>







{/* Verification */}


<div

className="
rounded-xl
border
border-white/10
bg-white/5
p-4
text-gray-300
"

>


<p className="text-sm">

Human Verification: 8 + 8 =

</p>



<input

placeholder="Enter Sum*"

className="
mt-3
w-full
rounded-lg
bg-black
border
border-white/10
px-4
py-3
text-white
placeholder:text-gray-500
outline-none
"

/>


</div>








<button

type="submit"

className="
w-full
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
py-4
font-semibold
text-white
shadow-lg
shadow-cyan-500/20
hover:scale-105
transition
"

>

Submit Inquiry

</button>




</form>




</motion.div>


</div>


)

}


export default ContactModal;