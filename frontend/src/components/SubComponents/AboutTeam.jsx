import React from 'react';
import Divine from '../../assets/Divine.jpg';
import Aimable from '../../assets/Aimable.jpg'
import Blaise from '../../assets/blaisepro.jpg'
import Remy from '../../assets/Remy.jpg'
import Jeremy from '../../assets/Jeremie.jpg'

const AboutTeam = () => {
  const team = [
    {
      id: 1,
      name: "BYUMVUHORE Aimable",
      tasks: "Project Manager, Frontend Designer & UI/UX Designer",
      profile: Aimable,
      linked: "https://www.linkedin.com/in/byumvuhore-aimable-554019262/"
    },
    {
      id: 2,
      name: "GITOLI Remy Claudien",
      tasks: "Data Analyst & Backend Designer",
      profile: Remy,
      linked: "https://www.linkedin.com/in/kirenga-remy-claudien-9a3801273/"
    },
    {
      id: 3,
      name: "BIGIRABAGABO Blaise",
      tasks: "System Integrator & Backend Designer",
      profile: Blaise,
      linked: "http://www.linkedin.com/in/bigirabagabo-blaise-17110b259"
    },
    {
      id: 4,
      name: "ITANGAMAHORO Divine",
      tasks: "Market Research & Backend Designer",
      profile: Divine,
      linked: "https://www.linkedin.com/in/divine-itangamahoro-759839261/"
    },
    {
      id: 5,
      name: "NKUNDABAGENZI Jeremy",
      tasks: "UI/UX Designer & Frontend Designer",
      profile: Jeremy,
      linked: "https://www.linkedin.com/in/jeremie-nkundabagenzi-413a612a6/"
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center my-8'>
      <h1 className='text-2xl font-bold'>Team Members</h1>
      <div className='grid gap-4 w-full' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}>
        {team.map((member) => (
          <div key={member.id} className='relative p-4 rounded-lg shadow-lg cursor-pointer flex flex-col'>
            <div className='h-[5cm]'><img src={member.profile} alt={member.name} title={member.name} className='w-full h-full rounded-md' /></div>
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