import Image from "next/image";
import Heading from "@/app/components/Heading"
import Link from "next/link";
import { getFeaturedReview } from "../../lib/reviews";




export default async function Home() {

  const review = await getFeaturedReview();
  // console.log(review)
  return (
    <>
        <Heading>
            Indie Gamer
        </Heading>
        <p className="pb-3">
            Only the best Indie games, reviewed for you.
        </p>

        <div className='bg white border rounded shadow  w-80 sm:w-full hover:shadow-xl'>
          <Link href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row">
          <Image src={review.image} 
          alt={review.title}
          width={320}           
          height={180} className=' rounded-t sm:rounded-l    sm:rounded-r-none'/>
            <h2 className='text-center py-1 font-exo_2 sm:px-2 sm:mb-0'>{review.title}</h2>
            </Link>
        </div>
    </>
  );
}
