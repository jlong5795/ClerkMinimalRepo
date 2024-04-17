"use client";

import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";

export const ProfileButton = () => (
    <>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton />
        </SignedOut>
    </>
);