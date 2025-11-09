import { useEffect, useState } from "react";
import { getTopArtistsUser } from "../../../api";
import { RiGroupLine } from "react-icons/ri";
import TitleSection from "./TitleSection";
import ItemsArtist from "../../../components/ui/ItemsArtists";
export default function SectionTopArtistsUser() {
  const [topArtist, setTopArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopArtistsUser();
      const artist = data.items;
      setTopArtist(artist);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="m-5 space-y-5">
      <TitleSection Icon={RiGroupLine} label="Your Favorite Artists" />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {loading ? (
          <p>loading...</p>
        ) : (
          topArtist
            .slice(0, 5)
            .map((item, index) => <ItemsArtist items={item} key={index} />)
        )}
      </div>
    </div>
  );
}
