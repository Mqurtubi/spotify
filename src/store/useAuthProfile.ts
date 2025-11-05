import {create} from "zustand"
import { getValidTokenAuth, getUserProfile } from "../api"
export const useAuthProfile = create((set)=>({
    authProfile:false,
    profile:null,
    loadingProfile:true,
    setAuthProfile:(authProfile : boolean)=>set({authProfile}),
    setAuthLoadingProfile:(loadingProfile : boolean)=>set({loadingProfile}),
    fetchProfile:async()=>{
        set({loadingProfile:true})
        try {
            const profile = await getUserProfile()
            set({authProfile:true, profile:profile, loadingProfile:false})
        } catch (error) {
            console.log(error)
            set({authProfile:false, profile:null, loadingProfile:false})
        }
    },
    logout:()=>{
        
    }
}))