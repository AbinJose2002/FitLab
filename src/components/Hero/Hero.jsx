import './Hero.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();
  const handleclick = ()=>{
    return(
      navigate('/labs')
    )
  }
  return (
    <div className='hero-sec'>
      <p className='heroP'>Get Started Today</p>
      <h1 className='heroHead'>FIT-Lab: A Virtual Learning Environment</h1>
      <button className='heroBtn' onClick={handleclick}>Visit Our Labs</button>
    </div>
  )
}

export default Hero
