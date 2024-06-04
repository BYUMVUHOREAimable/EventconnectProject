import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventname: '',
    description: '',
    date: '',
    startTime: '',
    location: {
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    },
    categories: '',
    ticketInfo: {
      price: '',
      currency: 'USD',
      availability: ''
    },
    organizer: '',
    eventimages: []
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setEventData({ ...eventData, [name]: value });
    } else {
      setEventData(prevState => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    }
  };

  const handleImageChange = async (e) => {
    const imageUrls = [];
  setEventData(prevData => ({
      ...prevData,
      eventimages: imageUrls,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventname: eventData.eventname,
          description: eventData.description,
          date: new Date(`${eventData.date}T${eventData.startTime}`).toISOString(),
          location: eventData.location,
          organizer: eventData.organizer,
          categories: [eventData.categories],
          ticketInfo: eventData.ticketInfo,
          eventimages: eventData.eventimages
        }),
      });
      const dataRes = await response.json();
      if (response.status === 201) {
        toast.success(dataRes.message);
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(dataRes.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Event creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReturnHome = (e) => {
    e.preventDefault();
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="pt-3 flex flex-col justify-center items-center w-full">
      {loading && (
        <div className="fixed inset-0 bg-purple-500 bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-900"></div>
        </div>
      )}
      <form className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Create An Event</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="eventname">Event Name</label>
            <input
              type="text"
              id="eventname"
              name="eventname"
              className="w-full p-3 border rounded-md"
              value={eventData.eventname}
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
            <label className="block text-lg font-semibold mb-2" htmlFor="startTime">Event Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              className="w-full p-3 border rounded-md"
              value={eventData.startTime}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="address">Event Address</label>
            <input
              type="text"
              id="address"
              name="location.address"
              className="w-full p-3 border rounded-md"
              value={eventData.location.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="location.city"
              className="w-full p-3 border rounded-md"
              value={eventData.location.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="location.state"
              className="w-full p-3 border rounded-md"
              value={eventData.location.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="location.country"
              className="w-full p-3 border rounded-md"
              value={eventData.location.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="location.postalCode"
              className="w-full p-3 border rounded-md"
              value={eventData.location.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="categories">Categories</label>
            <select
              id="categories"
              name="categories"
              className="w-full p-3 border rounded-md"
              value={eventData.categories}
              onChange={handleChange}
              required
            >
              <option value="Wedding">Wedding</option>
              <option value="Festival">Festival</option>
              <option value="Concert">Concert</option>
              <option value="Conference">Conference</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="price">Ticket Price</label>
            <input
              type="number"
              id="price"
              name="ticketInfo.price"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="currency">Currency</label>
            <select
              id="currency"
              name="ticketInfo.currency"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.currency}
              onChange={handleChange}
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="RWF">RWF</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="availability">Ticket Availability</label>
            <input
              type="number"
              id="availability"
              name="ticketInfo.availability"
              className="w-full p-3 border rounded-md"
              value={eventData.ticketInfo.availability}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="organizer">Organizer Name</label>
            <input
              type="text"
              id="organizer"
              name="organizer"
              className="w-full p-3 border rounded-md"
              value={eventData.organizer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-lg font-semibold mb-2" htmlFor="eventimages">Event Images
              <div className="flex items-center justify-center w-full p-3 border rounded-md cursor-pointer">
                <IoCloudUploadOutline className="mr-2" /> <p className="text-sm text-black">Upload</p>
              </div>
              <input
                type="file"
                id="eventimages"
                name="eventimages"
                accept='image/*'
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
        >
          Create Event
        </button>
      </form>
      <a
        href="/dashboard"
        onClick={handleReturnHome}
        className="text-violet-900 hover:text-violet-800 py-6"
      >
        Return home?
      </a>
    </div>
  );
};
export default EventForm;
