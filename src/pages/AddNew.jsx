import React, { useState } from 'react';

const AddNew = () => {
  const [form, setForm] = useState({
    type: 'course',
    title: '',
    category: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Entry Submitted:", form);
    alert(`New ${form.type} added successfully! (Dummy Frontend Only)`);
    setForm({ type: 'course', title: '', category: '', image: '', description: '' });
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">➕ Add New {form.type === 'course' ? 'Course' : 'Internship'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="course">Course</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Full Stack Development"
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Web, Data, Design"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://via.placeholder.com/300"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description..."
            className="w-full border px-4 py-2 rounded"
            rows={3}
          />
        </div>

        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNew;
