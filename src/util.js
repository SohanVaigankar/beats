import { v4 } from "uuid";

function MusicPlaylist() {
  return [
    {
      name: "Own",
      cover: "https://cdn.pixabay.com/audio/2022/10/05/02-12-02-660_200x200.jpeg",
      artist: "coma-media",
      audio: "https://cdn.pixabay.com/audio/2022/08/20/audio_53e3aedf91.mp3",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: true,
    },
    {
      name: "Forest Lullaby",
      cover: "https://cdn.pixabay.com/user/2022/06/18/09-26-46-83_96x96.png",
      artist: "Lesfm",
      audio: "https://cdn.pixabay.com/audio/2022/05/05/audio_1395e7800f.mp3",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: false,
    },
    {
      name: "NELYMA (Acoustic Version)",
      cover: "https://cdn.pixabay.com/audio/2022/10/05/02-12-02-660_200x200.jpeg",
      artist: "MADiRFAN",
      audio: "https://cdn.pixabay.com/audio/2022/01/17/audio_75d3062d06.mp3",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: false,
    },
    {
      name: "Chill Abstract (Intention)",
      cover: "https://cdn.pixabay.com/audio/2022/10/05/02-12-02-660_200x200.jpeg",
      artist: "coma-media",
      audio: "https://cdn.pixabay.com/audio/2021/12/13/audio_b9c0dc9e48.mp3",
      color: ["#CD607D", "#c94043"],
      id: v4(),
      active: false,
    },
    {
      name: "Morning Garden - Acoustic Chill",
      cover: "https://cdn.pixabay.com/user/2022/06/18/11-10-07-302_48x48.jpg",
      artist: "Olexy",
      audio: "https://cdn.pixabay.com/audio/2022/01/18/audio_ea75bab6d8.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
    {
      name: "Powerful Beat",
      cover: "https://cdn.pixabay.com/audio/2022/10/05/02-12-02-660_200x200.jpeg",
      artist: "penguinmusic",
      audio: "https://cdn.pixabay.com/audio/2022/10/05/audio_686ddcce85.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
  ];
}

export default MusicPlaylist;
