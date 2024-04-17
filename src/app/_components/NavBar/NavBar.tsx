"use client";

import { menuItems, NavMenuGroup, ProfileButton } from "./components";
import {
    NavigationMenu,
    NavigationMenuList,
} from "../ui/navigation-menu";

export const NavBar = () => (
    <NavigationMenu>
        <NavigationMenuList className="flex justify-between p-4 w-full">
            <div className="flex space-x-10">
                {menuItems.map((groupItem, index) => (
                    <NavMenuGroup
                        groupItem={groupItem}
                        key={index} />
                ))}
                <ProfileButton />
            </div>
        </NavigationMenuList>
    </NavigationMenu>
);