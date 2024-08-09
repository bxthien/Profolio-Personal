import ProfileCard from "./ProfileCard";

const TeamWork = () => {
  return (
    <div className="p-6 flex flex-col text-white h-auto justify-center mt-20">
      <div className="uppercase font-bold text-4xl flex items-center justify-center">
        Teamwork
      </div>
      <div className="flex items-center justify-center text-3xl font-bold mt-4 bg-gradient-to-b from-[rgb(168,76,192)] to-[#2453A5] text-transparent bg-clip-text">
        What Our Team Say
      </div>
      <div className="container mx-auto py-8">
        <ProfileCard />
      </div>
    </div>
  );
};

export default TeamWork;
