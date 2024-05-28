import card1 from '../../assets/card1.png'
import web2 from '../../assets/web_2.png'
import web3 from '../../assets/web_3.png'
import ux_1 from '../../assets/ux_1.png'
import ux_2 from '../../assets/ux_2.png'
import ux_3 from '../../assets/ux_3.png'
import mobil_1 from '../../assets/mobil_1.png'
import mobil_2 from '../../assets/mobil_2.png'
import mobil_3 from '../../assets/mobil_3.png'
import grap_1 from '../../assets/grap_1.png'
import grap_2 from '../../assets/grap_2.png'
import grap_3 from '../../assets/grap_3.png'
import front_1 from '../../assets/front_1.png'
import front_2 from '../../assets/front_2.png'
import front_3 from '../../assets/front_3.png'
import { NavLink } from 'react-router-dom'

function Head() {
  return (
    <div>
        <div className="flex justify-between items-end mb-[80px]">
          <div className="flex  mt-[109px] gap-[100px] items-center border-b pb-[40px]">
            <h1 className="font-sans font-[600] text-[48px] leading-[72px]">Online Courses on Design and Development</h1>
            <p className=" text-[#59595a] text-[18px] font-sans font-[400]  max-w-[748px] leading-[27px]">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
          </div>
        </div>
        <div className="  mb-[150px] flex flex-col gap-[50px]">
          <div className=" p-[50px] bg-white rounded-[12px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between gap-[50px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-sans font-[600] text-[24px] leading-[36px]">Web Design Fundamentals</h1>
                  <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                </div>
                <NavLink to={'/WebDesign'}><button className=" py-[18px] px-[24px] border rounded-[8px] font-sans font-[500] leading-[27px] text-[18px] min-w-[160px]">Viev Course</button></NavLink>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ">
                <img className='rounded-[8px]' src={card1} alt="" />
                <img className='rounded-[8px]' src={web2} alt="" />
                <img className='rounded-[8px]' src={web3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>4 Weeks</p>
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>Beginer</p>
                </div>
                <h3 className='font-sans font-[500] text-[20px] leading-[25.3px] text-[#262626]'>By Jhon Smith</h3>
              </div>
            </div>
            <div className="mt-[50px] border rounded-[10px]">
              <div className="py-[24px] px-[30px] ">
                <h1 className='font-sans font-[600] text-[22px] leading-[33px]'>Curriculum</h1>
              </div>
              <div className="border-t py-[30px] px-[50px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center gap-[50px]">
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>01</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to HTML</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>02</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Styling with CSS</p>
                </div>
                <div className="border-r max-lg:border-none pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>03</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to Responsive Design</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>04</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Design Principles for Web</p>
                </div>
                <div className="pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>05</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Building a Basic Website</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-[50px] bg-white rounded-[12px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between gap-[50px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-sans font-[600] text-[24px] leading-[36px]">UI/UX Design</h1>
                  <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]">Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                </div>
                <NavLink to={'/UxUi'}><button className=" py-[18px] px-[24px] border rounded-[8px] font-sans font-[500] leading-[27px] text-[18px] min-w-[160px]">Viev Course</button></NavLink>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ">
                <img className='rounded-[8px]' src={ux_1} alt="" />
                <img className='rounded-[8px]' src={ux_2} alt="" />
                <img className='rounded-[8px]' src={ux_3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>6 Weeks</p>
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>Intermediate</p>
                </div>
                <h3 className='font-sans font-[500] text-[20px] leading-[25.3px] text-[#262626]'>By Emily Johnson</h3>
              </div>
            </div>
            <div className="mt-[50px] border rounded-[10px]">
              <div className="py-[24px] px-[30px] ">
                <h1 className='font-sans font-[600] text-[22px] leading-[33px]'>Curriculum</h1>
              </div>
              <div className="border-t py-[30px] px-[50px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center gap-[50px]">
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>01</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to UI/UX Design</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>02</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>User Research and Personas</p>
                </div>
                <div className="border-r max-lg:border-none pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>03</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Wireframing and Prototyping</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>04</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Visual Design and Branding</p>
                </div>
                <div className="pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>05</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Usability Testing and Iteration</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-[50px] bg-white rounded-[12px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between gap-[50px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-sans font-[600] text-[24px] leading-[36px]">Mobile App Development</h1>
                  <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]">Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                </div>
                <NavLink to={'/MobilApp'}><button className=" py-[18px] px-[24px] border rounded-[8px] font-sans font-[500] leading-[27px] text-[18px] min-w-[160px]">Viev Course</button></NavLink>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ">
                <img className='rounded-[8px]' src={mobil_1} alt="" />
                <img className='rounded-[8px]' src={mobil_2} alt="" />
                <img className='rounded-[8px]' src={mobil_3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>8 Weeks</p>
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>Intermediate</p>
                </div>
                <h3 className='font-sans font-[500] text-[20px] leading-[25.3px] text-[#262626]'>By David Brown</h3>
              </div>
            </div>
            
            <div className="mt-[50px] border rounded-[10px]">
              <div className="py-[24px] px-[30px] ">
                <h1 className='font-sans font-[600] text-[22px] leading-[33px]'>Curriculum</h1>
              </div>
              <div className="border-t py-[30px] px-[50px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center gap-[50px]">
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>01</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to Mobile App Development</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>02</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Fundamentals of Swift Programming (iOS)</p>
                </div>
                <div className="border-r max-lg:border-none pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>03</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Fundamentals of Kotlin Programming (Android)</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>04</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Building User Interfaces</p>
                </div>
                <div className="pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>05</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>App Deployment and Testing</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-[50px] bg-white rounded-[12px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between gap-[50px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-sans font-[600] text-[24px] leading-[36px]">Graphic Design for Beginners</h1>
                  <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]">Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                </div>
                <NavLink to={'/GraphicDesign'}><button className=" py-[18px] px-[24px] border rounded-[8px] font-sans font-[500] leading-[27px] text-[18px] min-w-[160px]">Viev Course</button></NavLink>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ">
                <img className='rounded-[8px]' src={grap_1} alt="" />
                <img className='rounded-[8px]' src={grap_2} alt="" />
                <img className='rounded-[8px]' src={grap_3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>10 Weeks</p>
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>Beginer</p>
                </div>
                <h3 className='font-sans font-[500] text-[20px] leading-[25.3px] text-[#262626]'>By Sarah Thompson</h3>
              </div>
            </div>
            
            <div className="mt-[50px] border rounded-[10px]">
              <div className="py-[24px] px-[30px] ">
                <h1 className='font-sans font-[600] text-[22px] leading-[33px]'>Curriculum</h1>
              </div>
              <div className="border-t py-[30px] px-[50px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center gap-[50px]">
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>01</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to Graphic Design</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>02</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Typography and Color Theory</p>
                </div>
                <div className="border-r max-lg:border-none pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>03</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Layout Design and Composition</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>04</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Image Editing and Manipulation</p>
                </div>
                <div className="pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>05</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Designing for Print and Digital Media</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-[50px] bg-white rounded-[12px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex justify-between gap-[50px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h1 className="font-sans font-[600] text-[24px] leading-[36px]">Front-End Web Development</h1>
                  <p className="font-sans font-[400] text-[18px] leading-[27px] text-[#59595a]">Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.</p>
                </div>
                <NavLink to={'/FrontEnd'}><button className=" py-[18px] px-[24px] border rounded-[8px] font-sans font-[500] leading-[27px] text-[18px] min-w-[160px]">Viev Course</button></NavLink>
              </div>
              <div className="grid grid-cols-3 gap-[30px] ">
                <img className='rounded-[8px]' src={front_1} alt="" />
                <img className='rounded-[8px]' src={front_2} alt="" />
                <img className='rounded-[8px]' src={front_3} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>10 Weeks</p>
                  <p className='py-[10px] px-[16px] border rounded-[8px] text-[#59595a] font-sans font-[400] text-[18px] leading-[22.7px]'>Intermediate</p>
                </div>
                <h3 className='font-sans font-[500] text-[20px] leading-[25.3px] text-[#262626]'>By Jhon Smith</h3>
              </div>
            </div>
            
            <div className="mt-[50px] border rounded-[10px]">
              <div className="py-[24px] px-[30px] ">
                <h1 className='font-sans font-[600] text-[22px] leading-[33px]'>Curriculum</h1>
              </div>
              <div className="border-t py-[30px] px-[50px] grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 place-content-center gap-[50px]">
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>01</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>HTML Fundamentals</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>02</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>CSS Styling and Layouts</p>
                </div>
                <div className="border-r max-lg:border-none pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>03</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>JavaScript Basics</p>
                </div>
                <div className="border-r pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>04</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Building Responsive Websites</p>
                </div>
                <div className="pr-[50px]">
                  <h1 className='text-[50px] font-sans font-[800] leading-[75px]'>05</h1>
                  <p className='font-sans font-[500] text-[18px] leading-[27px] text-[#333333]'>Introduction to Bootstrap and React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Head