"use client"
import CodeOrganizer from "@/container/codeOrganizer";
import SnippetFeatureHighlights from "@/container/snippetFeatureHighlights/snippetFeatureHighlights";
import SignUpLoginImage from "@/container/signUpLoginImage/signUpLoginImage";
import Navbar from "@/comonent/navbar/navbar";
import { useContext } from "react";
import { MyContext } from "@/context/context";

const LoginSignUp = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <section className="p-20">
          <CodeOrganizer />
        </section>
        <section className=" flex justify-around flex-wrap">
          <SnippetFeatureHighlights />
          <SignUpLoginImage />
        </section>
      </div>
    </>
  );
};

export default LoginSignUp;
