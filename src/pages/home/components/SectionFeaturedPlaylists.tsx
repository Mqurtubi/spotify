import { RiPlayListLine } from "react-icons/ri";
import TitleSection from "./TitleSection";
import ItemsAlbum from "../../../components/ui/ItemsAlbum";
import { getPlaylistFeatured } from "../../../api";
import { useEffect, useState } from "react";
import { SpotifyPlaylist } from "../../../api";
export default function SectionFeaturedPlaylists() {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<SpotifyPlaylist[]>([]);
  useEffect(() => {}, []);
  return (
    <div className="m-5 space-y-5">
      <TitleSection Icon={RiPlayListLine} label="Top Playlist Indonesia" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-5">
        {loading ? (
          <p className="text-gray-400">Loading playlists...</p>
        ) : (
          playlist
            .slice(0, 5)
            .map((item, index) => <ItemsAlbum items={item} key={index} />)
        )}
      </div>
    </div>
  );
}
