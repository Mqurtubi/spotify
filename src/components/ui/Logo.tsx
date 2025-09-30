import { LuMusic } from "react-icons/lu";

export default function Logo(){
    return(
        <div className="flex text-2xl items-center space-x-5">
            <LuMusic className="text-cyan-300 drop-shadow-xl drop-shadow-cyan-600"/>
            <p className="font-bold bg-gradient-to-r from-cyan-300 to-slate-400  bg-clip-text text-transparent">MusicStream</p>
        </div>
    )
}