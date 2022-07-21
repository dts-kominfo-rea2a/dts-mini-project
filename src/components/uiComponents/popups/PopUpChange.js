const PopUpLogout = (props) => {
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
          <p className="text-xl font-medium">Change Profile Picture</p>

          <p>Are you sure want to change your profile ?</p>
        </div>
        <div className="inline-flex w-full justify-end gap-x-4">
          <button
            onClick={props.close}
            className="w-auto px-4 h-[40px] font-normal text-base text-center bg-[#F5F5FF] text-[#103F7B]"
          >
            Back
          </button>
          <button
            onClick={props.confirm}
            className="w-auto px-4 h-[40px] font-normal text-base text-center bg-[#E50913] text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopUpLogout;
