import React from 'react'
import galchka from '../../assets/galchka.svg'
import X from '../../assets/X.svg'
import x_btn from '../../assets/x_btn.svg'
import strelka_btn from '../../assets/strelka_btn.svg'
import { useState } from 'react'
import plus_btn from '../../assets/plus_btn.svg'

function Prising_head() {
  const [openCard, setOpenCard] = useState(false)
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)
  const [openCard4, setOpenCard4] = useState(false)
  const [openCard5, setOpenCard5] = useState(false)
  return (
    <div className='container mx-auto'>
        {/* OUR_PRICING__________________________________________________________________________________________________________________________________________________ */}
      
      <div className="mb-[150px]">
        <div  className="flex flex-col justify-between items-center mb-[50px] mt-[109px]">
            <div className="flex w-full justify-between pb-[50px] mb-[100px] items-center border-b">
              <h1 className="font-sans font-[600] text-[48px]">Our Pricings</h1>
              <p className=" text-[#59595a] leading-[27px] text-18px w-[748px] font-sans font-[400]">Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
            </div>
            <div className="p-[12px] bg-white rounded-[8px]">
              <button className="py-[14px] px-[30px] bg-[#ff9500] text-white leading-[27px] rounded-[8px] font-sans font-[500] text-[18px] ">Monthly</button>
              <button className='py-[14px] px-[30px] leading-[27px] rounded-[8px] font-sans font-[500] text-[18px] '>Yearly</button>
            </div>
        </div>
        <div className="p-[80px] flex gap-[30px] rounded-[12px] bg-white">
          <div className='rounded-[12px] bg-[#fcfcfd] pt-[50px] px-[30px] pb-[30px] flex flex-col gap-[50px]'>
            <h2 className='rounded-[8px] text-center font-sans font-[600px] leading-[37.18px] text-[22px] border bg-[#fff9f0] w-full py-[12px]'>Free Plan</h2>
            <h1 className='font-sans font-[600] text-[80px] leading-[58.4px] text-center'>$0<span className=' text-[#4c4c4d] font-sans font-[500] text-[20px] leading-[14.6px]'>/month</span></h1>
            <div className="">
              <div className="flex flex-col gap-[30px] bg-white p-[40px] rounded-t-[14px]">
                <p className='text-center font-sans font-[500] text-[20px] leading-[30px]'>Available Features</p>
                <ul className='flex flex-col gap-[20px] px-[30px]'>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Access to selected free courses.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Limited course materials and resources.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Basic community support.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />No certification upon completion.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Ad-supported platform.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={X} alt="" />Access to exclusive Pro Plan community forums.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={X} alt="" />Early access to new courses and updates.</li>
                </ul>
              </div>
              <button className='py-[20px] px[24px] bg-[#ff9500] text-white font-sans font-[600] text-[18px] leading-[27px] w-full rounded-b-[8px]'>Get Started</button>
            </div>

          </div>
          <div className='rounded-[12px] bg-[#fcfcfd] pt-[50px] px-[30px] pb-[30px] flex flex-col gap-[50px]'>
            <h2 className='rounded-[8px] text-center font-sans font-[600px] leading-[37.18px] text-[22px] border bg-[#fff9f0] w-full py-[12px]'>Pro Plan</h2>
            <h1 className='font-sans font-[600] text-[80px] leading-[58.4px] text-center'>$79<span className=' text-[#4c4c4d] font-sans font-[500] text-[20px] leading-[14.6px]'>/month</span></h1>
            <div className="">
              <div className="flex flex-col gap-[30px] bg-white p-[40px] rounded-t-[14px]">
                <p className='text-center font-sans font-[500] text-[20px] leading-[30px]'>Available Features</p>
                <ul className='flex flex-col gap-[20px] px-[30px]'>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Access to selected free courses.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Limited course materials and resources.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Basic community support.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />No certification upon completion.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Ad-supported platform.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Access to exclusive Pro Plan community forums.</li>
                  <li className='items-center flex gap-[12px] p-[14px] border rounded-[8px] font-sans font-[400] text-[18px] leading[27px]'><img src={galchka} alt="" />Early access to new courses and updates.</li>
                </ul>
              </div>
              <button className='py-[20px] px[24px] bg-[#ff9500] text-white font-sans font-[600] text-[18px] leading-[27px] w-full rounded-b-[8px]'>Get Started</button>
            </div>

          </div>
        </div>
      </div>

{/* Frequently_Asked_Questions____________________________________________________________________________________________________________________________________ */}

      <div className="flex gap-[120px] rounded-[12px] p-[100px] bg-white mb-[142px]">
        <div className="flex flex-col items-start gap-[50px] mb-[80px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="font-sans font-[600] text-[48px]">Frequently Asked Questions</h1>
                <p className=" leading-[27px] text-[#59595a] text-[18px] font-sans font-[400]">Still you have any questions? Contact our Team via support@skillbridge.com</p>
              </div>
              <button className="py-[18px] px-[24px] bg-white rounded-[8px] font-sans font-[500] text-[18px] border  ">See All FAQ’s</button>
        </div>
        <div className="flex flex-col w-[767px] gap-[50px]">
          <div className=" flex flex-col p-[50px] gap-[50px] border rounded-[12px]">
            <div style={!openCard ? {border: "none", paddingBottom:"0"} : {borderBottom: "1px solid #80808047", paddingBottom:"24px"}} className=" flex items-center justify-between">
              <h1 className='font-sans font-[500] text-[20px] leading-[30px]'>Can I enroll in multiple courses at once?</h1>
              <button onClick={() => setOpenCard(!openCard)}>
                {
                  !openCard ? <img src={plus_btn} /> : <img src={x_btn} alt="" />
                }
                
              </button>
            </div>
            <div style={openCard ? {display: "block"} : {display: "none"}} className=''>
              <p className='leading-[27px] text-[#59595a] text-[18px] font-sans mb-[50px] font-[400]'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className=" flex bg-[#f7f7f8] py-[20px] px-[30px] rounded-[8px] border-[#f1f1f3] items-center justify-between">
                <h1 className='font-sans font-[500] text-[18px] leading-[27px]'>Enrollment Process for Different Courses</h1>
                <img src={strelka_btn} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-[50px] p-[50px]  border rounded-[12px]">
            <div style={!openCard2 ? {border:"none",paddingBottom:"0"} : {borderBottom:"1px solid #80808047 ",paddingBottom:"24px"}} className="flex justify-between items-center">
                <h1 className='font-sans font-[500] text-[20px] leading-[30px]'>What kind of support can I expect from instructors?</h1>
                <button onClick={() => setOpenCard2(!openCard2)}>
                  {
                    !openCard2 ? <img src={plus_btn} alt="" /> : <img src={x_btn} alt="" /> 
                  }
                </button>
            </div>
            <div style={openCard2 ? {display:"block"} : {display:"none"}} className="">
              <p className='font-sans font-[400] text-[18px] leading-[27px] mb-[50px] text-[#59595a]'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className="flex justify-between items-center py-[20px] px-[30px] border-[#f1f1f3] rounded-[8px] bg-[#f7f7f8]">
                <h1 className='font-sans font-[500] text-[18px] leading-[27px]'>Enrollment Process for Different Courses</h1>
                <img src={strelka_btn} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-[50px] p-[50px]  border rounded-[12px]">
            <div style={!openCard3 ? {border:'none', paddingBottom:'0'} : {borderBottom:'1px solid #80808047', paddingBottom:'24px'}} className="flex justify-between items-center border-b pb-[24px] ">
                <h1 className='font-sans font-[500] text-[20px] leading-[30px]'>Are the courses self-paced or do they have specific start and end dates?</h1>
                <button onClick={() => setOpenCard3(!openCard3)}>
                  {
                    !openCard3 ? <img src={plus_btn} alt="" /> : <img src={x_btn} alt="" />
                  }
                  
                </button>
            </div>
            <div style={openCard3 ? {display:"block"} : {display:"none"}} className="">
              <p className='font-sans font-[400] text-[18px] mb-[50px] leading-[27px] text-[#59595a]'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className="flex justify-between items-center py-[20px] px-[30px] border-[#f1f1f3] rounded-[8px] bg-[#f7f7f8]">
                <h1 className='font-sans font-[500] text-[18px] leading-[27px]'>Enrollment Process for Different Courses</h1>
                <img src={strelka_btn} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-[50px] p-[50px]  border rounded-[12px]">
            <div style={!openCard4 ? {border:'none',padding:'0'} : {borderBottom:"1px soild #80808047", paddingBottom:"24px"} } className="flex justify-between items-center border-b pb-[24px] ">
                <h1 className='font-sans font-[500] text-[20px] leading-[30px]'>Are there any prerequisites for the courses?</h1>
                <button onClick={() => setOpenCard4(!openCard4)}>
                  {
                    !openCard4 ? <img src={plus_btn} alt="" /> : <img className='' src={x_btn} alt="" />
                  }
                </button>
            </div>
            <div style={openCard4 ? {display:'block'} : {display:'none'}} className="">
              <p className='font-sans font-[400] text-[18px] leading-[27px] mb-[50px] text-[#59595a]'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className="flex justify-between items-center py-[20px] px-[30px] border-[#f1f1f3] rounded-[8px] bg-[#f7f7f8]">
                <h1 className='font-sans font-[500] text-[18px] leading-[27px]'>Enrollment Process for Different Courses</h1>
                <img src={strelka_btn} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-[50px] p-[50px]  border rounded-[12px]">
            <div style={!openCard5 ? {border:"none",padding:'0'} : {borderBottom:'1px solid #80808047', paddingBottom:'24px'}} className="flex justify-between items-center border-b pb-[24px] ">
                <h1 className='font-sans font-[500] text-[20px] leading-[30px]'>Can I download the course materials for offline access?</h1>
                <button onClick={() => setOpenCard5(!openCard5)}>
                  {
                    !openCard5 ? <img src={plus_btn} alt="" /> : <img src={x_btn} alt="" />
                  }
                </button>
            </div>
            <div style={openCard5 ? {display:'block'} : {display:'none'}} className="">
              <p className='font-sans mb-[50px] font-[400] text-[18px] leading-[27px] text-[#59595a]'>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className="flex justify-between items-center py-[20px] px-[30px] border-[#f1f1f3] rounded-[8px] bg-[#f7f7f8]">
                <h1 className='font-sans font-[500] text-[18px] leading-[27px]'>Enrollment Process for Different Courses</h1>
                <img src={strelka_btn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prising_head