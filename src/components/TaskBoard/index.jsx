import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

const TaskBoard = () => {
  const [tasksByStatus, setTasksByStatus] = useState({
    Incomplete: [],
    "To Do": [],
    Doing: [],
    "Under Review": [],
    Completed: [],
    "Over Due": [],
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Incomplete":
        return "bg-red-400";
      case "To Do":
        return "bg-blue-500";
      case "Doing":
        return "bg-yellow-500";
      case "Under Review":
        return "bg-purple-500";
      case "Completed":
        return "bg-green-500";
      case "Over Due":
        return "bg-red-500";
      default:
        return "bg-gray-700";
    }
  };
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      const tasks = response.data.data;

      // Group tasks by status
      const groupedTasks = {
        Incomplete: [],
        "To Do": [],
        Doing: [],
        "Under Review": [],
        Completed: [],
        "Over Due": [],
      };

      tasks.forEach((task) => {
        if (groupedTasks[task.status]) {
          groupedTasks[task.status].push(task);
        }
      });

      setTasksByStatus(groupedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="w-full h-screen overflow-x-auto flex space-x-4 px-4 bg-gray-100 pt-2">
      {Object.entries(tasksByStatus).map(([status, tasks]) => (
        <div
          key={status}
          className="relative flex-shrink-0 w-96 bg-white rounded-lg shadow-lg overflow-y-scroll"
        >
          <div className="sticky top-0 bg-white text-black py-2 rounded-md mb-4 text-center z-10 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl font-semibold">
                <div
                  className={`w-5 h-5 mr-2 rounded-tl-full rounded-bl-full ${getStatusColor(
                    status
                  )}`}
                ></div>
                <span>{status}</span>
              </div>
              <span className="bg-gray-200 text-black rounded-full px-2">
                {tasks?.length}
              </span>
            </div>
          </div>
          <div className="px-4">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} fetchTasks={fetchTasks} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
