import Mission from "@/assets/mission.png";
import Vision from "@/assets/vision.png";
import TodoIcon from "@/assets/todo.png";
const rightsidebar = () => {
  return (
    <div>
      <div>
        <aside className="hidden lg:block w-64 bg-muted border-l px-6 py-8 space-y-6">
         
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center gap-2">
              <img src={Mission} alt="mission" />
              <h2 className="text-sm font-semibold text-gray-700">
                Mission Statement
              </h2>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              The design can be more user centric. Try to tweak it a bit and go
              through the user story once more.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex items-center gap-2">
              <img src={Vision} alt="Vision icon" />
              <h2 className="text-sm font-semibold text-gray-700">
                Vision Statement
              </h2>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              The design can be more user centric. Try to tweak it a bit and go
              through the user story once more.
            </p>
          </div>

          <button className="flex w-50 items-center  gap-2 border border-[#8ED2C9] rounded-md px-4 py-2 bg-white hover:bg-[#F0FAF9] transition text-teal-700 text-sm font-medium shadow-sm cursor-pointer">
            <img src={TodoIcon} alt="To-do" className="h-10 w-10" />
            <span>To-do List</span>
          </button>

          <div className=" p-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500 mt-2">
                You have no to do list.
              </p>
            </div>
            <button className="bg-teal-700 text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#035b52] transition">
              Create To Do List
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default rightsidebar;
