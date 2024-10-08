"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SnippetMasterLogo from "../snippetMasterLogo";

const Navbar = () => {
  return (
    <>
      <section>
        <nav className="p-4 flex justify-between flex-wrap items-center">
          <span className="flex">
           <SnippetMasterLogo />
          </span>
          <span>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </span>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
