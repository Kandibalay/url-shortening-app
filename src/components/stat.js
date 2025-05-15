// import { StatTrack } from "@/db";
import Image from "next/image";
import BrandIcon from "../../public/images/icon-brand-recognition.svg";
import DetailedIcon from "../../public/images/icon-detailed-records.svg";
import CustomizableIcon from "../../public/images/icon-fully-customizable.svg";
export default function Stat() {
  return (
    <div className="bg-[#f0f1f6] py-14">
      <div className="container mx-auto py-6 lg:py-6 px-6 md:px-14 lg:px-20">
        <h1 className="text-[22px] lg:text-[2rem] text-[#232127] font-bold text-center pt-5 pb-2">
          Advanced Statistics
        </h1>
        <p className="text-[#9e9aa7] text-[14px] lg:text-[15px] text-center w-[90%] lg:w-[45%] mx-auto pb-5">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="grid grid-cols-1 pt-18 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-md shadow-md p-6 xl:p-8 flex flex-col items-start relative h-55">
            <div className="bg-[#3b3054] rounded-full p-2 xl:p-3 mb-5 absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-1/6">
              <Image
                src={BrandIcon}
                alt="Brand Recognition"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-[#232127] w-full text-center lg:text-left font-bold text-[20px] lg:text-[1.3rem] mt-5 py-1 mb-1">
              Brand Recognition
            </h2>
            <p className="text-[#9e9aa7] text-center lg:text-left text-[14px] lg:text-[15px] ">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md mt-10 p-6 xl:p-8 flex flex-col items-start relative h-55">
            <div className="bg-[#3b3054] rounded-full p-2 xl:p-3 mb-5 absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-1/6">
              <Image
                src={DetailedIcon}
                alt="Detailed Records"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-[#232127] w-full text-center lg:text-left font-bold text-[20px] lg:text-[1.3rem] mt-5 py-1 mb-1">
              Detailed Records
            </h2>
            <p className="text-[#9e9aa7] text-[14px] lg:text-[15px] text-center lg:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md mt-20 p-6 xl:p-8 flex flex-col items-start relative h-55">
            <div className="bg-[#3b3054] rounded-full p-2 xl:p-3 mb-5 absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-1/6">
              <Image
                src={CustomizableIcon}
                alt="Fully Customizable"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-[#232127] w-full text-center lg:text-left font-bold text-[20px] lg:text-[1.3rem] mt-5 py-1 mb-1">
              Fully Customizable
            </h2>
            <p className="text-[#9e9aa7] text-[14px] lg:text-[15px] text-center lg:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>

                         {StatTrack.map((item) => (
                            <div key={item.id} className="bg-white rounded-md shadow-md p-8 flex flex-col items-start relative">
                                <div className="bg-[#3b3054] rounded-full p-3 mb-5 absolute -top-10 left-5">
                       <Image src={item.img} alt={item.title} />
                                </div>
                               <h2 className="text-[#232127] font-bold text-[1.3rem] mt-5 py-1 mb-1">{item.title}</h2>
                               <p className="text-[#9e9aa7] text-left">{item.desc}</p>
                           </div>
                       )) 
</div>
  */
}
