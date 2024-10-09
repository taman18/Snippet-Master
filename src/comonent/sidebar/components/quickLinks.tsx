"use client";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "@/context/context";

interface QuickLink {
  id: number;
  title: string;
}

interface QuickLinksProps {
  quickLinks: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ quickLinks }) => {
  const context = useContext(MyContext);
  const { signOut } = useClerk();

  const handleQuickLinkClick = (item: QuickLink, index: number) => {
    if (item.title === "Logout") {
      return signOut({ redirectUrl: "/" });
    }
    context?.setActiveLinkIndex(index)
  };

  return (
    <ul className="py-3">
      {quickLinks.map((item, i) => (
        <li
          key={item.id}
          className={`${
            context?.activeLinkIndex === i ? "bg-[#8338EC] text-white" : "text-[#8338EC]"
          } py-1 cursor-pointer rounded-lg w-[150px] px-2`}
          onClick={() => handleQuickLinkClick(item, i)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default QuickLinks;