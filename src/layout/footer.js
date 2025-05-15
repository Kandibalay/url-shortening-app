import Image from "next/image";
import Facebook from "../../public/images/icon-facebook.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Instagram from "../../public/images/icon-instagram.svg";
import Pinterest from "../../public/images/icon-pinterest.svg";

export default function Footer() {
  return (
    <div className="bg-[#232127]">
      <div className="container mx-auto text-white py-8 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-5 md:px-20">
        <div>
          <h1 className="text-3xl font-bold">Shortly</h1>
          
        </div>
        <div className="grid grid-cols-1 text-center md:text-left text-[14px] lg:text-[15px] lg:ml-20 md:grid-cols-3 gap-5 md:gap-16">
          <div>
            <h1 className="text-[14px] lg:text-[18px] font-bold">Features</h1>
            <ul className="text-[#9e9aa7] mt-2 lg:mt-5">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[14px] lg:text-[18px] font-bold">Resources</h1>
            <ul className="text-[#9e9aa7] mt-2 lg:mt-5">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[14px] lg:text-[18px] font-bold">Company</h1>
            <ul className="text-[#9e9aa7] mt-2 lg:mt-5">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="md:pt-2">
          <ul className="flex justify-end gap-5">
            <li>
              <Image src={Facebook} alt="facebook logo" className="w-[16px] lg:w-[20px] cursor-pointer active:bg-[#2acfcf] hover:bg-[#2acfcf] hover:rounded-full " />
            </li>
            <li>
              <Image src={Twitter} alt="twitter logo" className="w-[16px] lg:w-[20px] cursor-pointer active:bg-[#2acfcf] hover:bg-[#2acfcf] hover:rounded-full hover:p-1" />
            </li>
            <li>
              <Image
                src={Pinterest}
                alt="pinterest logo"
                className="w-[16px] lg:w-[20px] cursor-pointer active:bg-[#2acfcf] hover:bg-[#2acfcf] hover:rounded-full"
              />
            </li>
            <li>
              <Image
                src={Instagram}
                alt="instagram logo"
                className="w-[16px] lg:w-[20px] cursor-pointer active:bg-[#2acfcf] hover:bg-[#2acfcf] hover:rounded-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
