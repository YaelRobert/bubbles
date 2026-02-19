import Image from "next/image";
import { sanityClient, urlFor } from "@/app/lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card } from "@/components/ui/card";

async function getData() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
    title,
    shortDescription,
    "currentslug": slug.current,
    image
  }`;

  const data = await sanityClient.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.image).url()} className="rounded-t-lg h-[200px] object-cover" alt='image' width={500} height={300} />
        </Card>
      ))}
    </div>
  );
}
