import React from 'react';

const Table = () => {
  const data = [
    { name: 'Brais Moure', country: 'Spain', bio: 'Spanish Developer' },
    { name: 'Diego De Granda', country: 'Mexico', bio: 'Director of Software Engineering at Platzi ' },
    { name: 'Fernando Herrera', country: 'Uruguay', bio: 'Software Developer' },
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className='bg-violet-200 '>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">Bio</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2">{row.name}</td>
            <td className="border px-4 py-2">{row.country}</td>
            <td className="border px-4 py-2">{row.bio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;