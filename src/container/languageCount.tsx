import React, { useEffect, useState, useContext } from "react";
import { MyContext } from "@/context/context";

const LanguageCount = () => {
  const context = useContext(MyContext);
  const [countObj, setCountObj] = useState<{ [key: string]: number }>({});

  const calculateCount = () => {
    const tempCountObj: { [key: string]: number } = {};
    context?.codeSnippet.forEach((item) => {
      if (tempCountObj[item.lang]) {
        tempCountObj[item.lang]++;
      } else {
        tempCountObj[item.lang] = 1;
      }
    });
    setCountObj(tempCountObj);
  };

  useEffect(() => {
    calculateCount();
  }, [context?.codeSnippet.length]);
  return (
    <ul className="p-4">
      {Object.entries(countObj).map(([lang, count]) => (
        <li key={lang} className={`${
            context?.darkTheme ? "text-black" : "text-white"
          }`}>
          {lang}: {count}
        </li>
      ))}
    </ul>
  );
};

export default LanguageCount;
