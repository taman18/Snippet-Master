"use client";
import { useUser } from "@clerk/nextjs";
import { ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "@/context/context";


const UsersInfo: React.FC = () => {
    const context = useContext(MyContext);
    const changeTheme = (event: ChangeEvent<HTMLInputElement>) => {
        context?.setDarkTheme((prev:boolean) => !prev);
    }
    const addSnippet = () => {
        context?.setShowAddSnippetSection(true);
    }
  const { user } = useUser();
  return (
    <>
      <div className={`p-4 flex justify-between ${context?.darkTheme ? "bg-white" : "bg-[#1E293B]"} rounded-lg items-center w-[calc(100vw-285px)]`}>
        <div className="flex items-center">
          <img
            src={user?.imageUrl}
            alt="user's image"
            height="40px"
            width="40px"
            className="rounded-3xl"
          />
          <span className="px-3">
            <p className={`font-bold ${context?.darkTheme ? "text-black" : "text-white"}`}>{user?.fullName}</p>
            <p className={`${context?.darkTheme ? "text-[#64748B]" : "text-[#94A3B8]"} text-sm`}>
              {user?.emailAddresses[0]?.emailAddress}
            </p>
          </span>
        </div>

        <section className="relative">
            <input type="text" className={` px-8 py-2 rounded-3xl focus:outline-none ${context?.darkTheme ? "bg-[#F1F5F9] text-black" : "bg-[#334155] text-white"}`} placeholder="Search a Snippet" />
            <span>
            <FaSearch className="absolute inset-y-0 start-2 top-3 flex items-center" fill="#8338EC" />
            </span>
            <button className="absolute inset-y-0 end-1 flex items-center rounded-2xl px-4 cursor-pointer bg-[#8338EC] text-white my-1" onClick={addSnippet}>
                <FaPlus />
                <span>Snippet</span>
            </button>
        </section>

        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={(event) => changeTheme(event)} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default UsersInfo;
