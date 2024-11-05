// src/pages/CreateCrewmate.js
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const CreateCrewmate = () => {
  const [crewmate, setCrewmate] = useState({ name: '', attribute: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrewmate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('crewmates').insert([crewmate]);
    if (error) {
      console.error('Error creating crewmate:', error.message);
    } else {
      console.log('Crewmate created:', data);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Attribute</label>
        <input type="text" name="attribute" onChange={handleChange} />
        <button type="submit">Add Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
