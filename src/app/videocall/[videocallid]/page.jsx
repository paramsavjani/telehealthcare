
"use client";

import { useParams } from "next/navigation";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

export default function Page() {
  const session = useSession();
  const { videocallid } = useParams();
  const meetingContainerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      const appID = 1928020837; // Replace with your actual app ID
      const serverSecret = "d87a208baae29404988f05e04854408c"; // Replace with your actual server secret

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        videocallid,
        "noid",
        session.data?.user?.name
      );

      try {
        const zc = await ZegoUIKitPrebuilt.create(kitToken);
        
        if (zc) {
          zc.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: "Copy Link",
                url: `http://localhost:3000/videocall/${videocallid}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
          });
        } else {
          console.error("ZegoUIKitPrebuilt.create did not return a valid object");
        }
      } catch (error) {
        console.error("Error creating ZegoUIKitPrebuilt instance:", error);
      }
    };

    if (meetingContainerRef.current) {
      myMeeting(meetingContainerRef.current);
    }
  }, [videocallid, session]);

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-100 to-blue-300 flex justify-center items-center">
      <div ref={meetingContainerRef} className="h-full w-full" />
    </div>
  );
}
