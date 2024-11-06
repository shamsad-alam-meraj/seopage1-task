import TaskCard from "./TaskCard";

const TaskBoard = () => {
  const statusCounts = {
    Incomplete: 10,
    "To Do": 10,
    Doing: 10,
    "Under Review": 10,
    Completed: 10,
    "Over Due": 10,
  };
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

  return (
    <div className="w-full h-screen overflow-x-auto flex space-x-4 px-4 bg-gray-100 pt-2">
      {Object.entries(statusCounts).map(([status, count]) => (
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
                {count}
              </span>
            </div>
          </div>
          <div className="px-4">
            {[...Array(count)].map((_, i) => (
              <TaskCard key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
