import { motion, useMotionValue, useSpring } from "framer-motion";


const MagneticButton = ({
  children,
  onClick,
  className=""
}) => {


const x = useMotionValue(0);
const y = useMotionValue(0);


const springX = useSpring(x,{
  stiffness:150,
  damping:15
});


const springY = useSpring(y,{
  stiffness:150,
  damping:15
});



const handleMove=(e)=>{

const rect =
e.currentTarget.getBoundingClientRect();


const mouseX =
e.clientX - rect.left - rect.width/2;


const mouseY =
e.clientY - rect.top - rect.height/2;



x.set(mouseX * 0.25);

y.set(mouseY * 0.25);

};



const reset=()=>{

x.set(0);
y.set(0);

};



return (

<motion.button

style={{

x:springX,

y:springY

}}


onMouseMove={handleMove}

onMouseLeave={reset}

onClick={onClick}


className={`
relative
overflow-hidden

transition

${className}
`}

>


<span
className="
relative
z-10
"
>
{children}
</span>


<motion.span

className="
absolute
inset-0

bg-gradient-to-r

from-cyan-400
via-blue-500
to-purple-500

opacity-0

hover:opacity-30

transition

"

/>


</motion.button>


)

};


export default MagneticButton;