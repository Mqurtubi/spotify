import TitleSection from "./TitleSection";
import { GoIssueTracks } from "react-icons/go";
import ItemsTrack from "../../../components/ui/ItemsTrack";
import { getTopTracksUser } from "../../../api";
import { useState } from "react";
export default function SectionTopTrackUser() {
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState([]);

  useState(() => {
    const init = async () => {
      const data = await getTopTracksUser();
      setTrack(data.items);
      setLoading(false);
    };
    init();
  }, []);
  return (
    <div className="m-5 space-y-5">
      <TitleSection Icon={GoIssueTracks} label="Your Favorite Tracks" />
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="grid  lg:grid-cols-2  gap-5">
          {track.slice(0, 10).map((item, index) => (
            <ItemsTrack items={item} key={index} number={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
