import { render, screen } from "@testing-library/react";

// This was my attempt to wrap the renderer in Clerk context
// import { render } from "~/utils/test-utils";

import { describe, test } from "vitest";
import { NavBar } from "./NavBar";

describe("<NavBar />", () => {
    test("renders without errors", () => {
        render(<NavBar />);
        // expect(screen.getByText("Free Agents")).toBeTruthy();
    });
});
