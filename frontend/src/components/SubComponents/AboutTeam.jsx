import React from 'react';
import Image1 from '../../assets/profile-picture.jpg';

const AboutTeam = () => {
  const team = [
    {
      id: 1,
      name: "BYUMVUHORE Aimable",
      tasks: "Project Manager & Frontend Designer",
      profile: Image1,
      linked: "https://www.linkedIn.com/Bai"
    },
    {
      id: 2,
      name: "GITOLI Remy Claudien",
      tasks: "Data Analyst & Backend Designer",
      profile: Image1,
      linked: "https://www.linkedIn.com/Remy"
    },
    {
      id: 3,
      name: "BIGIRABAGABO Blaise",
      tasks: "System Integrator & Backend Designer",
      profile: Image1,
      linked: "https://www.linkedIn.com/Blaise"
    },
    {
      id: 4,
      name: "ITANGAMAHORO Divine",
      tasks: "Market Research & Backend Designer",
      profile: Image1,
      linked: "https://www.linkedIn.com/Divine"
    },
    {
      id: 5,
      name: "NKUNDABAGENZI Jeremy",
      tasks: "UI/UX Designer & Frontend Designer",
      profile: Image1,
      linked: "https://www.linkedIn.com/Jeremy"
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center my-8'>
      <h1 className='text-2xl font-bold'>Team Members</h1>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
        {team.map((member) => (
          <div key={member.id} className='relative w-full p-4 rounded-lg shadow-lg cursor-pointer'>
            <div><img src={member.profile} alt={member.name} className='w-full h-auto rounded-md' /></div>
            <p className='text-gray-800 mt-2'>{member.name}</p>
            <div>
              <a href={member.linked} className='text-blue-600'>LinkedIn</a>
              <p className='text-md text-green-800'>{member.tasks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
