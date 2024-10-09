"use client";
import React from "react";
import { useContext } from "react";
import { MyContext } from "@/context/context";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface DataProps {
  id: number;
  title: string;
  desc: string;
  lang: string;
  code: string;
  date: string;
  isFavorite: boolean;
}
interface CodeSnippetListingProps {
  data: DataProps[];
}
const CodeSnippetListing: React.FC<CodeSnippetListingProps> = ({ data }) => {
  const context = useContext(MyContext);
  const moveToTrash = (id: number) => {
    const allSnippetData = context?.codeSnippet;
    if (allSnippetData) {
      const trashData = context.trashData;
      const updatedTrash = [...trashData];
      updatedTrash.push(allSnippetData[id]);
      const updatedSnippetData = [...allSnippetData];
      updatedSnippetData.splice(id, 1);
      context?.setCodeSnippet(updatedSnippetData);
      context.setTrashData(updatedTrash);
    }
  };

  const addToFavorite = (id: number) => {
    const allSnippetData = context?.codeSnippet;
    if (allSnippetData) {
      let updatedSnippetData = [...allSnippetData];
      updatedSnippetData[id].isFavorite = !updatedSnippetData[id]?.isFavorite;
      context.setCodeSnippet(updatedSnippetData);
    }
  };
  return (
    <>
      <section className="flex flex-wrap">
        {data.map((item: DataProps) => (
          <div
            key={item?.id}
            className={`flex flex-col justify-between  min-w-[300px] max-h-[150px] p-2 rounded-lg m-2
                 ${context?.darkTheme ? "bg-white" : "bg-[#1E293B]"}`}
          >
            <div className="flex justify-between pt-4">
              <span className={` ${context?.darkTheme ? "text-black" :"text-white"}`}>{item?.title}</span>
              <span
                className={`cursor-pointer ${context?.darkTheme ? "text-black" :"text-white"}`}
                onClick={() => addToFavorite(item.id)}
              >
                <FaRegHeart
                  className={item?.isFavorite ? "text-red-500" : ""}
                />
              </span>
            </div>
            <span className={` ${context?.darkTheme ? "text-black" :"text-white"}`}>{item?.date}</span>
            <div className="flex justify-between">
              <span className={` ${context?.darkTheme ? "text-black" :"text-white"}`}>{item?.lang}</span>
              <span
                className={`cursor-pointer ${context?.darkTheme ? "text-black" :"text-white"}`}
                onClick={() => moveToTrash(item?.id)}
              >
                <RiDeleteBin6Line />
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CodeSnippetListing;