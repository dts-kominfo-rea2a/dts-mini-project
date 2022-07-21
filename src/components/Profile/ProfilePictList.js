import Cocuk from "../../assets/profile/cocuk.png";
import Kemal from "../../assets/profile/kemal.png";
import Murat from "../../assets/profile/murat.png";
import Umut from "../../assets/profile/umut.png";
import Add from "../../assets/profile/add.png";
import { useState } from "react";
import PopUpChange from "../uiComponents/popups/PopUpChange";
import PopUpChangeSuccess from "../uiComponents/popups/PopUpChangeSuccess";

const ProfilePictList = () => {
  const [isChange, setIsChange] = useState(false);
  const [isChangeSuccess, setIsChangeSuccess] = useState(false);
  const [data, setData] = useState();
  const imageData = localStorage.getItem("profile");

  const [imageBase64, setImageBase64] = useState();

  // first image
  const [firstImagePreview, setFirstImagePreview] = useState("");

  // base64 image
  async function fileBase64(image) {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.onerror = reject;
      fileReader.onload = function () {
        setData(fileReader.result);
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(image);
    });
  }

  // read file input
  const readFile = async (event) => {
    let imageUrl = {
      [event.target.name]: URL.createObjectURL(event.target.files[0]),
    };
    await fileBase64(event.target.files[0]);
    setFirstImagePreview(imageUrl.photo);
    setTimeout(() => {
      setIsChange(true);
    }, 3000);
  };

  const changeHandler = (data) => {
    setIsChange(true);
    setData(data);
    console.log(data);
  };
  const confirmHandler = () => {
    setIsChange(false);
    setProfileHandler(data);
  };
  const setProfileHandler = (data) => {
    setIsChangeSuccess(true);
    localStorage.setItem("profile", data);
    setTimeout(() => {
      setIsChangeSuccess(false);
    }, 3000);
  };
  return (
    <div className="flex flex-wrap gap-x-8">
      <button
        onClick={() => changeHandler(Murat)}
        className="flex flex-col gap-y-3 items-center"
      >
        <img src={Murat} alt="" />
        <p className="text-2xl text-[#6D6D6EB2]">Murat</p>
      </button>
      <button
        onClick={() => changeHandler(Umut)}
        className="flex flex-col gap-y-3 items-center"
      >
        <img src={Umut} alt="" />
        <p className="text-2xl text-[#6D6D6EB2]">Umut</p>
      </button>
      <button
        onClick={() => changeHandler(Kemal)}
        className="flex flex-col gap-y-3 items-center"
      >
        <img src={Kemal} alt="" />
        <p className="text-2xl text-[#6D6D6EB2]">Murat</p>
      </button>
      <button
        onClick={() => changeHandler(Cocuk)}
        className="flex flex-col gap-y-3 items-center"
      >
        <img src={Cocuk} alt="" />
        <p className="text-2xl text-[#6D6D6EB2]">Çocuk</p>
      </button>
      {imageData && (
        <div className="flex flex-col gap-y-3 items-center">
          <img
            src={imageData}
            alt=""
            className="w-[200px] h-[200px] object-cover"
          />
          <p className="text-2xl text-[#6D6D6EB2]">Current</p>
        </div>
      )}
      <label
        htmlFor="upload-image-1"
        className="flex flex-col gap-y-3 items-center"
      >
        {!firstImagePreview && <img src={Add} alt="" />}
        {firstImagePreview && (
          <img
            src={firstImagePreview}
            alt=""
            className="w-[200px] h-[200px] object-cover"
          />
        )}
        <p className="text-2xl text-[#6D6D6EB2]">Other</p>
      </label>
      <input
        onChange={(event) => readFile(event, "gambar 1")}
        type="file"
        name="photo"
        id="upload-image-1"
        hidden
      />
      {isChange && (
        <PopUpChange
          display={isChange}
          close={() => setIsChange(false)}
          confirm={confirmHandler}
        />
      )}
      {isChangeSuccess && <PopUpChangeSuccess display={isChangeSuccess} />}
    </div>
  );
};

export default ProfilePictList;
