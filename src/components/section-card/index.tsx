import { SectionCard } from "@/types/netflix-types";
import Link from "next/link";
import Card from "../card";

const SectionCard: React.FC<SectionCard> = (props) => {
  const { title, videos, size } = props;

  return (
    <section className="text-blue-500 bg-black px-4">
      <h2 className="text-white font-bold text-[32px]">
        {title}
      </h2>
      <div className="flex pt-[1.75rem] pb-[1.5rem] mt-[1.5rem] mr-[0.75rem] overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden">
        {videos?.map((video) => {
          return (
            <Link href={{
              pathname: `/video`,
              query: { videoId: video.id }
            }}>
              <Card key={video.id} id={parseInt(video.id)} size={size} imageUrl={video.imageUrl} shouldScale={true} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SectionCard;