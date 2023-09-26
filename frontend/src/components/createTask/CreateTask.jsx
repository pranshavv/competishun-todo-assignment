import React, { useState } from "react";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
import TokenContext from "../../context/TokenContext";
import axios from "../../Axios/axios.js";
import "./createTask.css";
function CreateTask() {
  const { dispatch } = useContext(TaskContext);
  const { userToken } = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [toast, setToast] = useState();
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/task/addTask",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      //setToast(res.data)
      // showToast();
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: "ADD_TASK",
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="addContainer md:w-1/3 h-[300px] mt-20 mx-10 flex justify-center">
      <div className="w-11/12">
        <form onSubmit={handleAdd}>
          <div className="text-2xl">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#d9d4e7] text-gray-900 text-sm rounded-lg border-2 border-[#0e172c] block w-full p-2.5 "
            />
          </div>
          <div className="my-3 text-2xl">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              name="description"
              id="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              style={{ resize: "none" }}
              className="bg-[#d9d4e7] border-2 border-[#0e172c] text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#a786df] text-white px-10 py-2 text-lg rounded-md font-bold"
            >
              Add
            </button>
          </div>
        </form>
        <div
          className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2"
          id="toast"
        >
          <p>This is test</p>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
