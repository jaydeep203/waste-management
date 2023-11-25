import Guidlines from "./components/Guidlines"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div className='text-white'>
      <Hero />
      <div className="
        bg-yellow-500
        opacity-70
        w-full
        h-[10vh]
      ">
        timepass padding
      </div>
      <Guidlines />
    </div>
  )
}
