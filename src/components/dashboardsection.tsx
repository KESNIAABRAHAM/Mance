import { AppSidebar } from "@/components/app-sidebar";
import Rightsidebar from "../components/rightsidebar";

import { Separator } from "@/components/ui/separator";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import todo from "../assets/todo.png";
import help from "../assets/help.png";

import {
  MusicIcon,
  BellIcon,

} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import announce from "../assets/announce.png";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const Legend = ({ label, color }: { label: string; color: string }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className={`w-3 h-3 rounded-full ${color}`} />
    <span>{label}</span>
  </div>
);

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border">
          <div className="flex items-center justify-between w-full px-4 py-2">
            {/* Left section: trigger, separator, greeting */}
            <div className="flex items-center gap-3">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4" />
              <h1 className="font-semibold text-base">Welcome Kesnia</h1>
            </div>

            {/* Right section: input + icons */}
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center w-full max-w-md rounded-md border border-input bg-muted overflow-hidden">
                {/* Category Dropdown */}
                <Select>
                  <SelectTrigger className="relative pl-5 border-0 rounded-none bg-transparent pr-8 ">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="software">Software</SelectItem>
                  </SelectContent>
                </Select>

                {/* Search Input with icon */}
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="Enter Keyword"
                    className="pl-20 pr-3 py-1.5 text-sm border-0 bg-white focus-visible:ring-0 w-full"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Music icon */}
              <MusicIcon className="w-5 h-5 text-muted-foreground cursor-pointer" />

              {/* Bell icon with badge */}
              <div className="relative">
                <BellIcon className="w-5 h-5 text-muted-foreground cursor-pointer" />
                <span className="absolute -top-1 -right-1 bg-destructive text-white text-[10px] font-semibold px-1.5 rounded-full">
                  10
                </span>
              </div>

              {/* Avatar */}
              <Avatar>
                <AvatarImage src="/avatars/user.jpg" alt="Kesnia" />
                <AvatarFallback>KE</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

          <h2 className="ml-20 mt-5 font-medium">QUICK ACCESS</h2>
        
        <section className="max-w-6xl w-full mx-auto space-y-6 px-6 py-4">
        
          <div className="flex justify-start bg-muted border rounded-lg p-6 w-full max-w-[700px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              <Button
                variant="outline"
                className="h-28 w-52 flex gap-4"
              >
                <img src={announce} alt="icon" className="w-12 h-12" />

                <div className="flex flex-col text-start">
                  <span className="text-md">View</span>
                  <span className="text-md">Announcement</span>
                </div>
              </Button>


              <Button
                variant="outline"
                className="h-28 w-52 justify-start gap-4 text-md"
              >
               
                <img src={todo} alt="icon" />
                Create To Do
              </Button>
              <Button
                variant="outline"
                className="h-28 w-52 justify-start gap-4 px-6 py-8 text-base"
              >
               
                <img src={help} alt="icon" />
                Help
              </Button>
            </div>
          </div>

          {/* 2. My Mission Plan */}
          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="text-lg font-semibold">My Mission Plan 2023</h2>
            <div className="space-y-2">
              <div>
                <p className="text-sm mb-1">Measure of Success</p>
                <div className="flex items-center gap-2 w-full">
                  <Progress
                    value={0}
                    className="rounded-none h-8 w-2/3 [&>div]: bg-teal-700"
                  />
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full">
                <Progress value={0} className="rounded-none h-8" />
                <span className="text-sm text-muted-foreground">80%</span>
              </div>
            </div>
          </div>

          {/* 3. Team Performance */}
          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="text-lg font-semibold">
              My Team Performance Task Bar
            </h2>

            {/* Task Bar Placeholder */}
            <div className="h-3 w-full bg-muted rounded-md" />

            <div className="flex flex-wrap gap-4 text-sm">
              <Legend label="In Progress" color="bg-yellow-400" />
              <Legend label="Completed" color="bg-green-500" />
              <Legend label="Under Review" color="bg-blue-500" />
              <Legend label="Overdue" color="bg-red-500" />
            </div>

            {/* Avatar Group */}
            <div className="flex justify-end -space-x-3 pt-2 -mt-10">
              <Avatar>
                <AvatarImage src={pic1} alt="pic1" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic2} alt="pic2" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic3} alt="pic3" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic4} alt="pic4" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic5} alt="pic5" />
              </Avatar>
            </div>
          </div>

          <div className="rounded-lg border p-4 space-y-4">
            <h2 className="text-lg font-semibold">
              My Downline Team Performance Task Bar
            </h2>

            {/* Task Bar Placeholder */}
            <div className="h-3 w-full bg-muted rounded-md" />

            <div className="flex flex-wrap gap-4 text-sm">
              <Legend label="In Progress" color="bg-yellow-400" />
              <Legend label="Completed" color="bg-green-500" />
              <Legend label="Under Review" color="bg-blue-500" />
              <Legend label="Overdue" color="bg-red-500" />
            </div>
            {/* Avatar Group */}
            <div className="flex justify-end -space-x-3 pt-2 -mt-10">
              <Avatar>
                <AvatarImage src={pic1} alt="pic1" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic2} alt="pic2" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic3} alt="pic3" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic4} alt="pic4" />
              </Avatar>
              <Avatar>
                <AvatarImage src={pic5} alt="pic5" />
              </Avatar>
            </div>
          </div>

          <div className="rounded-lg border p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                My Specified Task Progress
              </h2>
              <span className="text-sm text-muted-foreground cursor-pointer">
                See all
              </span>
            </div>

            <p className="text-sm text-muted-foreground">Total Tasks: 0</p>

            {/* Task Blocks */}
            <div className="space-y-6">
              {[1, 2, 3].map((task) => (
                <div key={task} className="space-y-3">
                  <p className="text-sm font-medium">Task {task}</p>

                  {[1, 2, 3].map((subtask, index) => (
                    <div key={subtask} className="flex items-center gap-3">
                      <Progress
                        value={0}
                        className={`rounded-none h-8 ${
                          index === 0 ? "w-2/3 [&>div]: bg-teal-700" : "flex-1"
                        }`}
                      />
                      <span className="text-md text-muted-foreground">
                        {index == 0 ? "50%" : "80%"}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="rounded-lg border p-4 space-y-4">
            <div className="space-y-2">
              <h1 className="text-muted-foreground text-center">You have no recent activity</h1>
            
            </div>
          </div>
        </section>
        
      </SidebarInset>
      <Rightsidebar/>
    </SidebarProvider>
  );
}
