import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PopUpChangeProfile = (props) => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/project-movies/home");
    }, 3000);
  }, []);
  return (
    <div
      className={`${
        props.display ? "block" : "hidden"
      } fixed z-[101] overflow-y-auto top-0 w-full h-full left-0 bg-gray-900 flex justify-center backdrop-blur`}
      style={{ backgroundColor: "rgba(17,24,39, 0.75" }}
    >
      {/* pop up hapus data */}
      <div className="flex flex-col w-auto max-h-fit p-8 m-auto gap-y-6 text-white bg-[#141414] rounded-lg">
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-medium">Profile Update Success</p>
          <p className="text-center">You will be redirected shortly</p>
        </div>
      </div>
    </div>
  );
};
export default PopUpChangeProfile;
