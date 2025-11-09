import { RiPlayListLine } from "react-icons/ri";
import TitleSection from "./TitleSection";
import ItemsAlbum from "../../../components/ui/ItemsAlbum";
import { getPlaylistTopGlobal } from "../../../api";
import { useEffect, useState } from "react";
import { SpotifyPlaylist } from "../../../api";
export default function SectionTopPlaylistGlobal() {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlaylistTopGlobal();
      const items = data.playlists.items.filter(
        (item: object) => item !== null
      );
      setPlaylist(items);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="m-5 space-y-5">
      <TitleSection Icon={RiPlayListLine} label="Top Playlist Global" />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
