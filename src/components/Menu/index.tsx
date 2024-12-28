"use client";
import { usePathname } from "next/navigation";
import { MenuItem } from "./Item";
import { menuData } from "@/constants/menu";
import { MenuIcon } from "lucide-react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  FileTree,
} from "@/components";
import { mobileNavigation } from "@/constants/fileTrees";

function isRouteActive(href: string, pathname: string) {
  console.log(href, pathname);
  return pathname.includes(href);
}

function Menu() {
  const pathname = usePathname();

  return (
    <>
      <nav id="mobile-menu" className="md:hidden absolute">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>File explorer</DrawerTitle>
              <DrawerDescription className="italic">
                It&apos;s not the best ideia to use an editor in mobile devices
              </DrawerDescription>
            </DrawerHeader>

            <FileTree className="mb-5" files={mobileNavigation} />
          </DrawerContent>
        </Drawer>
      </nav>
      <nav
        id="desktop-menu"
        className="hidden md:flex h-full divide-x-1 max-h-16"
      >
        {menuData.map((item) => (
          <MenuItem
            key={item.label}
            active={isRouteActive(item.href, pathname)}
            href={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </nav>
    </>
  );
}

export { Menu };
