"use client";
import { createContext, ReactNode } from 'react';
import React, { useState } from 'react';

interface MyContextType {
    showAddTagModal: boolean;
    setShowTagModal: React.Dispatch<React.SetStateAction<boolean>>;
    tagsData: string[];
    setTagsData: React.Dispatch<React.SetStateAction<string[]>>
    showAddSnippetSection: boolean;
    setShowAddSnippetSection: React.Dispatch<React.SetStateAction<boolean>>;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
    darkTheme: boolean; 
    codeSnippet: CodeSnippetType[],
    setCodeSnippet:  React.Dispatch<React.SetStateAction<CodeSnippetType[]>>;
    trashData: CodeSnippetType[],
    setTrashData:  React.Dispatch<React.SetStateAction<CodeSnippetType[]>>;
    activeLinkIndex: number;
    setActiveLinkIndex: React.Dispatch<React.SetStateAction<number>>;
  }
  interface MyProviderProps {
    children: ReactNode;
  }

  interface CodeSnippetType {
    id: number, 
    title: string, 
    desc: string, 
    lang: string, 
    code: string,
    date: string,
    isFavorite: boolean
  }

  export const MyContext = createContext<MyContextType | undefined>(undefined);
  const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [showAddTagModal, setShowTagModal] = useState<boolean>(false);
    const [tagsData, setTagsData] = useState<string[]>(['All']);
    const [showAddSnippetSection, setShowAddSnippetSection] = useState<boolean>(false);
    const [darkTheme, setDarkTheme] = useState<boolean>(true);
    const [codeSnippet, setCodeSnippet] = useState<CodeSnippetType[]>([]);
    const [trashData, setTrashData] = useState<CodeSnippetType[]>([]);
    const [activeLinkIndex, setActiveLinkIndex] = useState<number>(0);
    return (
      <MyContext.Provider value={{ showAddTagModal, setShowTagModal, tagsData, setTagsData, showAddSnippetSection, setShowAddSnippetSection, darkTheme, setDarkTheme, codeSnippet, setCodeSnippet, trashData, setTrashData, activeLinkIndex, setActiveLinkIndex }}>
        {children} 
      </MyContext.Provider>
    );
  };
  
  export default MyProvider;