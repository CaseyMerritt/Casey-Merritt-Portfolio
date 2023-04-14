import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.status === 200) {
        alert('Message sent successfully!');
        setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again.');
    }
  };

  return(
    <div id='contact' className='w-full h-auto bg-gray-800'>
        <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
            <p className='text-3xl px-10 tracking-widest uppercase text-white'>Contact Me</p>
            <div className='gird lg:grid-cols-5 gap-8'>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 p-10 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm text-white'>Name</label>
                    <input onChange={handleChange} value={formState.name} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase py-2 text-sm text-white'>Phone Number</label>
                    <input onChange={handleChange} value={formState.phone} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='phone'/>
                </div>
            </div>
            <div className='flex flex-col px-10 py-2'>
                    <label className='uppercase py-2 text-sm text-white'>Email</label>
                    <input onChange={handleChange} value={formState.email} className='border-2 rounded-lg p-3 flex border-gray-300' type="email" id='email'/>
            </div>
            <div className='flex flex-col px-10 py-2'>
                    <label className='uppercase py-2 text-sm text-white'>Subject</label>
                    <input onChange={handleChange} value={formState.subject} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" id='subject'/>
                </div>
                <div className='flex flex-col px-10 py-2'>
                    <label className='uppercase py-2 text-sm text-white'>Message</label>
                    <textarea onChange={handleChange} value={formState.message} className='border-2 rounded-lg p-3 border-gray-300' rows={10} id='message'></textarea>
            </div>
            
            <div className='px-10'>
                <button className='w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md p-4 mt-4'>Send Message</button>
            </div>
        </form>

        <div className='text-5xl flex justify-center gap-16 py-10 text-white'>
                    <a href = "https://github.com/CaseyMerritt"  target="_blank"><AiFillGithub/></a>
                    <a href = "https://www.youtube.com/channel/UCY2obIB3KYsucwUHBMRWC-w"  target="_blank"><AiFillYoutube/></a>
                    <a href = "https://www.linkedin.com/in/caseymerritt/"  target="_blank"><AiFillLinkedin/></a>
        </div>
    </div>
)
}
export default Contact