import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 531602696;
        const serverSecret = "0befe57598ecff59254825270dd6ee0b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Akhil K"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                { name: "Copy Link", url: `http://localhost:3001/room/${roomId}` },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        });
    };
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
};

export default RoomPage;
