"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import Link from "next/link";

type Checked = DropdownMenuCheckboxItemProps["checked"];
interface Tdropdown {
  navitem: string;
  dropdown1: string;
  dropdown2: string;
  dropdown3: string;
  pageLink: string;
}
export function Dropdown({
  navitem,
  dropdown1,
  dropdown2,
  dropdown3,
  pageLink,
}: Tdropdown) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="outline-none">
        <Link href={pageLink}>{navitem}</Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-warmyello p-3 rounded-[0.6rem] space-y-3 text-center mt-5 cursor-pointer">
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
          className="bg-white text-purple py-2 px-5 rounded-[2rem] font-normal cursor-pointer"
        >
          {dropdown1}
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          className="bg-white text-purple py-2 px-5 rounded-[2rem] font-normal cursor-pointer"
        >
          {dropdown2}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
          className="bg-white text-purple py-2 px-5 rounded-[2rem] font-normal cursor-pointer"
        >
          {dropdown3}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
