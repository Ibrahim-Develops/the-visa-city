import React from 'react'
import StarRating from './ui/StarRating'
import Image from 'next/image'
import Googles from '../public/google.png'

const Google = () => {
    return (
        <div className="space-y-2 mb-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-[#FFD700]">EXCELLENT</h2>
            <StarRating value={5} />
            <Image src={Googles} alt="Google logo" width={120} />
        </div>
    )
}

export default Google