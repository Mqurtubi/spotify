import { IconType } from "react-icons";
type TitleSectionProps = {
  Icon: IconType;
  label: string;
};
export default function TitleSection({ Icon, label }: TitleSectionProps) {
  return (
    <div className="flex items-center font-semibold text-2xl space-x-3">
      <Icon className="text-cyan-400 drop-shadow-lg drop-shadow-cyan-400" />
      <p className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
        {label}
      </p>
    </div>
  );
}
