export type BannerType = {
  title: string;
  subtitle: string;
  imageUrl: string;
  videoId: string;
}

// export type NavbarType = {
//   userName: string;
// }

export type CardType = {
  id: number
  imageUrl: string;
  size: string;
  shouldScale: boolean;
}

export type Video = {
  title: string;
  id: string;
  imageUrl: string;
}

export type SectionCard = {
  title: string;
  size: string;
  videos: Video[]
}