import React from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const now = new Date();
  const time = now
    .toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toUpperCase();
  const date = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className=" flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-2xl bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[270px] rounded py-2 text-center font-normal text-base bg-dark-2 bg-opacity-50">
            Upcoming Meeting at: 10:00 AM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-7xl font-extrabold">{time}</h1>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
