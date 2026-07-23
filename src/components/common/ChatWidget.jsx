import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  Circle,
  Sparkles,
  Phone,
  Briefcase,
  Info,
  DollarSign,
} from "lucide-react";


import logo from "../../assets/logos/logo.svg";

const quickActions = [
  {
    icon: <Sparkles size={16} />,
    title: "Our Services",
  },
  {
    icon: <Phone size={16} />,
    title: "Contact Details",
  },
  {
    icon: <Info size={16} />,
    title: "About Us",
  },
  {
    icon: <Briefcase size={16} />,
    title: "Careers",
  },
  {
    icon: <DollarSign size={16} />,
    title: "Get Quote",
  },
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const chatRef = useRef(null);

  // ESC Close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Click Outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, [open]);

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-5
        right-5
        sm:bottom-8
        sm:right-8
        z-[999]

        h-14
        w-14

        sm:h-16
        sm:w-16

        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600

        shadow-xl
        shadow-cyan-500/40

        flex
        items-center
        justify-center

        text-white
        "
      >
        {open ? (
          <X size={28} />
        ) : (
          <MessageCircle size={28} />
        )}
      </motion.button>

      <AnimatePresence>

        {open && (

          <motion.div

            ref={chatRef}

            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}

            transition={{
              duration: 0.25,
            }}

            className="
            fixed

            z-[999]

            bottom-24

            left-4
            right-4

            sm:left-auto
            sm:right-6

            w-auto
            max-w-[390px]

            rounded-3xl

            border
            border-white/10

            bg-[#111]

            overflow-hidden

            shadow-[0_20px_60px_rgba(0,0,0,.55)]
            "

          >

            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-between

              bg-gradient-to-r
              from-cyan-600
              to-blue-600

              px-5
              py-4
              "
            >

              <div
                className="
                flex
                items-center
                gap-3
                "
              >

                <img
                  src={logo}
                  alt="Tcongs"
                  className="
                  h-10
                  w-10
                  rounded-full
                  bg-white
                  p-1
                  object-contain
                  "
                />

                <div>

                  <h3
                    className="
                    text-white
                    font-semibold
                    "
                  >
                    Tcongs Assistant
                  </h3>

                  <div
                    className="
                    flex
                    items-center
                    gap-1

                    text-xs
                    text-white/90
                    "
                  >

                    <Circle
                      size={8}
                      fill="#22c55e"
                      className="text-green-400"
                    />

                    Online

                  </div>

                </div>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                text-white
                hover:rotate-90
                transition
                "
              >

                <X />

              </button>

            </div>
                        {/* Chat Body */}

            <div
              className="
              h-[360px]
              sm:h-[430px]
              overflow-y-auto
              px-5
              py-5
              space-y-5
              bg-[#111]
              "
            >
              {/* Welcome Message */}

              <div className="flex items-start gap-3">

                <div
                  className="
                  h-10
                  w-10
                  rounded-full
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  shrink-0
                  "
                >
                  <Bot
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <div
                  className="
                  max-w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  "
                >
                  <p className="text-sm text-gray-300">
                    👋 Hi! Welcome to
                  </p>

                  <h4 className="mt-1 text-white font-semibold">
                    Tcongs Infotech
                  </h4>

                  <p className="mt-2 text-sm text-gray-400 leading-6">
                    We build high-quality websites, mobile apps,
                    AI solutions and digital products to help
                    businesses grow faster.
                  </p>
                </div>

              </div>

              {/* Quick Actions */}

              <div className="space-y-3">

                {quickActions.map((item, index) => (

                  <button
                    key={index}
                    className="
                    w-full
                    flex
                    items-center
                    gap-3

                    rounded-2xl
                    border
                    border-white/10

                    bg-white/5

                    px-4
                    py-3

                    text-left

                    hover:bg-cyan-500/20
                    hover:border-cyan-400

                    transition
                    "
                  >

                    <div
                      className="
                      h-9
                      w-9
                      rounded-xl

                      bg-cyan-500/20

                      flex
                      items-center
                      justify-center

                      text-cyan-400
                      "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
                      text-sm
                      text-gray-200
                      "
                    >
                      {item.title}
                    </span>

                  </button>

                ))}

              </div>

            </div>

            {/* Footer */}

            <div
              className="
              border-t
              border-white/10

              p-4

              bg-[#0f0f0f]
              "
            >

              <div className="flex gap-2">

                <input
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                  placeholder="Type your message..."
                  className="
                  flex-1

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  px-5
                  py-3

                  text-sm
                  text-white

                  outline-none

                  placeholder:text-gray-500

                  focus:border-cyan-500
                  "
                />

                <button
                  className="
                  h-12
                  w-12

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600

                  flex
                  items-center
                  justify-center

                  text-white

                  hover:scale-105

                  transition
                  "
                >
                  <Send size={18} />
                </button>

              </div>

                        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;