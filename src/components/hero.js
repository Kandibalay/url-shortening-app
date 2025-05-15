import Image from "next/image";
import WorkIllustration from "../../public/images/illustration-working.svg";
export default function Hero() {
    return (
       <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center pt-28 px-6 md:px-14 lg:px-20 pb-32 bg-white container mx-auto">
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center md:items-start">
                <h1 className="text-[2.3rem] text-center md:text-start lg:text-[4rem] leading-10 lg:leading-16 py-4 lg:py-1 font-bold text-[#232127] w-full xl:w-[80%]">
                    More than just shorter links
                </h1>
                <p className="text-[#9e9aa7] text-center md:text-start text-[15px] md:text-[18px] lg:w-[90%] xl:w-[70%] pb-5">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button type="button" className="bg-[#2acfcf] text-[15px] lg:text-[18px] text-white py-2 w-[70%] lg:w-[30%] rounded-full  cursor-pointer hover:bg-[#9be3e3] transition duration-300 ease-in-out">Get Started</button>
            </div>
            <div className="order-1 md:order-2 justify-center items-center w-full">
                <Image src={WorkIllustration} alt="Work Illustration" width={500} height={500} className="w-full py-10 lg:py-0 lg:ml-10" />
            </div>
       </div>
    );
}