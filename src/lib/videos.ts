async function getCommonVideos(url: string) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    //  https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Mob%20Psycho%20100&key=[YOUR_API_KEY]
    const BASE_URL = "https://youtube.googleapis.com/youtube/v3"

    const response = await fetch(`${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`)
    const data = await response.json();

    if (data.error) {
      console.log(data.error);
      return [];
    }

    return data.items.map((item: any) => {
      return {
        title: item.snippet.title,
        imageUrl: item.snippet.thumbnails.high.url,
        id: item.id.videoId ?? item.id,
      }
    })
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getVideos(searchQuery: string) {
  const URL = `search?part=snippet&q=${searchQuery}`;
  return getCommonVideos(URL);
}

async function getPopularVideos() {
  const URL = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`
  return getCommonVideos(URL);
}

export { getVideos, getPopularVideos };