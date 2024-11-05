import React, { useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState({ name: '', attribute: '' });

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single();
      setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCrewmate((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').update(crewmate).eq('id', id);
    navigate('/');
  };

  const handleDelete = async () => {
    await supabase.from('crewmates').delete().eq('id', id);
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <label>Name</label>
        <input type="text" name="name" value={crewmate.name} onChange={handleChange} />
        <label>Attribute</label>
        <input type="text" name="attribute" value={crewmate.attribute} onChange={handleChange} />
        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default EditCrewmate;
