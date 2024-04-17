import { ListItem } from "./";

import {
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
} from "../../ui/navigation-menu"

interface Props {
    groupItem: {
        title: string;
        items: {
            href: string;
            title: string;
            description: string;
        }[];
    };

}

export const NavMenuGroup = ({ groupItem }: Props) => (
    <>
        <NavigationMenuItem>
            <NavigationMenuTrigger>{groupItem.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {groupItem.items.map((item, index) => (
                        <ListItem
                            href={item.href}
                            key={index}
                            title={item.title}>
                            {item.description}
                        </ListItem>

                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    </>
);