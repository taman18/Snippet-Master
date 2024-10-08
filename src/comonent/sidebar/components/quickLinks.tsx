"use client";
import { useClerk } from "@clerk/nextjs";
import { useState } from "react";

interface QuickLink {
  id: number;
  title: string;
}

interface QuickLinksProps {
  quickLinks: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ quickLinks }) => {
  const [activeLink, setActiveLink] = useState<{
    value: boolean;
    idx: number;
  }>({
    value: true,
    idx: 0,
  });
  const { signOut } = useClerk();
  const quickLinksBtn = (data: QuickLink, index: number) => {
    console.log(data, index)
    const { title } = data;
    switch (title) {
      case "Logout":
        return signOut({ redirectUrl: "/" });
    }
    setActiveLink({
      value: true,
      idx: index,
    });
  };
  return (
    <>
      <ul className="py-3">
        {quickLinks.map((item, i) => (
          <li
            key={item.id}
            className={`${
              activeLink.value &&
              i === activeLink.idx &&
              " bg-[#8338EC] text-white"
            } text-[#8338EC] py-1 cursor-pointer rounded-lg w-[150px] px-2`}
            onClick={() => quickLinksBtn(item, i)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuickLinks;
