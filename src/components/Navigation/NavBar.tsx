import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { BsHeart } from "react-icons/bs";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "../ui/separator";
import { SlBag } from "react-icons/sl";
import { PiStorefrontLight } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsChevronDown } from "react-icons/bs";
function NavBar() {
  const primaryMenuItems = [
    {
      id: 1,
      name: "Sign In",
      icon: <HiOutlineUser size={26} />,
    },
    {
      id: 2,
      name: "Wishlist",
      icon: <BsHeart size={24} />,
    },
    {
      id: 3,
      name: "My Bag",
      icon: <SlBag size={24} />,
    },
  ];
  return (
    <div>
      <nav>
        <div className="nav-content-wrapper flex gap-10 p-5 px-8">
          <div className="nav-left w-7/12  flex justify-between px-5">
            <div className="logo-wrapper  w-fit flex ">
              <Image
                alt="logo"
                width={85}
                height={85}
                src="/images/logo_coral.svg"
              ></Image>
            </div>
            <div className="search-bar-wrapper w-full  px-10 ">
              <div className="search-bar-div p-2 h-12 flex border border-black  rounded-full ">
                <input
                  className="w-full outline-none "
                  type="text"
                  placeholder="Search for Product or Brand"
                />
                <div className="search-icon flex items-center px-2 ">
                  <CiSearch size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="nav-right flex items-end gap-7">
            <Menubar className="border-none">
              {primaryMenuItems.map((menu) => (
                <MenubarMenu key={menu.id}>
                  <MenubarTrigger className="p-3">
                    <div>
                      <div className="icon flex justify-center">
                        {menu.icon}
                      </div>
                      <div
                        className="icon-subtext "
                        style={{ fontSize: "12px" }}
                      >
                        {menu.name}
                      </div>
                    </div>
                  </MenubarTrigger>
                </MenubarMenu>
              ))}
            </Menubar>
            <Separator
              orientation="vertical"
              className="h-2/3 bg-black w-0.5 "
            />
            <Menubar className="border-none gap-5">
              <MenubarMenu>
                <MenubarTrigger className="p-3">
                  <div>
                    <div className="icon flex justify-center">
                      <PiStorefrontLight size={28} />{" "}
                    </div>
                    <div className="icon-subtext " style={{ fontSize: "12px" }}>
                      Find Store
                    </div>
                  </div>
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <div className="country-selector p-3  flex gap-5">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src="https://media.istockphoto.com/id/864485064/vector/united-arab-emirates-flag.jpg?s=2048x2048&w=is&k=20&c=W8kbiMFMxjfBOWHhQkRmLgEKe1cl5pomlE8ZbBiww60="
                        alt="flag"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <p>UAE</p>
                    </div>

                    <div>
                      <BsChevronDown />
                    </div>
                  </div>
                </div>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
