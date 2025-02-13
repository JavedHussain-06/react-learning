import {motion, useMotionValue, useSpring} from "motion/react"
const RangeSlider = () => {
    // const scale = useMotionValue(1)
    const scale = useSpring(1)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value))
    }
  return (
    <div>
        <motion.button className="box rounded-full mb-[2em]" style={{scale}}/>
        <div className="mt-[2rem] ">
            <input id="rangeInput" type="range" min={0.5} max={2} defaultValue={1} 
            step={0.1} title="Range Slider" onChange={handleChange}/>
        </div>
    </div>
  )
}

export default RangeSlider