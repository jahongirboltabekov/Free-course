import message from '../../assets/message.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'
import facebook from '../../assets/facebook.svg'
import twiter from '../../assets/twiter.svg'
import linkedin from '../../assets/linkedin.svg'

function Contact_head() {
  return (
    <div className='flex flex-col gap-[100px] mt-[109px] mb-[150px]'>
        <div className=" flex w-full justify-between items-center pb-[50px] border-b">
            <h1 className='font-sans font-[600] text-[48px] leading-[72px]'>Contact Us</h1>
            <p className='font-sans font-[400] text-[18px] leading-[27px] w-[748px] '>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
        </div>
        <div className=" flex rounded-[12px] bg-white">
            <div className=" flex flex-col w-full p-[80px] gap-[50px] border-r">
                <div className="flex flex-col gap-[30px] w-full">
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col w-full gap-[16px]">
                            <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>First Name</h4>
                            <input className=' font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter First Name' />
                        </div>
                        <div className="flex flex-col w-full gap-[16px]">
                            <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>Last Name</h4>
                            <input className=' font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter Last Name' />
                        </div>
                    </div>
                    <div className="flex gap-[30px]">
                        <div className="flex flex-col w-full gap-[16px]">
                            <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>Email</h4>
                            <input className=' font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter your Email' />
                        </div>
                        <div className="flex flex-col w-full gap-[16px]">
                            <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>Phone</h4>
                            <input className=' font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter Phone Number' />
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-[16px]">
                        <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>Subject</h4>
                        <input className=' font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter your Subject' />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-[16px] h-full">
                    <h4 className='font-sans font-[500] text-[18px] leading-[27px]'>Message</h4>
                    <input className=' h-full font-sans font-[400] text-[18px] leading-[20px] text-[#656567] bg-[#fcfcfd] border rounded-[8px] py-[24px] px-[20px]' type="text" placeholder='Enter your Message here...' />
                </div>
                <button className=' mx-auto w-[220px] py-[18px] px-[24px] bg-[#ff9500] rounded-[10px] text-white font-sans font-[500] text-[18px] leading-[27px]'>Send Your Message</button>
            </div>
            <div className="p-[80px] flex flex-col gap-[50px]">
                <div className="flex flex-col gap-[20px] p-[30px] rounded-[8px] border bg-[#fcfcfd] items-center">
                    <img className='w-[52px] h-[52px]' src={message} alt="" />
                    <p className='font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d] '>support@skillbridge.com</p>
                </div>
                <div className="flex flex-col gap-[20px] p-[30px] rounded-[8px] border bg-[#fcfcfd] items-center">
                    <img className='w-[52px] h-[52px]' src={phone} alt="" />
                    <p className='font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d] '>support@skillbridge.com</p>
                </div>
                <div className="flex flex-col gap-[20px] p-[30px] rounded-[8px] border bg-[#fcfcfd] items-center">
                    <img className='w-[52px] h-[52px]' src={location} alt="" />
                    <p className='font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d] '>support@skillbridge.com</p>
                </div>
                <div className="flex flex-col gap-[20px] p-[30px] rounded-[8px] border bg-[#fcfcfd] items-center">
                    <div className=" flex gap-[14px]">
                        <img className='w-[52px] h-[52px]' src={facebook} alt="" />
                        <img className='w-[52px] h-[52px]' src={twiter} alt="" />
                        <img className='w-[52px] h-[52px]' src={linkedin} alt="" />
                    </div>
                    <p className='font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d] '>support@skillbridge.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_head