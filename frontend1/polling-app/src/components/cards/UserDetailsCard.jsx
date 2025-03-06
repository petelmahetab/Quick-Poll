import React from "react";
import CharAvatar from "./CharAvatar";

const StatsInfo = ({ label, value }) => {
  return (
    <div className="text-center">
      <p className="font-medium text-white">{value}</p>
      <p className="text-xs text-white mt-[2px]">{label}</p>
    </div>
  );
};

const UserDetailsCard = ({
  profileImageUrl,
  fullname,
  username,
  totalPollsVotes,
  totalPollsCreated,
  totalPollsBookmarked,
}) => {
  return (
    <div className="bg-black rounded-lg mt-16 overflow-hidden">
      <div className="w-full h-32 bg-profile-bg--img bg-cover flex justify-center bg-green-300 relative">
        <div className="absolute -bottom-10 rounded-full overflow-hidden border-4 border-green-500 ">
          {profileImageUrl ? (
            <img
              src={profileImageUrl || ""}
              alt="Profile Image"
              className="w-20 h-20 bg-slate-800 rounded-full"
            />
          ) : (
            <CharAvatar
              fullName={fullname}
              width="w-20"
              height="h-20"
              style="text-xl"
              
            />
          )}
        </div>
      </div>

      <div className="mt-12 px-5">
        <div className="text-center pt-1">
          <h5 className="text-lg text-white font-medium leading-6">
            {fullname}
          </h5>
          <span className="text-[13px] font-medium text-white">
            @{username}
          </span>
        </div>

        <div className="flex items-center justify-center gap-5 flex-wrap my-6">
          <StatsInfo label="Polls Created" value={totalPollsCreated || 0} />
          <StatsInfo label="Polls Voted" value={totalPollsVotes || 0} />
          <StatsInfo
            label="Polls Bookmarked"
            value={totalPollsBookmarked || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
