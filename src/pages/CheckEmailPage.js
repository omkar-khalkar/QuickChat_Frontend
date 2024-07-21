import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";

const CheckEmailPage = () => {
  const [data, setData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({ email: "" });
        navigate('/password', { state: response?.data?.data });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded-lg shadow-md p-6 mx-auto'>
        <div className='w-fit mx-auto mb-4'>
          <PiUserCircle size={80} className='text-primary' />
        </div>

        <h3 className='text-center text-2xl font-semibold mb-4'>Welcome to QuickChat!</h3>

        <form className='grid gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-lg font-medium'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              className='bg-slate-100 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            type='submit'
            className='bg-primary text-lg px-4 py-2 hover:bg-secondary rounded-md font-bold text-white'
          >
            Next
          </button>
        </form>

        <p className='my-4 text-center'>
          New User? <Link to={"/register"} className='text-primary font-semibold hover:underline'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default CheckEmailPage;
