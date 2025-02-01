import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Join = () => {
    return (
        <div className="max-w-screen-2xl mx-auto" >
            <div className='flex justify-center mb-4'>
                
                <Image
                    className=''
                    src={'/Vector.png'}
                    alt='shoes banner'
                    width={50}
                    height={20}
                />
            </div>
            <h1 className='text-center font-bold text-[18px] leading-[26px]'>BECOME A NIKE MEMBER</h1>
            <p className='text-center font-normal text-sm leading-[22px] text-[#8D8D8D]'>Create your Nike Member profile and get <br /> first access to the very best of Nike products,<br /> inspiration and community.</p>


            <div className='flex justify-center'>
                <div className='form'>
                    <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2' type="text" placeholder='Email Address' /> <br />

                    <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2' type="text" placeholder='Password' /><br />

                    <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2' type="text" placeholder='First Name' /> <br />

                    <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2' type="text" placeholder='Last Name' /> <br />

                    <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2' type="text" placeholder='Date of Birth' /> <br />

                    <span className='text-sm text-gray-500 pl-2'>Get a Nike Member Reward ever year on your Birthday.</span>

                    <div className='relative'>
                        <input className='border border-[#E5E5E5] w-96 px-5  py-2 my-2 ' type="text" placeholder='India' />

                        <div className='absolute top-4 right-2 text-gray-500'>
                        <ChevronDown />
                        </div>

                    </div>


                    <div className='flex justify-between'>
                        <input className=' border border-[#E5E5E5] w-[180px] px-5  py-2 my-2 ' type="text" placeholder='Male' />
                        <input className='border border-[#E5E5E5] w-[180px] px-5  py-2 my-2 ' type="text" placeholder='Female' />


                    </div>


                    <div >
                        <div className='items-start flex py-4'>
                            <input className=' border border-[#E5E5E5] relative top-[6px]' type="checkbox" />
                            <span className='text-gray-500 px-2'>Sign up for emails to get updates from Nike on <br />
                                products, offers and your Member benefits</span>
                        </div>
                    </div>


                    <div className='flex justify-center'>
                        <p className='text-gray-600 text-center text-[13px] pl-1' >By Creating an Account, you agree to {`Nike's`} <span className='text-gray-500 underline'>Privacy Policy <br /> and Terms of Use.</span> </p>

                    </div>


                    <div className='flex justify-center'>
                        <button className='w-96 bg-black text-white py-3 text-xl rounded-lg mt-6 mb-3'>Join Us</button><br /><br />

                    </div>
                    <div className='flex justify-center items-center pb-5'>
                        <span className='text-gray-500' >Already a member?<Link href={'/signUp'}><span className='text-black underline pl-1'> Sign In.</span></Link></span>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default Join