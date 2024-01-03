import { MediaTrack } from "audio_x";

export const createTrack = (audioTrackData: any) => {
  const {
    image,
    downloadUrl,
    name,
    album,
    primaryArtists,
    duration,
    year,
    id,
  } = audioTrackData;
  const track: MediaTrack = {
    id: id,
    artwork: [
      {
        src: image?.[1]?.link, //"https://example.com/image.png",
        name: "image-name",
        sizes: image?.[1].quality, //"512x512",
      },
    ],
    source: downloadUrl?.[4]?.link, //"https://example.com/stream.mp3",
    title: name, //"My Awesome Song",
    album: album.name, //"Awesome Album",
    artist: primaryArtists, //"Amazing Artist",
    comment: "",
    duration: duration, // 309,
    genre: "Pop",
    year: year, //2023,
  };
  return track;
};
