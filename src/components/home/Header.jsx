import chaqmoq from '../../assets/chaqmoq.svg'
import adobe from '../../assets/adobe.svg'
import zapier from '../../assets/zapier.svg'
import zoom from '../../assets/zoom.svg'
import spotify from '../../assets/spotify.svg'
import amazon from '../../assets/amazon.svg'
import netflix from '../../assets/netflix.svg'
import notion from '../../assets/notion.svg'
import twoPerson from '../../assets/twoPerson.png'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="container mx-auto">
        <div className='flex flex-col gap-[60px]  items-center mt-[100px] mb-[100px]'>
            <div className="flex flex-col w-auto gap-[10px]">
                <h1 className='w-fit m-auto flex gap-[10px] max-sm:text-[24px] max-sm:items-center max-lg:items-center max-md:items-center max-lg:text-[40px] max-md:text-[36px] text-[48px] font-sans font-bold text-center justify-center rounded-[11px] px-[14px] py-[25px] bg-[#fcfcfd]'> 
                    <img src={chaqmoq} alt="" />
                    <span className='text-[#ff9500]'>Unlock</span> Your Creative Potential
                </h1>
                <h2 className='max-lg:text-[36px] max-md:text-[30px] max-sm:text-[24px] text-[38px] max-lg:leading-[47px] max-md:leading-[37px] max-sm:leading-[27px] leading-[57px]  font-sans font-medium text-center '>with Online Design and Development Courses.</h2>
                <p className='text-center text-[18px] font-sans font-normal leading-[27px]'>Learn from Industry Experts and Enhance Your Skills.</p>
            </div>
            <div className='justify-center  flex gap-[12px]'>
                <button className=' text-[18px] font-sans font-[600] rounded-[8px] text-[#ffff] bg-[#ff9500] px-[18px] py-[24px]'>Explore Courses</button>
                <button className=' text-[18px] font-sans font-[500] rounded-[8px] px-[18px] py-[24px] bg-[#fff]'>View Pricing</button>
            </div>
        </div>
        <div className='mx-auto p-[30px] grid lg:grid-cols-8 md:grid-cols-4 max-md:place-items-center bg-white mb-[100px]' >
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px]  ' src={zapier} alt="" />
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px]  ' src={spotify} alt="" />
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px] ' src={zoom} alt="" />
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px] md:border-none ' src={amazon} alt="" />
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px] ' src={adobe} alt="" />
            <img className='max-lg:min-w-[119px] md:min-w-[119px] min-w-[219px]'  src={notion} alt="" />
            <img className='max-lg:min-w-[119px] py-[30px] md:min-w-[119px] min-w-[219px] px-[40px]  ' src={netflix}alt="" />
            <img className='max-lg:max-w-[119px] py-[15px] md:min-w-[119px] min-w-[219px] px-[40px]' src={logo}alt="" />
        </div>
        <img className='w-full mb-[150px]' src={twoPerson} alt="" />
    </div>
  )
}

export default Header