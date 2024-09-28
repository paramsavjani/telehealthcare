"use client"
import { useParams } from "next/navigation" 
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useSession } from "next-auth/react";
export default function page() {
    const session=useSession();
    const {videocallid}=useParams();
    const myMeeting=async (element)=>{
        const appID=1928020837;
        const serverSecret="d87a208baae29404988f05e04854408c";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,videocallid,"noid",session.data?.user?.name);
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:`http://localhost:3000/videocall/${videocallid}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },

        })
    };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  )
}
