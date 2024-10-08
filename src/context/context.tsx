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
  }
  interface MyProviderProps {
    children: ReactNode;
  }

  export const MyContext = createContext<MyContextType | undefined>(undefined);
  const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [showAddTagModal, setShowTagModal] = useState<boolean>(false);
    const [tagsData, setTagsData] = useState<string[]>(['All']);
    const [showAddSnippetSection, setShowAddSnippetSection] = useState<boolean>(false);
    const [darkTheme, setDarkTheme] = useState<boolean>(true);
  
    return (
      <MyContext.Provider value={{ showAddTagModal, setShowTagModal, tagsData, setTagsData, showAddSnippetSection, setShowAddSnippetSection, darkTheme, setDarkTheme }}>
        {children}
      </MyContext.Provider>
    );
  };
  
  export default MyProvider;