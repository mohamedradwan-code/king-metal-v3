import { motion } from "framer-motion"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-steel text-white">
      <nav className="flex justify-between p-4 bg-black bg-opacity-60">
        <h1 className="text-gold font-bold text-xl">KING METAL v3</h1>
        <ul className="hidden md:flex gap-6">
          {["Home","About","Products","Services","Gallery","Kitchens","Contact"].map((item) => (
            <li key={item} className="hover:text-gold cursor-pointer transition">{item}</li>
          ))}
        </ul>
      </nav>
      <header className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.h2 
          whileHover={{ scale: 1.1 }}
          className="text-4xl md:text-6xl font-extrabold text-gold drop-shadow-lg"
        >
          KING METAL
        </motion.h2>
        <p className="mt-4 text-lg md:text-2xl">ملوك الألوميتال في مصر</p>
      </header>
      <footer className="p-4 bg-black bg-opacity-60 text-center text-sm">
        © 2025 KING METAL
      </footer>
    </div>
  )
}
