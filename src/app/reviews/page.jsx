

import Link from 'next/link'
import Heading from '@/app/components/Heading'
import Image from 'next/image'
import { getReviews } from '../../../lib/reviews'


export const metadata = {
  title: 'Reviews',
}

const ReviewPage = async () => {
    const reviews = await getReviews();
 
  return (
    <>
        <Heading>
            Reviews
        </Heading>
        
            <ul className='flex flex-col gap-3'>
              {reviews.map((review)=>(
                <li className='bg white border rounded shadow w-80 hover:shadow-xl' key={review.id}>
                  <Link href={`/reviews/${review.slug}`}>
                  <Image src={review.image} alt={review.title} width={320} height={180} className='mb-2 rounded-t'/>
                    <h2 className='text-center py-1'>{review.title}</h2>
                    </Link>
                </li>
              ))}
           
            </ul>
        
    </>
  )
}

export default ReviewPage