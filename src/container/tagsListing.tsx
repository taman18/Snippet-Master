"use client";
import { FaPlus } from "react-icons/fa6";
import AddTagModal from "./addTagModal";
import { useContext } from "react";
import { MyContext } from "@/context/context";

const TagsListing: React.FC = () => {
  const context = useContext(MyContext);
  const tagsData = context?.tagsData;
  const addTagBtn = () => {
    context?.setShowTagModal((prev: boolean) => !prev);
  };
  return (
    <>
      <section className={`flex justify-between p-4 ${context?.darkTheme ? "bg-white" : "bg-[#1E293B]"} rounded-lg my-4`}>
        <ul className="flex items-center">
          {tagsData?.map((item: string, index: number) => (
            <li
              className={`cursor-pointer px-4 py-1 ${context?.darkTheme ? "text-[#1F2937] bg-[#F3F4F6] " : "text-[#FFFFFF] bg-[#374151]"}  rounded-lg mr-2`}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          className="bg-[#8338E6] text-white rounded-lg py-1 px-3 flex items-center"
          onClick={addTagBtn}
        >
          <FaPlus />
          <span className="ml-1">Tag</span>
        </button>
      </section>
      <section className="flex justify-center">
        {context?.showAddTagModal && <AddTagModal />}
      </section>

    </>
  );
};

export default TagsListing;
