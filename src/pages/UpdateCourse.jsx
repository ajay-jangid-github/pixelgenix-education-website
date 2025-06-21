import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const initialData = {
  'web-dev': { title: 'Web & App Development', description: 'Build full-stack web apps.' },
  py: { title: 'Python Programming', description: 'Learn Python from scratch.' },
  ml: { title: 'Machine Learning Basics', description: 'Intro to ML.' },
};

const UpdateCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({ title: '', description: '' });

  useEffect(() => {
    const courseToEdit = initialData[id];
    if (courseToEdit) {
      setCourse(courseToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated course data:", course);
    alert("Course updated successfully! (Dummy data)");
  };

  if (!initialData[id]) return <div className="p-8">Course not found.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Update Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
