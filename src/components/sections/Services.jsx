import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Palette,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


const Services = () => {


const services = [
  {
    title: "Web & App Development",
    tag: "FOR BUSINESSES",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    description:
      "We build high-performance websites and mobile applications tailored to your business needs.",
    features: [
      "React & Next.js",
      "Node.js APIs",
      "Android & iOS Apps",
      "Responsive Design",
    ],
  },

  {
    title: "Software Development",
    tag: "CUSTOM SOLUTIONS",
    icon: Smartphone,
    color: "from-violet-500 to-purple-600",
    description:
      "Custom software solutions that automate workflows and improve productivity.",
    features: [
      "ERP Systems",
      "CRM Software",
      "Cloud Solutions",
      "Automation",
    ],
  },

  {
    title: "E-commerce Solutions",
    tag: "ONLINE SELLERS",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-500",
    description:
      "Complete online stores with secure payment gateways and inventory management.",
    features: [
      "Shopify",
      "WooCommerce",
      "Payment Gateway",
      "Order Management",
    ],
  },

  {
    title: "Digital Marketing",
    tag: "GROWTH FOCUSED",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
    description:
      "Increase your online visibility through SEO, social media, and paid advertising.",
    features: [
      "SEO",
      "Google Ads",
      "Facebook Ads",
      "Content Marketing",
    ],
  },

  {
    title: "Branding & UI/UX",
    tag: "CREATIVE DESIGN",
    icon: Palette,
    color: "from-emerald-500 to-green-600",
    description:
      "Modern branding and intuitive UI/UX design that creates memorable user experiences.",
    features: [
      "Logo Design",
      "Wireframes",
      "UI Design",
      "Brand Identity",
    ],
  },

  {
    title: "Business Growth",
    tag: "SCALING BUSINESS",
    icon: TrendingUp,
    color: "from-indigo-500 to-sky-500",
    description:
      "Data-driven strategies to help businesses grow faster and achieve long-term success.",
    features: [
      "Analytics",
      "Growth Strategy",
      "Consulting",
      "Performance Tracking",
    ],
  },
];



return (

<section
id="services"
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
      className="max-w-3xl mx-auto text-center"
    >

      <p
        className="
          uppercase
          tracking-[6px]
          text-cyan-400
          text-sm
        "
      >
        WE ARE GREAT AT
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
        Digital Solutions &
        <br/>
        Development Services
      </h2>


      <p
        className="
          mt-6
          text-gray-400
          leading-8
        "
      >
        Scalable solutions for modern businesses with
        innovative technology, creative design and
        powerful digital experiences.
      </p>


    </motion.div>





    {/* Cards */}


    <div
      className="
        mt-16
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >


      {
        services.map((service,index)=>{


          const Icon = service.icon;


          return (

          <motion.div

            key={index}


            initial={{
              opacity:0,
              y:40
            }}


            whileInView={{
              opacity:1,
              y:0
            }}


            viewport={{
              once:true
            }}


            transition={{
              delay:index*0.1
            }}


            whileHover={{
  y: -12,
  scale: 1.03,
}}


          className="
group
relative
flex
flex-col
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-7
cursor-pointer
transition-all
duration-300
min-h-[560px]

hover:-translate-y-3
hover:scale-[1.03]
hover:border-cyan-400/60
hover:shadow-[0_0_45px_rgba(34,211,238,.25)]
"
          >



            {/* Hover Glow */}

            <div
              className={`
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                ${service.color}
                blur-3xl
              `}
            />
            {/* Shine Effect */}

<div
  className="
    absolute
    -left-40
    top-0
    h-full
    w-24
    rotate-12
    bg-white/10
    blur-xl
    opacity-0
    transition-all
    duration-700
    group-hover:left-[120%]
    group-hover:opacity-100
  "
/>



            <div className="relative">


              {/* Icon */}

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  ${service.color}
                  text-white
                  shadow-lg
                  group-hover:scale-110
group-hover:rotate-6
transition-all
duration-300
                `}
              >

                <Icon size={32}/>

              </div>



              <p
                className="
                  mt-6
                  text-xs
                  uppercase
                  tracking-wider
                  text-cyan-400
                "
              >
                {service.tag}
              </p>
              <div
className="
mt-3
inline-flex
items-center
rounded-full
border
border-cyan-500/20
bg-cyan-500/10
px-3
py-1
text-xs
font-medium
text-cyan-300
"
>
Premium Solution
</div>



              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {service.title}
              </h3>



             <p
className="
mt-4
min-h-[90px]
text-gray-400
leading-7
"

>
{service.description}
</p>
<div className="mt-6 space-y-3 flex-1">

{
service.features.map((feature)=>(
  
<div
key={feature}
className="
flex
items-center
gap-3
text-sm
text-gray-300
"
>

<CheckCircle2
size={18}
className="
text-cyan-400
shrink-0
group-hover:text-white
transition-colors
duration-300
"
/>

<span>
{feature}
</span>

</div>

))

}

</div>
<button
className="
mt-auto
pt-8
flex
items-center
gap-2
text-cyan-400
font-semibold
group/btn
"
>

Learn More

<ArrowRight
  size={18}
  className="
    transition-all
    duration-300
    group-hover/btn:translate-x-2
    group-hover/btn:scale-110
  "
/>

</button>


            </div>


          </motion.div>

          )

        })

      }


    </div>


  </div>


</section>


)

}


export default Services;