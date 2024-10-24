import React, { useState } from 'react';

const ScheduleLuckyDraw = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateTime: '',
    description: '',
    participants: '',
    members: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement scheduling logic
    console.log('Scheduled Lucky Draw:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Lucky Draw Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Date and Time:</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Description (optional):</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>
      <div>
        <label className="block mb-1">Number of Participants (optional):</label>
        <input
          type="number"
          name="participants"
          value={formData.participants}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Add Members (Optional):</label>
        {/* TODO: Implement multi-select list of Team Members */}
        <select
          multiple
          name="members"
          value={formData.members}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          {/* Add team members options here */}
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Schedule Lucky Draw
      </button>
    </form>
  );
};

export default ScheduleLuckyDraw;