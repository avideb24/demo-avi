"use client";

import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaHandPointRight } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { IoIosCall, IoIosMail } from "react-icons/io";


const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_zxe5yvf';
        const templateID = 'template_pfxts57';
        const publicKey = '7ssjBcqAgnLDx8q0c';

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((result) => {
                console.log('Email sent:', result.text);
                toast.success('Message Sent!');
                e.target.reset();
            })
            .catch((error) => {
                toast.error('Failed to send!');
            });
    };

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-x-10 gap-y-4 font-bold text-xl pb-8'>
                <div className='flex items-center gap-2'>
                    <h3>Connect Me</h3>
                    <FaHandPointRight className='text-primaryColor rotate-90 md:rotate-0' />
                </div>
                <div className='flex items-center gap-4'>
                    <Link href="tel:+8801723622125" target='_blank'>
                        <IoIosCall className='text-2xl text-[#44a3cf]' />
                    </Link>
                    <Link href={'https://wa.me/+8801954516380'} target='_blank'>
                        <FaWhatsapp className='text-2xl text-[#2bb140]' />
                    </Link>
                    <Link href="mailto:devavi24bd@gmail.com" target='_blank'>
                        <IoIosMail className='text-2xl text-[#f36960]' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/avi-debnath-bd/'} target='_blank'>
                        <FaLinkedinIn className='text-2xl text-[#0077af]' />
                    </Link>
                    <Link href={'https://www.facebook.com/profile.php?id=100093367126028'} target='_blank'>
                        <FaFacebookF className='text-[#1095ed]' />
                    </Link>
                    <Link href={'https://x.com/AviDebnathBD'} target='_blank'>
                        <RiTwitterXFill className='text-[#dfd2d2]' />
                    </Link>
                </div>
            </div>

            {/* contact form */}
            <div className="contact-wrapper section-padding">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-content">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 md:px-6 text-secondary'>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Name"
                                className='px-4 py-2 outline-none text-white'
                                required
                            />
                            <input type="email" name="email" className='px-4 py-2 outline-none text-white' placeholder="E-mail" required />
                            <textarea placeholder="Message" name="message" className='px-4 py-2 h-32 md:col-span-2 resize-none outline-none text-white' required></textarea>
                            <button type='submit' className='bg-primaryColor w-40 py-2 font-bold text-[#191923]'>Send</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;