import React from 'react';
import { FaUser ,FaEye} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const MyInfo = () => {

    const myInfo = [
        { key: "Name", value: "Avi Debnath" },
        { key: "Date of Birth", value: "03 August 2001" },
        { key: "Phone", value: "+8801723622125" },
        { key: "Nationality", value: "Bangladeshi" },
        { key: "E-mail", value: "devavi24bd@gmail.com" },
        { key: "Freelance", value: "Available" },
        { key: "Address", value: "Dinajpur, Bangladesh" },
        { key: "Spoken Languages", value: "Bengali, English" },
    ];


    return (
        <>
            <div className='pt-5 pb-6 grid grid-cols-1 xl:grid-cols-2 gap-x-32 text-xs lg:text-sm'>
                {
                    myInfo?.map((info, idx) =>
                        <div key={idx} className='grid grid-cols-2 border-b p-2 border-b-slate-600'>
                            <p className='font-semibold mr-2'>{info?.key}</p>
                            <p>: {info?.value}</p>
                        </div>
                    )
                }
            </div>
            {/* resume button */}
            <div className='w-fit flex items-center border-4 border-primaryColor rounded-md uppercase font-bold text-xl'>
                <p className='px-4 bg-primaryColor py-1 text-primary'>Resume</p>
                <a href='https://drive.google.com/file/d/1Pbdy11lfz22-sf8vK_y4BK8pBnTGzmLO/view?usp=drive_link' target='_blank' className='border-r-4 border-primaryColor px-4 py-2'><FaEye /></a>
                <a href='/resume/Avi_Debnath_Frontend_Dev_Resume.pdf' download className='px-4'><IoMdDownload /></a>
            </div>
        </>
    );
};

export default MyInfo;