import { Autocomplete, TextField } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useContext, useRef, useState } from "react";
import { MyContext } from "@/context/context";
import { LANGUAGES } from "@/utils/mockData";
import { FaRegCopy } from "react-icons/fa6";
import { LuCopyCheck } from "react-icons/lu";

const AddSnippetSection: React.FC = () => {
  const [showCopyIcon, setShowCopyIcon] = useState(true);
  const context = useContext(MyContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const codeRef = useRef<HTMLTextAreaElement>(null);
  const lanRef = useRef<HTMLDivElement | null>(null);

  const closeAddSnippetSection = () => {
    context?.setShowAddSnippetSection(false);
  };
  const addCodeSnippetbtn = () => {};
  const copyText = async () => {
    if (codeRef.current)
      try {
        await navigator.clipboard.writeText(codeRef.current.value);
        setShowCopyIcon(false);
        setTimeout(() => {
          setShowCopyIcon(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
  };
  return (
    <>
      <section
        className={`shadow-2xl rounded-lg flex flex-col min-w-[700px] ${
          context?.darkTheme
            ? "bg-white border"
            : "bg-[#1E293B] border border-white"
        } p-4 min-h-[700px]`}
      >
        <div className="flex justify-between">
          <span>
            <input
              type="text"
              className={`focus:border-none rounded focus:outline-none p-2 mb-2 font-medium text-2xl text-[grey] ${
                context?.darkTheme ? "bg-white" : "bg-[#1E293B]"
              }`}
              placeholder="New Title"
              ref={titleRef}
            />
          </span>
          <span className="cursor-pointer" onClick={closeAddSnippetSection}>
            <RxCross2
              className={`${context?.darkTheme ? "text-black" : "text-white"}`}
            />
          </span>
        </div>
        <span>
          <textarea
            name="newDescription"
            id="newDescription"
            placeholder="New Description"
            ref={descRef}
            className={`border rounded-lg p-2 focus:outline-none w-full my-2 ${
              context?.darkTheme ? "bg-white" : "bg-[#1E293B] text-white"
            }`}
          ></textarea>
        </span>
        <div
          className={`relative border rounded-lg ${
            context?.darkTheme ? "bg-white" : "bg-[#1E293B]"
          }`}
        >
          <span className="absolute top-2 left-2">
            <div className="flex justify-between w-[650px] ">
              <Autocomplete
                disablePortal
                options={LANGUAGES}
                ref={lanRef}
                sx={{
                  width: 300,
                  backgroundColor: context?.darkTheme ? "white" : "#1E293B",
                  borderColor: context?.darkTheme ? "#1E293B" : "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: context?.darkTheme ? "#1E293B" : "white",
                    },
                    "&:hover fieldset": {
                      borderColor: context?.darkTheme ? "#1E293B" : "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: context?.darkTheme ? "#1E293B" : "white",
                    },
                    '& input::placeholder': {
                      color: context?.darkTheme ? 'black' : 'white',
                    },
                  },
                }}
                defaultValue={LANGUAGES[0]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Language"
                    InputProps={{
                      ...params.InputProps,
                      style: {
                        color: context?.darkTheme ? "black" : "white",
                      },
                    }}
                    sx={{
                      backgroundColor: context?.darkTheme ? "white" : "#1E293B",
                      borderColor: context?.darkTheme ? "#1E293B" : "white",
                    }}
                  />
                )}
              />

              <span className="cursor-pointer" onClick={copyText}>
                {showCopyIcon ? (
                  <FaRegCopy
                    size={20}
                    className={`${
                      context?.darkTheme ? "text-black" : "text-white"
                    }`}
                  />
                ) : (
                  <LuCopyCheck
                    size={20}
                    className={`${
                      context?.darkTheme ? "text-black" : "text-white"
                    }`}
                  />
                )}
              </span>
            </div>
          </span>
          <textarea
            name="newDescription"
            ref={codeRef}
            id="newDescription"
            placeholder="Add your code here..."
            rows={10}
            className={`${!showCopyIcon && "outline-dotted"} ${
              context?.darkTheme ? "bg-[white]" : "bg-[#1E293B] text-white  "
            } pt-20 rounded-lg p-2 focus:outline-none w-full text-lg`}
          ></textarea>
        </div>
        <button
          className="p-2 border w-[200px] m-auto bg-[#8338EC] text-white rounded-xl text-xl"
          onClick={addCodeSnippetbtn}
        >
          Add
        </button>
      </section>
    </>
  );
};

export default AddSnippetSection;
