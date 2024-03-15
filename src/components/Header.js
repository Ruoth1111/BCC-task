import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { PiBellRingingBold } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoArrowBack } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { AiFillBank } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiLinksFill, RiDashboardFill } from "react-icons/ri";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState("Home");
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div>
            <div className={`w-full flex flex-row justify-between gap-4 lg:gap-60 text-[20px] font-bold p-4 border border-black border-opacity-30 shadow-md shadow-gray-300 ${sidebarOpen ? 'fixed top-0 left-0 h-full z-50' : 'relative'}`}>
                <div>
                    Logo
                </div>
                <div className="hidden lg:flex flex-row gap-x-24">
                    <div onClick={() => setActiveComponent("Home")} style={{ borderBottom: activeComponent === "Home" ? '5px solid #3AA078' : 'none', cursor: 'pointer', marginBottom: '-18px' }}>Home</div>
                    <div onClick={() => setActiveComponent("Services")} style={{ borderBottom: activeComponent === "Services" ? '5px solid #3AA078' : 'none', cursor: 'pointer', marginBottom: '-18px' }}>Services</div>
                    <div onClick={() => setActiveComponent("Blog")} style={{ borderBottom: activeComponent === "Blog" ? '5px solid #3AA078' : 'none', cursor: 'pointer', marginBottom: '-18px' }}>Blog</div>
                    <div onClick={() => setActiveComponent("Offers")} style={{ borderBottom: activeComponent === "Offers" ? '5px solid #3AA078' : 'none', cursor: 'pointer', marginBottom: '-18px' }}>Offers</div>
                    <div onClick={() => setActiveComponent("About Us")} style={{ borderBottom: activeComponent === "About Us" ? '5px solid #3AA078' : 'none', cursor: 'pointer', marginBottom: '-18px' }}>About Us</div>
                </div>
                <div className="flex items-center">
                    <div
                        className="lg:hidden cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </div>
                    <div className="hidden lg:flex flex-row gap-x-10 text-[20px]">
                        <AiOutlineSearch />
                        <PiBellRingingBold />
                        <VscAccount />
                    </div>
                </div>
                {sidebarOpen && (
                    <div className="lg:hidden absolute top-0 left-0 h-full w-full z-50">
                        <div className="w-full h-full bg-white text-black ">
                            <div
                                className="cursor-pointer mb-4 shadow-md shadow-gray-300 w-full p-4 py-6"
                                onClick={closeSidebar}
                            >
                                <IoArrowBack className="text-2xl" />
                            </div>
                            <div className="flex flex-col ml-5 gap-y-8 mr-6 mt-10">
                                <div className="border-b border-gray-300 flex items-center justify-between hover:text-[#2E8362]">
                                    <div className="flex items-center gap-x-4"><RiDashboardFill />My Dashboard</div>
                                    <div><GrNext className="hover:text-[#2E8362]" /></div>
                                </div>
                                <div className="border-b border-gray-300 flex items-center justify-between hover:text-[#2E8362]">
                                    <div className="flex items-center gap-x-4"><RiLinksFill />TOTM links</div>
                                    <div><GrNext className="hover:text-[#2E8362]" /></div>
                                </div>
                                <div className="border-b border-gray-300 flex items-center justify-between hover:text-[#2E8362]">
                                    <div className="flex items-center gap-x-4"><CgNotes />Daily Summary</div>
                                    <GrNext className="hover:text-[#2E8362]" />
                                </div>
                                <div className="border-b border-gray-300 flex items-center justify-between hover:text-[#2E8362]">
                                    <div className="flex items-center gap-x-4"><AiFillBank />Bank Details</div>
                                    <div><GrNext className="hover:text-[#2E8362]" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

export default Header;
