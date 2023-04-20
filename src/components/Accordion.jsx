import { useState } from "react";
import React from "react";
import HeadsetIcon from '@mui/icons-material/Headset';
import { FaTshirt } from 'react-icons/fa'

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <>
            <div className={`${isOpen ? 'block' : 'hidden'} bg-[#F4F5F5FF] h-[4px] w-full`}></div>

            <div onClick={() => setIsOpen(!isOpen)} className={` ${isOpen ? " h-fit" : "h-[45px]"} overflow-hidden px-4 py-2  border-indigo-200`} >
                <div className="accTop w-full flex items-center justify-between mb-[20px]" >
                    <p className={`${isOpen ? " font-semibold" : "font-normal"}  text-[#3333CC] ml-[10px] select-none`}>Каталог</p>
                    <div className={` ${isOpen ? "bg-[url('/img/toUp.svg')]" : "bg-[url('/img/toDawn.svg')]"} w-[16px] h-[9px]  bg-[url('./public/img/toDawn.svg')]`}></div>
                </div>
                <div className="accBottom text-start m-[6px]">
                    <div className="flex">
                        <HeadsetIcon sx={{ color: 'gray' }} />
                        <p className="ml-[5px]">Электроника</p>
                    </div>

                    <div className="flex mt-[10px]">
                        <FaTshirt size={23} color="blue" />
                        <p className="ml-[5px]">Одежда</p>

                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} bg-[#F4F5F5FF] h-[4px] w-full`}></div>

        </>

    );
}

export default Accordion