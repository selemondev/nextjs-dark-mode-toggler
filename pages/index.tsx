import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };
  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return <></>
  }
  return (
    <div className='dark:bg-black dark:text-white grid place-items-center min-h-screen w-full'>
      <AnimatePresence>
        <motion.div initial={{ opacity: 2 }}
          animate={{ y: 10 }}
          exit={{ opacity: 2 }}>
        <button onClick={handleToggle} className='py-2 px-3 dark:bg-gray-800 rounded-md bg-gray-200'>
          {theme === "dark" ? <Icon icon="ph:sun" className="text-xl" /> : <Icon icon="ph:moon" className="text-xl" />}
        </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Home;