"use client";
import Image from "next/image";
import React, { useState } from "react";
import HomePageCards from "./HomePageCards";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomePageCards
        img="/icons/add-meeting.svg"
        title="New Meeting"
        desp="Start an instant meeting"
        className="bg-orange-400"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomePageCards
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        desp="Plan your meeting"
        className="bg-blue-400"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomePageCards
        img="/icons/recordings.svg"
        title="View Recordings"
        desp="Check your recordings"
        className="bg-purple-400"
        handleClick={() => router.push('/recordings')}
      />
      <HomePageCards
        img="/icons/add-meeting.svg"
        title="New Meeting"
        desp="Start an instant meeting"
        className="bg-yellow-400"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      
      

    </section>
  );
};

export default MeetingTypeList;
