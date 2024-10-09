import { Autocomplete, TextField } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { SyntheticEvent, useContext, useRef, useState } from "react";
import { MyContext } from "@/context/context";
import { LANGUAGES } from "@/utils/mockData";
import { FaRegCopy } from "react-icons/fa6";
import { LuCopyCheck } from "react-icons/lu";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddSnippetSection: React.FC = () => {
  const [showCopyIcon, setShowCopyIcon] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]?.label);
  const context = useContext(MyContext);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const codeRef = useRef<HTMLTextAreaElement>(null);

  const closeAddSnippetSection = () => {
    context?.setShowAddSnippetSection(false);
  };

  const handleLanguageChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: { label: string } | null
  ) => {
    if (newValue) {
      setSelectedLanguage(newValue?.label);
    }
  };

  const validateAddSnippetSection = () => {
    if (
      !titleRef.current?.value ||
      !descRef.current?.value ||
      !codeRef.current?.value ||
      !selectedLanguage
    ) {
      toast.error('Please Fill all the Data', {
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
      return false;
    }
    const data = context?.codeSnippet;
    data?.push({
      id: data.length,
      title: titleRef.current.value,
      desc: descRef.current.value,
      code: codeRef.current.value,
      lang: selectedLanguage,
      date: new Date().toLocaleString(),
      isFavorite: false,
    });
    if (data) {
      context?.setCodeSnippet(data);
    }
    return true;
  };

  const addCodeSnippetbtn = () => {
    if (validateAddSnippetSection()) {
      context?.setShowAddSnippetSection(false);
    }
  };
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
      <section className="w-full flex justify-end">
      <ToastContainer />
        <section
          className={`shadow-2xl border rounded-lg flex flex-col min-w-[700px] ${
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
                className={`${
                  context?.darkTheme ? "text-black" : "text-white"
                }`}
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
                  onChange={(event, newValue) =>
                    handleLanguageChange(event, newValue)
                  }
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
                      "& input::placeholder": {
                        color: context?.darkTheme ? "black" : "white",
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
                        backgroundColor: context?.darkTheme
                          ? "white"
                          : "#1E293B",
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
                    <span className="flex items-center">
                      <h1
                        className={`${
                          context?.darkTheme ? "text-black" : "text-white"
                        } mr-1`}
                      >
                        copied
                      </h1>
                      <LuCopyCheck
                        size={20}
                        className={`${
                          context?.darkTheme ? "text-black" : "text-white"
                        }`}
                      />
                    </span>
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
      </section>
    </>
  );
};

export default AddSnippetSection;
