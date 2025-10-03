import { RiPlayListLine } from "react-icons/ri";
import TitleSection from "./TitleSection";
import ItemsAlbum from "../../../components/ui/ItemsAlbum";
import { getPlaylistTopIndo } from "../../../api";
import { useEffect, useState } from "react";
import { SpotifyPlaylist } from "../../../api";
export default function SectionTopPlaylistIndonesia() {
  const [playlist, setPlaylist] = useState<SpotifyPlaylist[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlaylistTopIndo();
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
      <TitleSection Icon={RiPlayListLine} label="Top Playlist Indonesia" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? (
          <p className="text-gray-400">Loading playlists...</p>
        ) : (
          playlist.slice(0, 4).map((item) => <ItemsAlbum items={item} />)
        )}
      </div>
    </div>
  );
}
