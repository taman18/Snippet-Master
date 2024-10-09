"use client";
import SnippetMasterLogo from "../snippetMasterLogo";
import QuickLinks from "./components/quickLinks";
import { SIDEBAR_ITEMS1, SIDEBAR_ITEMS2 } from "@/utils/mockData";
import { useContext } from "react";
import { MyContext } from "@/context/context";
import LanguageCount from "@/container/languageCount";

const Sidebar: React.FC = () => {
  const context = useContext(MyContext);
  return (
    <>
      <section className={`h-screen max-w-[250px] ${context?.darkTheme ? "bg-[#FFFFFF]" : "bg-[#1E293B]"}`}>
        <section className="flex flex-col min-h-[500px] justify-between">
          <span className="flex p-4">
            <SnippetMasterLogo />
          </span>

          <div className="p-4 ">
            <span className="text-[#94A3B8] font-bold text-base">
              Quick Links
            </span>
            <QuickLinks quickLinks={SIDEBAR_ITEMS1} />
          </div>
          <div className="p-4">
            <QuickLinks quickLinks={SIDEBAR_ITEMS2} />
          </div>
          <span className="text-[#94A3B8] font-bold text-base p-4">
            Languages
          </span>
          <LanguageCount />
        </section>
      </section>
    </>
  );
};

export default Sidebar;
