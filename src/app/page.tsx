import Banner from "@/components/banner";
import Card from "@/components/card";
import Navbar from "@/components/navbar";
import SectionCard from "@/components/section-card";
import { getPopularVideos, getVideos } from "@/lib/videos";
import { m } from "@/lib/magic-client";

const Home = async () => {
  const anime = await getVideos("anime");
  const disney = await getVideos("disney");
  const football = await getVideos("football");
  const popular = await getPopularVideos();
  // console.log(anime);
  return (
    <main className="pb-16">
      {/* <Navbar /> */}
      <Banner title="Manchester by the sea" subtitle="" imageUrl="/static/banner.webp" videoId="abs" />
      <div className="mt-6">
        <SectionCard title="Anime" videos={anime} size="large" />
        <SectionCard title="Football" videos={football} size="small" />
        <SectionCard title="Disney" videos={disney} size="medium" />
        <SectionCard title="Anime" videos={popular} size="small" />
      </div>
    </main>
  )
}

export default Home;

// <div className="border-2 border-blue-400 flex items-center justify-center rounded-md overflow-hidden">
//                     <iframe id="ytplayer" width={"100%"} height={"360"} src={`https://www.youtube.com/embed/${videoId}/?autoplay=0&origin=http://example.com&controls=0&rel=1`}></iframe>
//                   </div>
//                   <div className="pt-6" />
//                   <div className="grid grid-cols-2">
//                     <div className="border-2 border-yellow-500">
//                       <div className="p-2">
//                         <span className="text-emerald-500 font-extrabold text-xl">{video.publishTime}</span>
//                       </div>
//                       <div className="p-2">
//                         <p className="font-extrabold break-words text-xl">
//                           {video.title}
//                         </p>
//                       </div>
//                       <div className="p-2">
//                         <p className="text-xl break-words font-extrabold">
//                           {video.description}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="border-2 border-green-500">
//                       <div className="p-2">
//                         <p className="space-x-1 text-xl font-extrabold">
//                           <span className="text-gray-700">
//                             Cast:
//                           </span>
//                           <span className="break-words">
//                             {video.channelTitle}
//                           </span>
//                         </p>
//                       </div>
//                       <div className="p-2">
//                         <p className="space-x-1 text-xl font-extrabold">
//                           <span className="text-gray-700">
//                             Viewcount:
//                           </span>
//                           <span>
//                             {video.viewCount}
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>