"use client";

import Bubble from "@/assets/bubble.png";
import { Separator } from "@/components/ui/separator";
import Svglogo from "@/components/customs/svglogo";
import ITH from "@/assets/ITH.jpg";

import { Bot, Frame, LayoutDashboard, Settings, Network } from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import { NavSettings } from "@/components/ui/nav-settings";
import { NavOrganization } from "@/components/ui/nav-organization";

// import { NavUser } from "@/components/nav-user";
//import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  useSidebar,
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
  const { collapsed } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <div className="flex items-center justify-center">
          <img src={ITH} alt="logo" />
        </div>
        <h1 className="text-center text-sm font-semibold mt-5">
          {collapsed ? "ITH" : "IT Horizons Group"}
        </h1>

        {collapsed ? (
          <div className="flex justify-center">
            <img
              src={Bubble}
              alt="bubbleicon"
              className="w-5 h-5 shrink-0 text-center mt-5"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-5 ml-5 text-teal-700">
            <img src={Bubble} alt="bubbleicon" className="w-5 h-5 shrink-0" />
            <span className="text-sm text-center">SWITCH TO ADMIN MODE</span>
          </div>
        )}
        <NavMain items={data.navMain} />
        <Separator className="w-20" />
        <NavOrganization projects={data.myorganization} />
        <Separator className="w-xs" />
        <NavSettings projects={data.settings} />
      </SidebarContent>

      <SidebarFooter>
        {collapsed ? (
          <div className="flex items-center justify-center w-full h-12 bg-[#004643] rounded-none mb-20">
            <Svglogo />
          </div>
        ): (
          <div className="bg-[#004643] text-white rounded-lg p-4 text-sm shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Svglogo />
            </div>
            <p className="mb-4">
              Get in touch with one of our experts or visit our FAQ.
            </p>
            <div className="flex flex-col gap-2">
              <button className="bg-white text-[#004643] text-sm font-medium py-1.5 px-3 rounded hover:bg-gray-100 transition cursor-pointer">
                Report a Bug
              </button>
              <button className="border border-white text-white text-sm font-medium py-1.5 px-3 rounded hover:bg-white/10 transition cursor-pointer">
                Suggest a Feature
              </button>
            </div>
          </div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
