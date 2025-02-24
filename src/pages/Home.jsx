import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'antd';

const Home = () => {
  const [clicked, setclicked] = useState(false);
  const [arr, setArr] = useState([]);
  const [selectedId, setselectedId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  let updatedNameRef = useRef();
  let updatedDateRef = useRef();
  let updatedPriceRef = useRef();
  let snoRef = useRef();
  let placeRef = useRef();
  let priceRef = useRef();
  let dateRef = useRef();
  let headingRef = useRef();
  let user = JSON.parse(localStorage.getItem('expenseLogin'));

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleOk = async () => {
    let obj = {};
    if (updatedDateRef.current.value) obj.date = updatedDateRef.current.value;
    if (updatedNameRef.current.value) obj.expenseName = updatedNameRef.current.value;
    if (updatedPriceRef.current.value) obj.price = updatedPriceRef.current.value;
    await axios.put(`https://expense-backend-2ip2.onrender.com/api/expense/update/${selectedId}`, obj);
    getData();
    updatedDateRef.current.value = "";
    updatedPriceRef.current.value = "";
    updatedNameRef.current.value = "";
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      expenseName: placeRef.current.value,
      price: priceRef.current.value,
      date: dateRef.current.value,
      userId: user._id
    };
    await axios.post('https://expense-backend-2ip2.onrender.com/api/expense/create', obj);
    setclicked(!clicked);
    snoRef.current.value = "";
    placeRef.current.value = "";
    priceRef.current.value = "";
    dateRef.current.value = "";
  };

  const getData = async () => {
    let res = await axios.get(`https://expense-backend-2ip2.onrender.com/api/expense/getexpense/${user._id}`);
    setArr(res.data.expenses);
  };

  useEffect(() => {
    getData();
  }, [clicked]);

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 ref={headingRef} className="text-center text-2xl font-bold mb-5">Expense Tracker</h1>
      <form className="flex flex-col lg:flex-row gap-4 w-full bg-gray-100 p-5 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <input ref={snoRef} className="p-3 rounded-md border w-full" type="number" placeholder="Enter S.No" />
        <input ref={placeRef} className="p-3 rounded-md border w-full" type="text" placeholder="Enter place" required />
        <input ref={priceRef} className="p-3 rounded-md border w-full" type="number" placeholder="Enter price" required />
        <input ref={dateRef} className="p-3 rounded-md border w-full" type="date" required />
        <button type="submit" className="bg-blue-500 text-white p-3 rounded-md w-full lg:w-auto">Add Expense</button>
      </form>
      <div className="mt-5 flex justify-center">
        <input onChange={(e) => setsearchvalue(e.target.value)} type="text" className="border p-2 rounded-md w-full max-w-lg" placeholder="Filter expenses..." />
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-sm text-gray-600 text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">S.No</th>
              <th className="p-3">Place</th>
              <th className="p-3">Price</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((ele, i) => (
              <tr key={ele._id} className="border-b">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">{ele.expenseName}</td>
                <td className="p-3">₹ {ele.price}</td>
                <td className="p-3">{ele.date}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button onClick={() => { setselectedId(ele._id); showModal(); }} className="bg-yellow-500 text-white p-2 rounded-md">Edit</button>
                  <button onClick={async () => { await axios.delete(`https://expense-backend-2ip2.onrender.com/api/expense/delete/${ele._id}`); getData(); }} className="bg-red-500 text-white p-2 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal title="Update Expense" open={isModalOpen} onCancel={handleCancel} onOk={handleOk}>
        <div className="flex flex-col gap-3">
          <input ref={updatedNameRef} className="p-3 rounded-md border" type="text" placeholder="Update expense name" />
          <input ref={updatedPriceRef} className="p-3 rounded-md border" type="number" placeholder="Update price" />
          <input ref={updatedDateRef} className="p-3 rounded-md border" type="date" />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
