import { useState } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logos/logo.svg";


const ContactModal = ({ open, close }) => {


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  project: ""
});


  const [captcha, setCaptcha] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();


    if(captcha !== "16"){

      alert("Please enter correct verification");

      return;

    }


   alert("Thanks! We will contact you soon 🚀");

setFormData({
  name:"",
  email:"",
  phone:"",
  project:""
});

setCaptcha("");

close();

  };



return (

<AnimatePresence>

{open && (

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

exit={{opacity:0}}

className="
fixed
inset-0
z-[999]

flex
items-center
justify-center

bg-black/80

backdrop-blur-xl

px-4
"


>


<motion.div

initial={{
scale:0.9,
y:40
}}

animate={{
scale:1,
y:0
}}

exit={{
scale:0.9,
y:40
}}

transition={{
duration:0.3
}}


className="
relative

w-full
max-w-lg

max-h-[90vh]

overflow-y-auto

rounded-[32px]

border
border-white/20

bg-[#111]

p-6
sm:p-8

shadow-2xl

"

>



{/* Glow */}

<div

className="
absolute

top-0
left-1/2

h-60
w-60

-translate-x-1/2

rounded-full

bg-cyan-500/20

blur-[100px]

"

/>





{/* Close */}


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

<X/>

</button>






{/* Header */}


<div

className="
relative

flex

items-center

gap-4

"

>


<img

src={logo}

alt="Tcongs"

className="
h-14
w-14

rounded-2xl

bg-white

p-2

object-contain

"

/>



<div>

<h2

className="
text-2xl

font-bold

text-white

"

>

Tcongs Infotech

</h2>


<p

className="
text-sm

text-cyan-400

font-medium

"

>

Digital Solutions Partner

</p>


</div>


</div>





<p

className="
mt-5

text-gray-400

leading-7

"

>

Tell us a bit about your project and we’ll reach out shortly.

</p>






<form

onSubmit={handleSubmit}

className="
mt-6

space-y-4

"

>




<input

required

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Full Name*"

className="
w-full

rounded-2xl

border
border-white/20

bg-white/10

px-5

py-4

text-white

outline-none

placeholder:text-gray-400

focus:border-cyan-400

transition

"

/>





<input

required

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Email Address*"

className="
w-full

rounded-2xl

border
border-white/20

bg-white/10

px-5

py-4

text-white

outline-none

placeholder:text-gray-400

focus:border-cyan-400

transition

"

/>




<div className="flex gap-3">

<select
name="countryCode"
value={formData.countryCode}
onChange={handleChange}
className="
w-28
rounded-2xl
border
border-white/20
bg-white/10
px-3
py-4
text-white
outline-none
focus:border-cyan-400
transition
"
>

<option value="+91" className="text-black">
🇮🇳 +91
</option>

<option value="+1" className="text-black">
🇺🇸 +1
</option>

<option value="+44" className="text-black">
🇬🇧 +44
</option>

<option value="+61" className="text-black">
🇦🇺 +61
</option>

<option value="+971" className="text-black">
🇦🇪 +971
</option>

</select>


<input

required

type="tel"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone Number*"

className="
flex-1
rounded-2xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-gray-400
focus:border-cyan-400
transition
"

/>

</div>





<textarea

required

name="project"

value={formData.project}

onChange={handleChange}

rows="4"

placeholder="Tell us about your project*"

className="
w-full

rounded-2xl

border
border-white/20

bg-white/10

px-5

py-4

text-white

outline-none

placeholder:text-gray-400

focus:border-cyan-400

transition

resize-none

"

/>






<div

className="
rounded-2xl

border
border-white/20

bg-white/5

p-4

"

>


<p

className="
text-sm

text-gray-300

"

>

Human Verification:

<span

className="
ml-1

font-bold

text-cyan-400

"

>

8 + 8 =

</span>


</p>



<input

required

value={captcha}

onChange={(e)=>setCaptcha(e.target.value)}

placeholder="Enter Sum*"

className="
mt-3

w-full

rounded-2xl

border
border-white/20

bg-white/10

px-5

py-4

text-white

outline-none

placeholder:text-gray-400

focus:border-cyan-400

transition

"

/>


</div>







<button

type="submit"

className="
flex

w-full

items-center

justify-center

gap-2

rounded-2xl

bg-gradient-to-r

from-cyan-500

via-blue-500

to-purple-500

py-4

font-semibold

text-white

shadow-lg

shadow-cyan-500/30

transition

hover:scale-[1.02]

"

>

<Send size={18}/>

Submit Inquiry

</button>





</form>





</motion.div>


</motion.div>

)}

</AnimatePresence>


);

};


export default ContactModal;