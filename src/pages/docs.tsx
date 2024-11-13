'use client';
import React, { useEffect, useState } from 'react';
import { IDocumento } from './api/mysql/documentos/documento';


const Docs = () => {
  const [data, setData] = useState<IDocumento[]>([]);

  // fetch data from API when component mounts
  useEffect(() => {
    fetch('/api/documentos')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Documentos</h1>
      <ul>
        {data.map((doc) => (
          <li key={doc.id}>{doc.tipo} ({doc.id})</li>
        ))}
      </ul>
    </div>
  );
};

export default Docs;