// pages/api/documentos.js
import fs from 'fs';
import path from 'path';

// import req and res from Next.js API
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoConnection } from './mongo.connection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const connection = new MongoConnection();
  await connection.connect();

  try {

    const collection = await connection.getCollection('documentos');

    switch (method) {
      case 'GET':
        await collection.find({}).toArray().then((docs) => {
          res.status(200).json(docs);
        });

        break;
  
      case 'POST':
        const newDocument = req.body;
  
        await collection.insertOne(newDocument).then(() => {
          res.status(201).json(newDocument);
        });

        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Método ${method} não permitido`);
    }
  } catch(e) {

    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });

  } finally {
    await connection.close();
  }
  
}