import { MyContext } from "@/context/context";
import React, { useContext, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import Overlay from "./Overlay";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTagModal: React.FC = () => {
  const context = useContext(MyContext);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const closeModal = () => {
    context?.setShowTagModal((prev: boolean) => !prev);
  };

  const validateTag = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue?.trim().length) {
      return true;
    }
    return false;
  };

  const addTagBtn = () => {
    const value: string | undefined = inputRef?.current?.value;
    if (!validateTag()) {
      toast.warn("Please Fill all the Data", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      if (context) {
        if (typeof value === "string") {
          const updatedTagsData = [...context.tagsData, value];
          context.setTagsData(updatedTagsData);
          closeModal();
        }
      } else {
        console.error("Context is undefined");
      }
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        context?.setShowTagModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [context]);
  return (
    <>
      <ToastContainer />
      <Overlay onClick={() => context?.setShowTagModal(false)} />
      <section
        className={`min-w-[400px] min-h-[200px] flex flex-col justify-between p-3 ${
          context?.darkTheme ? "bg-white" : "bg-[#0F172A]"
        } fixed p-5 rounded-lg shadow-lg z-50`}
        ref={modalRef}
      >
        <div className="flex justify-between">
          <h1
            className={`font-bold text-xl ${
              context?.darkTheme ? "text-[#94A3B7]" : "text-[#FFFFFF]"
            }`}
          >
            Add new tag
          </h1>
          <span className="cursor-pointer" onClick={closeModal}>
            <RxCross2
              className={`${context?.darkTheme ? "text-black" : "text-white"}`}
            />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#94A3B7] font-medium mb-1">Tag Name</span>
          <input
            type="text"
            placeholder="For Example, Login Form"
            className={`py-1 px-2 border rounded outline:none focus:outline-none ${
              context?.darkTheme
                ? "bg-white text-black"
                : "bg-[#334155] text-white"
            }`}
            ref={inputRef}
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`py-2 px-3 border rounded-lg mr-1 w-[200px] ${
              context?.darkTheme ? "text-black" : "text-white"
            }`}
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="py-2 px-3 border rounded-lg text-white bg-[#8338EC] ml-1 w-[200px]"
            type="submit"
            onClick={addTagBtn}
          >
            Add tag
          </button>
        </div>
      </section>
    </>
  );
};

export default AddTagModal;
