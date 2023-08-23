import ProfileTitle from "./../components/Profile/ProfileTitle";
import ProfilePictList from "./../components/Profile/ProfilePictList";
import Movies from "./../assets/logo/movies.jpg";

const Profile = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#141414]">
      <div className="fixed flex w-full top-0 left-0 p-8">
        <img src={Movies} alt="" className="w-[40px]" />
      </div>
      <div className="flex flex-col gap-y-14 w-full h-auto items-center justify-center">
        {/* title */}
        <ProfileTitle />
        {/* profile image choose */}
        <ProfilePictList />
        <button className="flex w-[301px] h-[51px] text-[#808080] border border-[#808080]">
          <p className="m-auto text-2xl">MANAGE PROFILE</p>
        </button>
      </div>
    </div>
  );
};

export default Profile;