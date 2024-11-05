import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import Card from '../components/Card';

const ViewCrewmates = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select();
      if (error) console.error(error);
      else setCrewmates(data);
    };
    fetchCrewmates();
  }, []);

  return (
    <div className="ViewCrewmates">
      {crewmates.length > 0
        ? crewmates.map((crewmate) => (
            <Card key={crewmate.id} {...crewmate} />
          ))
        : <h2>No Crewmates Found</h2>}
    </div>
  );
};

export default ViewCrewmates;
