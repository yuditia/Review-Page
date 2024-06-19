import { readdir, readFile} from 'node:fs/promises'
import { marked } from 'marked'
import matter from 'gray-matter'
import { promises as fs } from 'fs';
import path from 'path';


export async function getFeaturedReview(){
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug)
{
  const reviewDir = path.join(process.cwd(), `src/app/content/reviews/${slug}.md`);
  const text = await readFile(reviewDir);
  const { content,data:{title, date, image}}  = matter(text);
  const body = marked(content);
  return {slug,title, date, image, body}
}



export async function getReviews()
{
  const reviewsDir = path.join(process.cwd(), 'src/app/content/reviews');
  const files = await readdir(reviewsDir)
  const slugs = files.filter((file) => file.endsWith('.md'))
  .map((file) => file.slice(0, -'.md'.length));
  const reviews = [];

  for(const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  reviews.sort((a,b) => b.date.localeCompare(a.date));
  

  return reviews;
}