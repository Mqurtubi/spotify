import Logo from "../ui/Logo"
import menu from "./menu"
export default function Navbar(){
    return(
        <div className="bg-slate-900 text-white flex px-10 py-4">
            <Logo/>
            <div className="m-auto text-xl">
                <ul className="flex items-center space-x-10">
                    {menu.map((item,index)=>(
                        <li className="hover:bg-teal-600 hover:text-cyan-300 font-bold px-5 py-2 rounded-xl">{item.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}