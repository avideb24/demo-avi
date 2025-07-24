"use client";

import "./mobile.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoFolderOutline, IoMailOutline } from "react-icons/io5";
import { useGlobalContext } from "../provider/GlobalProvider";


const MobileButtons = () => {

    const { activeSection, setActiveSection } = useGlobalContext();


    return (
        <div className="w-full h-14 fixed left-0 bottom-0 bg-secondary border-t border-t-slate-600">
            <div className="h-full grid grid-cols-3 items-center gap-4">
                <button onClick={() => setActiveSection("About Me")} className="flex justify-center items-center gap-1">
                    <AiOutlineExclamationCircle />
                    About
                </button>
                <button onClick={() => setActiveSection("My Projects")} className="flex justify-center items-center gap-1">
                    <IoFolderOutline />
                    Projects
                </button>
                <button onClick={() => setActiveSection("Get In Touch")} className="flex justify-center items-center gap-1">
                    <IoMailOutline />
                    Contact
                </button>
            </div>
        </div>
    );
};

export default MobileButtons;