import logo from '../../assets/logo.svg'
import message from '../../assets/message.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'
import facebook from '../../assets/facebook.svg'
import twiter from '../../assets/twiter.svg'
import linkedin from '../../assets/linkedin.svg'


const Footer = () => {
  return (
    <div className="bg-white pt-[100px] pb-[30px] gap-[50px]">
      <div className="container mx-auto">
        <div className="max-lg:grid-cols-1 gap-[50px] grid grid-cols-2 place-content-between">
          <div className="flex flex-col gap-[40px] max-sm:items-center">
            <img className='w-[54px] h-[54px]' src={logo} alt="" />
            <ul className='flex flex-col gap-[20px]'> 
              <li className='flex items-center gap-[6px]'><img src={message} alt="" /><a href="">hello@skillbridge.com</a></li>
              <li className='flex items-center gap-[6px]'><img src={phone} alt="" />+91 91813 23 2309</li>
              <li className='flex items-center gap-[6px]'><img src={location} alt="" /><a href="">Somewhere in the World</a></li>
            </ul>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-center gap-[100px] justify-between">
            <div className=" flex flex-col gap-[14px]">
              <p className='font-sans font-[600] text-[20px] leading-30px'>Home</p>
              <ul className=' flex flex-col gap-[8px]'>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Benefits</li>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Our Courses</li>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Our Testimonials</li>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Our FAQ</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-[14px]">
              <p className='font-sans font-[600] text-[20px] leading-30px'>About</p>
              <ul className=' flex flex-col gap-[8px]'>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Company</li>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Achievements</li>
                <li className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>Our Goals</li>
              </ul>
            </div>
            <div className=" flex flex-col gap-[14px]">
              <p className='font-sans font-[600] text-[20px] leading-30px'>Social Media</p>
              <ul className=' flex gap-[8px]'>
                <li className=''><img src={facebook} alt="" /></li>
                <li className=''><img src={twiter} alt="" /></li>
                <li className=''><img src={linkedin} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='pt-[50px] border-t mt-[50px]'>
          <p className='text-center font-sans font-[400] text-[18px] leading-[27px] text-[#656567]'>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </div>
    </div>

  )
}

export default Footer