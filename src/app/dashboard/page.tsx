"use client";
import Sidebar from "@/comonent/sidebar/index";
import UsersInfo from "@/container/UsersInfo";
import TagsListing from "@/container/tagsListing";
import React from "react";
import { useContext } from "react";
import { MyContext } from "@/context/context";

const Dashboard: React.FC = () => {
  const context = useContext(MyContext);
  return (
    <>
      <section className="flex">
        <Sidebar />
        <section className={`p-4 ${context?.darkTheme ? "bg-[#F1F5F9]" : "bg-[#334155]"} `}>
          <UsersInfo />
          <TagsListing />
          
        </section>
      </section>
    </>
  );
};

export default Dashboard;
