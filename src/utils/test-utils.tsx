/**
 * @jest-environment jsdom
 */
import { render, RenderOptions } from "@testing-library/react";
import { ClerkProvider } from "@clerk/nextjs";
const Clerk = require("@clerk/nextjs");

import React, { FC, ReactElement, ReactNode } from "react";


// this isn't actually all the providers, but it covers most of them
// with recoil, it's convenient to pass in custom state on a per-test basis
const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
    <React.StrictMode>
        <ClerkProvider>
            {children}
        </ClerkProvider>
    </React.StrictMode>
);

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
