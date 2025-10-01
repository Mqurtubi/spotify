import { PiChartLineUpLight } from "react-icons/pi";
import TitleSection from "./TitleSection";
export default function SectionTopChart() {
  return (
    <div className="mx-5">
      <TitleSection Icon={PiChartLineUpLight} label="Top Album" />
      <div>
        <div></div>
      </div>
    </div>
  );
}
