/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    categories: [],
    price: '',
    currency: 'USD',
    availability: '',
    images: []
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setEventData({ ...eventData, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: eventData.name,
      description: eventData.description,
      date: eventData.date,
      address: eventData.address,
      city: eventData.city,
      state: eventData.state,
      country: eventData.country,
      postalCode: eventData.postalCode,
      categories: eventData.categories,
      price: eventData.price,
      currency: eventData.currency,
      availability: eventData.availability,
      images: eventData.images
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const dataRes = await response.json();
  
      if (response.status === 302) {
        // Extract redirect location and navigate
        toast(dataRes.message);
        navigate("/dashboard");
      } else {
        // Handle other status codes (e.g., errors)
        toast.error(dataRes.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Creating event failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <form 
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Create An Event</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-md"
              value={eventData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="description">Event Description</label>
            <textarea
              id="description"
              name="description"
              className="w-full p-3 border rounded-md"
              value={eventData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="date">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-3 border rounded-md"
              value={eventData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="address">Event Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-3 border rounded-md"
              value={eventData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-3 border rounded-md"
              value={eventData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-3 border rounded-md"
              value={eventData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full p-3 border rounded-md"
              value={eventData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="w-full p-3 border rounded-md"
              value={eventData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="categories">Event Categories</label>
            <select
              id="categories"
              name="categories"
              className="w-full p-3 border rounded-md"
              value={eventData.categories}
              onChange={handleChange}
              multiple
              required
            >
              <option value="Wedding">Wedding</option>
              <option value="Festival">Festival</option>
              <option value="Concert">Concert</option>
              <option value="Conference">Conference</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="price">Ticket Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full p-3 border rounded-md"
              value={eventData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="currency">Currency</label>
            <select
              id="currency"
              name="currency"
              className="w-full p-3 border rounded-md"
              value={eventData.currency}
              onChange={handleChange}
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="RWF">RWF</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="availability">Ticket Availability</label>
            <input
              type="number"
              id="availability"
              name="availability"
              className="w-full p-3 border rounded-md"
              value={eventData.availability}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="images">Event Images</label>
            <input
              type="file"
              id="images"
              name="images"
              className="w-full p-3 border rounded-md"
              onChange={handleImageChange}
              multiple
              required
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
        >
          Create Event
        </button>
      </form>
      <Link to="/dashboard" className="text-violet-900 hover:text-violet-800 mt-4">Return home&#63;</Link>
    </div>
  );
};

export default EventForm;
