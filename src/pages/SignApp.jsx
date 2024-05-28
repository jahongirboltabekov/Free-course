import React from 'react'
import sarah from '../assets/sarah.svg'
import strelka from '../assets/strelka_sing.svg'
import strelka2 from '../assets/strelka_sing2.svg'
import google from '../assets/google.svg'
import vector from '../assets/vector.svg'
import { NavLink } from 'react-router-dom'

function SignApp() {
  return (
        <div className="container mx-auto">
            <div className=" flex gap-[100px] mb-[150px] mt-[100px] items-center">
                <div className="">
                    <div className="mb-[80px]">
                        <h1 className='font-sans font-[500] text-[38px] leading-[57px]'>Students Testimonials</h1>
                        <p className='font-sans font-[400] text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    <div className="rounded-[12px] bg-white mb-[30px]">
                            <p className='p-[50px] border-b font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d]'>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                            <div className=" flex justify-between py-[30px] px-[50px] bg-[#fcfcfd] rounded-b-[12px]">
                                <div className="flex items-center gap-[15px]">
                                    <img src={sarah} alt="" />
                                    <p className='font-sans font-[600] text-[18px] leading-[27px]'>Sarah L</p>
                                </div>
                                <button className='font-sans font-[500] text-[18px] leading-[27px] py-[18px] px-[24px] bg-[#f7f7f8] rounded-[8px] border'>Read More</button>
                            </div>
                    </div>
                    <div className=" flex w-full justify-end gap-[15px]">
                        <button><img src={strelka} alt="" /></button>
                        <button><img src={strelka2} alt="" /></button>
                    </div>
                </div>
                <div className=" bg-white p-[50px] rounded-[12px] flex flex-col gap-[50px] w-[1300px]">
                    <div className="w-full flex flex-col items-center">
                        <h1 className='font-sans font-[600] text-[48px] leading-[60.72px]'>Sign Up</h1>
                        <p className='font-sans font-[400] text-[18px] leading-[22.77px] text-center'>Create an account to unlock exclusive features.</p>
                    </div>
                    <div className=" flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[24px]">
                            <div className=" flex flex-col gap-[14px]">
                                <p className='font-sans font-[500] text-[18px] leading-[27px]'>Full Name</p>
                                <input className=' font-sans font-[400] text-[18px] leading-[27px] p-[24px] bg-[#fcfcfd] border rounded-[10px] w-full' type="text" placeholder='Enter your Name' />
                            </div>
                            <div className=" flex flex-col gap-[14px]">
                                <p className='font-sans font-[500] text-[18px] leading-[27px]'>Email</p>
                                <input className=' font-sans font-[400] text-[18px] leading-[27px] p-[24px] bg-[#fcfcfd] border rounded-[10px] w-full' type="text" placeholder='Enter your Email' />
                            </div>
                            <div className=" flex flex-col gap-[14px]">
                                <p className='font-sans font-[500] text-[18px] leading-[27px]'>Password</p>
                                <input className=' font-sans font-[400] text-[18px] leading-[27px] p-[24px] bg-[#fcfcfd] border rounded-[10px] w-full' type="text" placeholder='Enter your Password' />
                            </div>
                            <div className="flex gap-[10px]">
                                <input className='w-[30px] h-[30px] rounded-[4px] border bg-[#f7f7f8]' type="checkbox" />
                                <p className='font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]'>I agree with <span className='border-b-[3px]'>Terms of Use</span> and <span className='border-b-[3px]'>Privacy Policy</span></p>
                            </div>
                            <button className='py-[18px] px-[20px] bg-[#ff9500] rounded-[10px] text-white font-sans font-[500] text-[18px] leading-[27px] '>Sing Up</button>
                        </div>
                        <div className="flex items-center gap-[12px]">
                            <hr className='bg-[#e4e4e7] w-full' />
                            <p className='font-[Inter] text-[#98989a] font-[400] text-[18px] leading-[27px]'>OR</p>
                            <hr className='bg-[#e4e4e7] w-full' />
                        </div>
                        <button className='py-[20px] px-[24px] border rounded-[10px] flex items-center gap-[14px] justify-center font-sans font-[500] text-[18px] leading-[27px] bg-[#f7f7f8]'><img src={google} alt="" />Sign Up with Google</button>
                        <div className="flex justify-center items-center gap-[6px]">
                            <p className=' font-sans font-[500] text-[18px] leading-[27px]'>Already have an account? <span className='border-b border-[#262626]'><NavLink to={'/login'}>Login</NavLink></span></p>
                            <img src={vector} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignApp