"use client";
import Sidebar from "@/comonent/sidebar/index";
import UsersInfo from "@/container/UsersInfo";
import TagsListing from "@/container/tagsListing";
import React from "react";
import { useContext } from "react";
import { MyContext } from "@/context/context";
import CodeSnippetListing from "@/container/codeSnippetListing";
import AddSnippetSection from "@/container/addSnippetSection";

const Dashboard: React.FC = () => {
  const context = useContext(MyContext);
  const favouriteData = context?.codeSnippet.filter((item) => {
    return !!item.isFavorite;
  });
  return (
    <>
      <section className="flex">
        <Sidebar />
        <section
          className={`p-4 ${
            context?.darkTheme ? "bg-[#F1F5F9]" : "bg-[#334155]"
          } `}
        >
          <UsersInfo />
          <TagsListing />
          <section className="flex bg-[url(https://snippet.utkarsh.app/no-items-found.webp)] bg-no-repeat	h-[600px] bg-center">
            {!!context?.codeSnippet.length && context?.activeLink[0].isActive === true  && (
              <CodeSnippetListing data={context?.codeSnippet} />
            )}
            {!!favouriteData && context?.activeLink[1].isActive === true && (
              <CodeSnippetListing data={favouriteData} />
            )}
            {!!context?.codeSnippet.length && context?.activeLink[2].isActive === true && (
              <CodeSnippetListing data={context?.trashData} />
            )}
            {context?.showAddSnippetSection && <AddSnippetSection />}
          </section>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
