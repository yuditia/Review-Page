import React from 'react'
import Heading from '@/app/components/Heading'
import Image from 'next/image'
import { getReview } from '../../../../lib/reviews';
import ShareLinkButton from '@/app/components/ShareLinkButton';

export async function generateMetadata({params : {slug}}) {
  const review = await getReview(slug);
  return {
    title: review.title,
  }
}

  const  ReviewPage = async ({params : {slug}}) => {
    const review = await getReview(slug);

    

  return (
    <>
        <Heading >
            {review.title}
        </Heading>
        <div className='flex gap-3 items-baseline'>
          <p className='pb-2 italic'>{review.date}</p>
          <ShareLinkButton />

        </div>
     
        <Image src={review.image} alt='stardew-valley' width={640} height={360} className='mb-2 rounded'/>
        
        <article dangerouslySetInnerHTML={{__html: review.body}}
        className='prose max-w-screen-sm prose-slate' 
        />
    </>
  )
}

export default ReviewPage