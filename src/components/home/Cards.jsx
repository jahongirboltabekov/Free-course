import icon from '../../assets/icon.svg'
import card1 from '../../assets/card1.png'
import person from '../../assets/person.png'
import galchka from '../../assets/galchka.svg'
import X from '../../assets/X.svg'
import ux_1 from '../../assets/ux_1.png'
import mobil_1 from '../../assets/mobil_1.png'
import x_btn from '../../assets/x_btn.svg'
import strelka_btn from '../../assets/strelka_btn.svg'
import { useState } from 'react'
import plus_btn from '../../assets/plus_btn.svg'
import grap_1 from '../../assets/grap_1.png'
import front_1 from '../../assets/front_1.png'
import girl from '../../assets/girl.png'


const Cards = () => {
  const [openCard, setOpenCard] = useState(false)
  const [openCard2, setOpenCard2] = useState(false)
  const [openCard3, setOpenCard3] = useState(false)
  const [openCard4, setOpenCard4] = useState(false)
  const [openCard5, setOpenCard5] = useState(false)
  return (
    <div className="container mx-auto">

{/* BENEFITS_CARDS________________________________________________________________________________________________________________________________________________*/}

      <div className='mb-[100px]'>
        <div className="max-sm:flex-col max-sm:items-center max-sm:gap-[30px] flex justify-between items-end mb-[80px]">
          <div className="flex flex-col gap-[20px] max-sm:items-center max-sm:gap-[30px]">
            <h1 className="font-sans font-[600] text-[48px]">Benefits</h1>
            <p className=" max-sm:text-center text-[#59595a] leading-[27px] text-18px font-sans font-[400]">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
          </div>
          <button className="py-[18px] px-[24px] bg-white rounded-[8px] font-sans font-[500] text-[18px] border  ">View All</button>
        </div>
        <div className="max-[784px]:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-50px max-sm:place-items-center grid grid-cols-3 gap-[20px]">
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">01</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Flexible Learning Schedule</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Fit your coursework around your existing commitments and obligations.</p>
              </div>
              <img src={icon} alt="" />
            </div>
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">02</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Expert Instruction</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Learn from industry experts who have hands-on experience in design and development.</p>
              </div>
              <img src={icon} alt="" />
            </div>
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">03</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Diverse Course Offerings</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Explore a wide range of design and development courses covering various topics.</p>
              </div>
              <img src={icon} alt="" />
            </div>
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">04</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Updated Curriculum</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
              </div>
              <img src={icon} alt="" />
            </div>
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">05</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Practical Projects and Assignments</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
              </div>
              <img src={icon} alt="" />
            </div>
            <div className="break-all flex max-w-[519px] flex-col bg-white rounded-[12px] items-end gap-[50px] p-[50px]">
              <h1 className="font-sans font-[700] text-[80px]">06</h1>
              <div className='flex flex-col gap-[15px]'>
                <h1 className="leading-[36px] font-sans font-[600] text-[24px]">Interactive Learning Environment</h1>
                <p className=" leading-[27px] font-sans font-[400] text-[18px] text-[#4c4c4d]">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
              </div>
              <img src={icon} alt="" />
            </div>
        </div>
      </div>

{/* OUR_COURSES_CARDS_____________________________________________________________________________________________________________________________________________*/}

      <div className='mb-[108px]'>
        <div className="max-sm:flex-col max-sm:items-center max-sm:gap-[30px] flex justify-between items-end mb-[80px]">
            <div className="flex flex-col gap-[20px] max-sm:items-center max-sm:gap-[30px]">
              <h1 className="font-sans font-[600] text-[48px]">Our Courses</h1>
              <p className=" max-sm:text-center leading-[27px] text-[#59595a] text-18px font-sans font-[400]">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <button className="py-[18px] px-[24px] bg-white rounded-[8px] font-sans font-[500] text-[18px] border  ">View All</button>
        </div>
        <div className='max-[784px]:grid-cols-1 grid grid-cols-2 gap-[30px]'>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={card1} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>4 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Beginner</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By John Smith</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">Web Design Fundamentals</h1>
                <p className="font-sans font-[400] leading-[27px] text-[18px] text-[#4c4c4d]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={ux_1} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>6 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Intermediate</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By Emily Johnson</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">UI/UX Design</h1>
                <p className="font-sans font-[400] leading-[27px] text-[18px] text-[#4c4c4d]">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={mobil_1} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>4 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Beginner</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By David Brown</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">Web Design Fundamentals</h1>
                <p className="font-sans font-[400] leading-[27px] text-[18px] text-[#4c4c4d]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={grap_1} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>8 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Intermediate</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By Sarah Thompson</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">Web Design Fundamentals</h1>
                <p className="font-sans font-[400] leading-[27px] text-[18px] text-[#4c4c4d]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={front_1} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>4 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Beginner</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By Michael Adams</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">Web Design Fundamentals</h1>
                <p className="font-sans font-[400] leading-[27px] text-[18px] text-[#4c4c4d]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
            <div className='flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]'>
              <img className='w-full rounded-[8px] h-[380px]' src={girl} alt="" />
              <div className='flex justify-between'>
                <div className='flex gap-[10px]'>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px]'>4 Weeks</p>
                  <p className='font-sans font-[400] text-[18px] text-[#4c4c4d] py-[10px] px-[16px] border rounded-[8px] '>Beginner</p>
                </div>
                <p className='text-[20px] font-sans font-[500]'>By Jennifer Wilson</p>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <h1 className="font-sans font-[600] text-[24px]">Web Design Fundamentals</h1>
                <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#4c4c4d]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
              </div>
              <button className='w-full py-[18px] px-[24px] text-[18px] font-sans font-[500] bg-[#f7f7f8] rounded-[8px]'>Get it Now</button>
            </div>
        </div>
      </div>

{/* OUR_TESTIMONIALS_CARDS_______________________________________________________________________________________________________________________________________ */}
      
      <div className="">
        <div className="max-sm:flex-col max-sm:items-center max-sm:gap-[30px] flex justify-between items-end mb-[80px]">
              <div className="flex flex-col gap-[20px] max-sm:items-center max-sm:gap-[30px]">
                <h1 className="font-sans font-[600] text-[48px]">Our Testimonials</h1>
                <p className=" max-sm:text-center leading-[27px] text-[#59595a] text-18px font-sans font-[400]">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
              </div>
              <button className="py-[18px] px-[24px] bg-white rounded-[8px] font-sans font-[500] text-[18px] border  ">View All</button>
        </div>
        <div className="mb-[168px] max-[784px]:grid-cols-1 grid grid-cols-2 gap-[30px]">
            <div className=" rounded-[12px] bg-white">
              <p className='p-[50px] text-[#59595a] leading-[27px] text-18px font-sans font-[400]'>The web design course provied a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
              <div className='flex py-[30px] border-t px-[50px] justify-between bg-[#fcfcfd] '>
                <h1 className='flex  items-center text-[18px] font-sans font-[600] '>
                  <img className='w-[60px] h-[60px] rounded-[8px] mr-[15px]' src={person} alt="" />Sarah L
                </h1>
                <button className='text-[18px] font-sans font-[600] px-[24px] py-[18px] rounded-[8px] bg-[#f7f7f8]'>Read Full Story</button>
              </div>
            </div>
            <div className=" rounded-[12px] bg-white">
              <p className='p-[50px] text-[#59595a] leading-[27px] text-18px font-sans font-[400]'>The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</p>
              <div className='flex py-[30px] border-t px-[50px] justify-between bg-[#fcfcfd] '>
                <h1 className='flex  items-center text-[18px] font-sans font-[600] '>
                  <img className='w-[60px] h-[60px] rounded-[8px] mr-[15px]' src={person} alt="" />Sarah L
                </h1>
                <button className='text-[18px] font-sans font-[600] px-[24px] py-[18px] rounded-[8px] bg-[#f7f7f8]'>Read Full Story</button>
              </div>
            </div>
            <div className=" rounded-[12px] bg-white">
              <p className='p-[50px] text-[#59595a] text-18px leading-[27px] font-sans font-[400]'>The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</p>
              <div className='flex py-[30px] border-t px-[50px] justify-between bg-[#fcfcfd] '>
                <h1 className='flex  items-center text-[18px] font-sans font-[600] '>
                  <img className='w-[60px] h-[60px] rounded-[8px] mr-[15px]' src={person} alt="" />Sarah L
                </h1>
                <button className='text-[18px] font-sans font-[600] px-[24px] py-[18px] rounded-[8px] bg-[#f7f7f8]'>Read Full Story</button>
              </div>
            </div>
            <div className=" rounded-[12px] bg-white">
              <p className='p-[50px] text-[#59595a] text-18px leading-[27px] font-sans font-[400]'>The web design course provied a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
              <div className='flex py-[30px] border-t px-[50px] justify-between bg-[#fcfcfd] '>
                <h1 className='flex  items-center text-[18px] font-sans font-[600] '>
                  <img className='w-[60px] h-[60px] rounded-[8px] mr-[15px]' src={person} alt="" />Sarah L
                </h1>
                <button className='text-[18px] font-sans font-[600] px-[24px] py-[18px] rounded-[8px] bg-[#f7f7f8]'>Read Full Story</button>
              </div>
            </div>
        </div>
      </div>

{/* OUR_PRICING__________________________________________________________________________________________________________________________________________________ */}
      
      <div className="mb-[150px]">
        <div  className="max-[784px]:grid-cols-1 max-[784px]:place-items-center max-[784px]:gap-[20px]  grid grid-cols-2 place-items-end mb-[80px]">
            <div className=" flex flex-col gap-[20px] max-sm:items-center max-sm:gap-[30px]">
              <h1 className="font-sans font-[600] text-[48px]">Our Pricing</h1>
              <p className="max-sm:text-center text-[#59595a] leading-[27px] text-18px font-sans font-[400]">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className="p-[12px] max-w-[272px] bg-white rounded-[8px]">
              <button className="py-[14px] px-[30px] bg-[#ff9500] text-white leading-[27px] rounded-[8px] font-sans font-[500] text-[18px] ">Monthly</button>
              <button className='py-[14px] px-[30px] leading-[27px] rounded-[8px] font-sans font-[500] text-[18px] '>Yearly</button>
            </div>
        </div>
        <div className="max-lg:grid-cols-1 p-[80px] max-sm:p-[40px] grid grid-cols-2 place-items-center gap-[30px] rounded-[12px] bg-white">
          <div className='rounded-[12px] bg-[#fcfcfd] pt-[50px] max-sm:px-[10px] px-[30px] pb-[30px] flex flex-col gap-[50px]'>
            <h2 className='rounded-[8px] text-center font-sans font-[600px] leading-[37.18px] text-[22px] border bg-[#fff9f0] w-full py-[12px]'>Free Plan</h2>
            <h1 className='font-sans font-[600] text-[80px] leading-[58.4px] text-center'>$0<span className=' text-[#4c4c4d] font-sans font-[500] text-[20px] leading-[14.6px]'>/month</span></h1>
            <div className="">
              <div className="flex flex-col gap-[30px] bg-white p-[40px] max-sm:p-[0px] rounded-t-[14px]">
                <p className='text-center font-sans font-[500] text-[20px] leading-[30px]'>Available Features</p>
                <ul className='flex flex-col gap-[20px] px-[30px] max-sm:px-[0px]'>
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
          <div className='rounded-[12px] bg-[#fcfcfd] pt-[50px] max-sm:px-[10px] px-[30px] pb-[30px] flex flex-col gap-[50px]'>
            <h2 className='rounded-[8px] text-center font-sans font-[600px] leading-[37.18px] text-[22px] border bg-[#fff9f0] w-full py-[12px]'>Pro Plan</h2>
            <h1 className='font-sans font-[600] text-[80px] leading-[58.4px] text-center'>$79<span className=' text-[#4c4c4d] font-sans font-[500] text-[20px] leading-[14.6px]'>/month</span></h1>
            <div className="">
              <div className="flex flex-col gap-[30px] bg-white p-[40px] max-sm:p-[0px] rounded-t-[14px]">
                <p className='text-center font-sans font-[500] text-[20px] leading-[30px]'>Available Features</p>
                <ul className='flex flex-col gap-[20px] px-[30px] max-sm:px-[0px]'>
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

      <div className="max-lg:grid-cols-1 grid grid-cols-2 gap-[120px] place-items-center rounded-[12px] p-[100px] max-sm:p-[50px] bg-white mb-[142px]">
        <div className="flex flex-col items-start gap-[50px] mb-[80px]">
              <div className="flex flex-col gap-[10px]">
                <h1 className="max-sm:text-center font-sans font-[600] text-[48px]">Frequently Asked Questions</h1>
                <p className=" max-sm:text-center leading-[27px] text-[#59595a] text-[18px] font-sans font-[400]">Still you have any questions? Contact our Team via support@skillbridge.com</p>
              </div>
              <button className="py-[18px] px-[24px] bg-white rounded-[8px] font-sans font-[500] text-[18px] border  ">See All FAQ’s</button>
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className=" flex flex-col p-[50px] max-sm:p-[25px] gap-[50px] border rounded-[12px]">
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
          <div className="flex flex-col  gap-[50px] p-[50px] max-sm:p-[25px]  border rounded-[12px]">
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
          <div className="flex flex-col  gap-[50px] p-[50px] max-sm:p-[25px]  border rounded-[12px]">
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
          <div className="flex flex-col  gap-[50px] p-[50px] max-sm:p-[25px]  border rounded-[12px]">
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
          <div className="flex flex-col  gap-[50px] p-[50px] max-sm:p-[25px]  border rounded-[12px]">
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

export default Cards