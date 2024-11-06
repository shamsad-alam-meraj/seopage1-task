import { useState } from "react";
import Modal from "react-modal";
import {
  FaCalendarAlt,
  FaComment,
  FaLink,
  FaLayerGroup,
  FaClipboardList,
} from "react-icons/fa";
import companyLogo from "../../assets/images/company_logo.png";
import avatarImage from "../../assets/images/avatar.png";
import avatarImage2 from "../../assets/images/avatar2.png";
import avatarImage3 from "../../assets/images/avatar3.png";

Modal.setAppElement("#root");

const TaskCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [files, setFiles] = useState([]);

  const handleLinkClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer border border-gray-600 mb-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img
            src={companyLogo}
            alt="Client Avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="font-semibold">Client Name</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Sadik Istiak</span>
          <img
            src={avatarImage}
            alt="Assignee Avatar"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center space-x-2 text-sm text-gray-500 mb-2">
        <FaLayerGroup className="w-4 h-4" />
        <p className="truncate">Lorem ipsum dolor sit amet curn...</p>
        <div className="bg-gray-200 text-xs rounded-md px-1 py-0.5 flex items-center">
          <FaClipboardList className="w-4 h-4 mr-0.5" />
          1/2
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <img
            src={avatarImage2}
            alt="Team Member Avatar"
            className="w-6 h-6 rounded-full"
          />
          <img
            src={avatarImage3}
            alt="Team Member Avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="bg-gray-200 text-xs rounded-full px-2">12+</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaComment className="w-4 h-4" />
          <span>15</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={handleLinkClick}
        >
          <FaLink className="w-4 h-4" />
          <span>25</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaCalendarAlt className="w-4 h-4" />
          <span>30-12-2022</span>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Attachment Modal"
        className="modal-content bg-white p-6 rounded-lg max-w-md w-full mx-auto"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="mb-4 flex w-full justify-between items-center">
          <h2 className="text-lg font-semibold ">Upload Attachments</h2>
          <button
            onClick={closeModal}
            className=" bg-blue-500 text-white py-1 px-4  hover:bg-blue-600 rounded-full"
          >
            X
          </button>
        </div>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 rounded px-3 py-2 w-full"
        />

        {files?.length ? (
          <h3 className="text-md font-semibold mb-2">Selected Files</h3>
        ) : (
          ""
        )}
        <ul className="space-y-2">
          {files.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.file.type.startsWith("image/") ? (
                <img
                  src={item.preview}
                  alt={item.file.name}
                  className="w-12 h-12 rounded object-cover"
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded">
                  <span className="text-xs text-gray-600">
                    {item.file.name.split(".").pop().toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-medium text-sm">{item.file.name}</span>
                <span className="text-xs text-gray-500">
                  ({item.file.type.split("/").pop()})
                </span>
              </div>
            </li>
          ))}
        </ul>
        {files?.length ? (
          <div className="flex w-full justify-center items-center mt-4">
            <button
              onClick={() => {
                console.log("button clicked");
              }}
              className="bg-blue-500 text-white py-1 px-4  hover:bg-blue-600 rounded-full"
            >
              Upload
            </button>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
};

export default TaskCard;
