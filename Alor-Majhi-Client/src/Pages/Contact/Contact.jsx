import { FaHome } from "react-icons/fa";
import { MdLocationPin, MdMarkEmailUnread, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {

    <Helmet>
        <title>Contact Us</title>
    </Helmet>

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_btw5i5g', 'template_cclyiio', form.current, 'gW-EHmZ9wyAir_GYf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className="lg:flex lg:p-32 p-5 lg:mx-32 justify-between">
                <form ref={form} onSubmit={sendEmail} action="">
                    <h2 className="text-3xl font-bold py-8">Send Message</h2>
                    <div className="lg:flex gap-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text uppercase">Your Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name..."
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text uppercase">Your Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email..."
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text uppercase">Subject</span>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject..."
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control my-4">
                        <label className="label">
                            <span className="label-text uppercase">
                                Your Message (optional)
                            </span>
                        </label>
                        <textarea
                            name="msg"
                            placeholder=""
                            className="textarea textarea-bordered textarea-lg w-full"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn">
                        Send Mail
                    </button>
                </form>
                <div className="w-[5px] primary-bg"></div>
                <div className="">
                    <h2 className="text-3xl font-bold py-8">Contact Info</h2>
                    <div className="flex items-center text-2xl gap-3">
                        <MdMarkEmailUnread />
                        <div>
                            <p className="font-bold">E-mail</p>
                            <p>alormajhibd@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center text-2xl gap-3">
                        <MdPhone />
                        <div className="lg:my-10 my-5">
                            <p className="font-bold">Phone</p>
                            <p>01758516069</p>
                        </div>
                    </div>
                    <div className="flex items-center text-2xl gap-3">
                        <MdLocationPin />
                        <div>
                            <p className="font-bold">Address</p>
                            <p>Nimtala,Bandar Chattogram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
