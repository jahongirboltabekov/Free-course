import strelka from '../../assets/strelka.svg'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import burger from '../../assets/burger.svg'
import { useEffect, useState } from 'react'
import x from '../../assets/X.svg'

function Hero() {
  const [openNav,setOpenNav] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    console.log(openNav);
  }, [openNav])


 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639) {
        setOpenNav(false);
      }
    };

    // Check initial window width on mount
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div>
      <div className=' flex p-[14px] max-sm:p-[8px] text-[#fff] justify-center items-center gap-[23px] bg-[#ff9000]'>
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <img src={strelka} alt="" />
      </div>
      <div className="container mx-auto">
        <nav className='py-[22px] flex items-center gap-auto justify-between'>
          <div className='flex md:gap-[30px] gap-[50px] items-center'>
            <img src={logo} alt="" />
            <ul className='flex gap-[26px] md:gap-[16px] max-sm:hidden text-lg font-sans'>
              <li className='max-[784px]:text-[10px]'>< NavLink to={'/'}>Home</NavLink></li>
              <li className='max-[784px]:text-[10px]'>< NavLink to={'/courses'}>Courses</NavLink></li>
              <li className='max-[784px]:text-[10px]'>< NavLink to={'/about'}>About Us</NavLink></li>
              <li className='max-[784px]:text-[10px]'>< NavLink to={'/pricing'}>Pricing</NavLink></li>
              <li className='max-[784px]:text-[10px]'>< NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
            <ul style={openNav ? {display:"flex"} : {display:"none"}} className='ul_2 flex-col w-full top-14  justify-between gap-[35px] items-center absolute  text-black bg-white  font-sans'>
              <li className=''>< NavLink className={''} to={'/'}>Home</NavLink></li>
              <li className=''>< NavLink className={''} to={'/courses'}>Courses</NavLink></li>
              <li className=''>< NavLink className={''} to={'/about'}>About Us</NavLink></li>
              <li className=''>< NavLink className={''} to={'/pricing'}>Pricing</NavLink></li>
              <li className=''>< NavLink className={''} to={'/contact'}>Contact</NavLink></li>
              <button onClick={() => setOpenNav(!openNav)}>
                <img src={x} alt="" />
              </button>
            </ul>
          </div>
          <div className='flex gap-[30px] max-[784px]:gap-[10px]'>
            <button className='max-[784px]:text-[14px] text-lg font-sans'><NavLink to={'/signup'}>Sign Up</NavLink></button>
            <NavLink to={'/login'}><button className='max-[784px]:text-[14px] max-[784px]:py-[7px] max-[784px]:px-[17px] text-[#fff] bg-[#ff9500] py-[14px] px-[34px] rounded-lg text-lg font-sans'>Login</button></NavLink>
          </div>
          <button className='max-sm:block hidden' onClick={() => setOpenNav(!openNav)}>
            <img className='max-sm:block hidden' src={burger} alt="" />
          </button>
        </nav>
      </div>
      
    </div>
  )
}

export default Hero

