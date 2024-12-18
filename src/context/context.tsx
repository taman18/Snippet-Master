"use client";
import { createContext, ReactNode } from "react";
import React, { useState } from "react";
import { SIDEBAR_ITEMS1, SIDEBAR_ITEMS2 } from "@/utils/mockData";

interface SideBar {
  id: number;
  title: string;
  isActive: boolean;
}

interface MyContextType {
  showAddTagModal: boolean;
  setShowTagModal: React.Dispatch<React.SetStateAction<boolean>>;
  tagsData: string[];
  setTagsData: React.Dispatch<React.SetStateAction<string[]>>;
  showAddSnippetSection: boolean;
  setShowAddSnippetSection: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  codeSnippet: CodeSnippetType[];
  setCodeSnippet: React.Dispatch<React.SetStateAction<CodeSnippetType[]>>;
  trashData: CodeSnippetType[];
  setTrashData: React.Dispatch<React.SetStateAction<CodeSnippetType[]>>;
  activeLink: SideBar[];
  setActiveLink: React.Dispatch<React.SetStateAction<SideBar[]>>;
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  agreeToDelete: boolean;
  setAgreeToDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
interface MyProviderProps {
  children: ReactNode;
}

interface CodeSnippetType {
  id: number;
  title: string;
  desc: string;
  lang: string;
  code: string;
  date: string;
  isFavorite: boolean;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [showAddTagModal, setShowTagModal] = useState<boolean>(false);
  const [tagsData, setTagsData] = useState<string[]>(["All"]);
  const [showAddSnippetSection, setShowAddSnippetSection] =
    useState<boolean>(false);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippetType[]>([]);
  const [trashData, setTrashData] = useState<CodeSnippetType[]>([]);
  const [activeLink, setActiveLink] = useState<SideBar[]>(SIDEBAR_ITEMS1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [agreeToDelete, setAgreeToDelete] = useState<boolean>(false);
  return (
    <MyContext.Provider
      value={{
        showAddTagModal,
        setShowTagModal,
        tagsData,
        setTagsData,
        showAddSnippetSection,
        setShowAddSnippetSection,
        darkTheme,
        setDarkTheme,
        codeSnippet,
        setCodeSnippet,
        trashData,
        setTrashData,
        activeLink,
        setActiveLink,
        showDeleteModal,
        setShowDeleteModal,
        agreeToDelete,
        setAgreeToDelete,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
