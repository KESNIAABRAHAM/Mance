"use client";

import * as React from "react";
import Logo from "../assets/ITH.jpg";
import Bubble from "../assets/bubble.png";
import { Separator } from "@/components/ui/separator";
//import Mancelogo from "../assets/logo.svg"



import {
  Bot,
  Frame,
  LayoutDashboard,
  Settings,
  Network,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSettings } from "@/components/nav-settings";
import {NavOrganization} from "@/components/nav-organization";

// import { NavUser } from "@/components/nav-user";
//import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {

  navMain: [
    {
      title: "Mision Plan",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Mission Plan Setup",
          url: "#",
        },
        {
          title: "Mission Plan Reports",
          url: "#",
        },
        {
          title: "Mission Plan Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Appraisal",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Trainings",
          url: "#",
        },
      ],
    },
  ],
   myorganization: [
    {
      name: "My Team",
      url: "#",
      icon: Frame,
    },
    {
      name: "Organogram",
      url: "#",
      icon: Network,
    },
  ],
  settings: [
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
    
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      {/* <img src={Logo} alt="logo"  className="h-30 w-20 ml-20"/>

      <h1 className="text-center">IT Horizons Group</h1> */}
      <SidebarContent>
        <div className="flex items-center justify-center">
          <img src={Logo} alt="logo" className="h-20 w-15" />
        </div>
        <h1 className="text-center text-sm font-semibold data-[collapsed=true]:hidden">
          IT Horizons Group
        </h1>
        <h1 className="text-center text-sm font-semibold hidden data-[collapsed=true]:block">
          ITH
        </h1>
    <div className="flex items-center gap-2 mt-5 ml-5 text-teal-700">
        <img src={Bubble} alt="bubbleicon"  />
        <span className="text-sm  text-center">SWITCH TO ADMIN MODE</span>

    </div>

        <NavMain items={data.navMain} />
         <Separator className="w-10"/>
         <NavOrganization projects={data.myorganization}/>
        <NavSettings projects={data.settings} />
      </SidebarContent>
      <SidebarFooter className="p-4 flex flex-col gap-4">
         <div className="bg-[#004643] text-white rounded-lg p-4 text-sm shadow-sm">
    <div className="flex items-center gap-2 mb-2">
    
      
    </div>
    <p className="mb-4">Get in touch with one of our experts or visit our FAQ.</p>
    <div className="flex flex-col gap-2">
      <button className="bg-white text-[#004643] text-sm font-medium py-1.5 px-3 rounded hover:bg-gray-100 transition cursor-pointer">
        Report a Bug
      </button>
      <button className="border border-white text-white text-sm font-medium py-1.5 px-3 rounded hover:bg-white/10 transition cursor-pointer">
        Suggest a Feature
      </button>
    </div>
  </div>

        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
