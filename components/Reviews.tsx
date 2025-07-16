import React from 'react'
import StarRating from './ui/StarRating'
import Google from '../assets/google.png'
import Image from 'next/image'


const Reviews = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='font-bold text-3xl text-[#072343]'>EXCELLENT</h2>
                <StarRating value={5} />
                <Image src={Google} alt='' width={120} />
            </div>

            <div>

            </div>
        </div>
    )
}

export default Reviews