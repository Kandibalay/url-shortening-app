export default function Shortened() {
    return (
        <div className="px-6 md:px-14 lg:px-20 container mx-auto w-full ">
            <div className="bg-[#3b3054] py-2 lg:py-5 rounded-md shorten">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:gap-5 py-3 lg:py-5 px-3 lg:px-8">
                    <input type="text" placeholder="Shorten a link here..." className="w-full md:w-[80%] bg-white py-2 rounded-md px-5 text-[14px] lg:text-[18px] text-[#232127] outline-none" />
                    <button type="button" className="bg-[#2acfcf] text-white py-2 px-6 text-[14px] lg:text-[18px] rounded-md w-full md:w-[20%]">Shorten It!</button>
                </div>
            </div>
        </div>
    )
}