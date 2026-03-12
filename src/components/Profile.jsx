import React from "react";

const Profile = ({ e, id, alldata, setallData }) => {
  function deleteHandler() {
    let prevData = [...alldata];
    prevData.splice(id, 1);
    setallData(prevData);
  }
  return (
    <div>
      <div className="w-60 shrink-0 h-90 flex flex-col items-center justify-center py-9 gap-5 bg-white rounded">
        <div className="w-20 h-60 overflow-hidden rounded-full bg-amber-400">
          <img
            className="w-[100%] h-[100%] rounded-full bg-cover border-4 border-cyan-600"
            src={e.img}
            alt=""
          />
        </div>
        <h1 className="text-2xl font-bold">{e.name}</h1>
        <h2>{e.mobile}</h2>
        <div className="flex items-center gap-4">
          <button className="bg-amber-500 border-2 border-black text-xl rounded-full text-white px-3 py-0.5">
            Message
          </button>
          <button className="text-white border-black rounded-full text-xl bg-green-600 py-0.5 border-2 px-3">
            Call
          </button>
        </div>
        <h1
          onClick={deleteHandler}
          className=" font-bold text-xl cursor-pointer active:scale-95 bg-red-600 text-white px-2 py-0.5 rounded "
        >
          Remove
        </h1>
      </div>
    </div>
  );
};

export default Profile;
