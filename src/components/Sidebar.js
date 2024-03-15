import React, { useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { AiFillBank } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiLinksFill, RiDashboardFill } from "react-icons/ri";

function Sidebar() {
    const [selectedItem, setSelectedItem] = useState("Bank");

    const handleSelectItem = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className='flex flex-col w-[293px] text-lg border-black border-x h-full border-opacity-30 gap-y-10 pt-7'>
            <div className='w-full pl-8 text-2xl'>
                <IoArrowBack />
            </div>
            <div className='flex flex-col gap-y-10 items-center '>
                <div
                    className={`flex flex-row items-center justify-center space-x-8 py-4 w-full ${selectedItem === 'Dashboard' ? 'bg-[#E4F0EB] text-[#2E8362] ' : 'hover:text-[#2E8362]'}`}
                    onClick={() => handleSelectItem('Dashboard')}
                >
                    <RiDashboardFill />
                    <div>My Dashboard</div>
                    <GrNext />
                </div>
                <div
                    className={`flex flex-row items-center justify-center space-x-11 py-4 w-full ${selectedItem === 'Links' ? 'bg-[#E4F0EB] text-[#2E8362]' : 'hover:text-[#2E8362]'}`}
                    onClick={() => handleSelectItem('Links')}
                >
                    <RiLinksFill />
                    <div>TOTM links</div>
                    <GrNext />
                </div>
                <div
                    className={`flex flex-row items-center justify-center space-x-7 py-4 w-full ${selectedItem === 'Summary' ? 'bg-[#E4F0EB] text-[#2E8362]' : 'hover:text-[#2E8362]'}`}
                    onClick={() => handleSelectItem('Summary')}
                >
                    <CgNotes />
                    <div>Daily Summary</div>
                    <GrNext />
                </div>
                <div
                    className={` flex flex-row items-center justify-center space-x-9 w-full py-4 ${selectedItem === 'Bank' ? 'bg-[#E4F0EB] text-[#2E8362]' : 'hover:text-[#2E8362]'}`}
                    onClick={() => handleSelectItem('Bank')}
                >
                    <AiFillBank />
                    <div>Bank Details</div>
                    <GrNext />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
