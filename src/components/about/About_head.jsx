import about1 from '../../assets/about1.svg'
import about2 from '../../assets/about2.svg'
import about3 from '../../assets/about3.svg'
import about4 from '../../assets/about4.svg'
import about5 from '../../assets/about5.svg'
import about6 from '../../assets/about6.svg'
import about7 from '../../assets/about7.svg'
import about8 from '../../assets/about8.svg'

function About_head() {
  return (
    <div>
        <div className="mb-[177px]">
            <div className="flex justify-between items-end mb-[80px]">
                <div className="flex  mt-[109px] w-full justify-between items-center border-b pb-[40px]">
                    <h1 className="font-sans font-[600] text-[48px] leading-[72px]">About Skillbridge</h1>
                    <p className=" text-[#59595a] text-[18px] font-sans font-[400]  max-w-[748px] leading-[27px]">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
                </div>
            </div>
            <div className="flex flex-col gap-[80px]">
                <div className="flex flex-col gap-[6px]">
                    <h1 className='font-sans font-[500] text-[48px] leading-[72px]'>Achievements</h1>
                    <p className='text-[#59595a] font-sans font-[400] text-[18px] leading-[27px]'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-[30px]">
                        <div className=" w-[783px] flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about1} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Trusted by Thousands</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                            </div>
                        </div>
                        <div className=" w-[783px] flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about2} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Award-Winning Courses</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[30px]">
                        <div className=" w-[783px] flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about3} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Positive Student Feedback</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                            </div>
                        </div>
                        <div className=" w-[783px] flex flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about4} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Industry Partnerships</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-[177px]">
            <div className="flex flex-col gap-[80px]">
                <div className="flex flex-col gap-[6px]">
                    <h1 className='font-sans font-[500] text-[48px] leading-[72px]'>Our Goals</h1>
                    <p className='text-[#59595a] font-sans font-[400] text-[18px] leading-[27px]'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to</p>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex gap-[30px]">
                        <div className=" flex w-[783px] flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about5} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Provide Practical Skills</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.</p>
                            </div>
                        </div>
                        <div className=" flex w-[783px] flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about6} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Foster Creative Problem-Solving</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[30px]">
                        <div className=" flex w-[783px] flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about7} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Promote Collaboration and Community</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
                            </div>
                        </div>
                        <div className=" flex w-[783px] flex-col gap-[30px] p-[50px] bg-white rounded-[12px]">
                            <img className='w-[66px] h-[66px]' src={about8} alt="" />
                            <div className='flex flex-col gap-[14px]'>
                                <h3 className='font-sans font-[500] text-[24px] leading-[36px] '>Stay Ahead of the Curve</h3>
                                <p className='font-sans fotn-[400] text-[18px] leading-[27px] text-[#56565a]'>The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_head