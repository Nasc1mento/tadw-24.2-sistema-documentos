// pages/api/documentos.js
import fs from 'fs';
import path from 'path';

// import req and res from Next.js API
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoConnection } from './mongo.connection';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const connection = new MongoConnection();

  switch (method) {
    case 'GET':
      connection.getCollection('documentos').then((c) => {
        c.find({}).toArray().then((d: any[]) => {
          res.status(200).json(d);
        });
      });
      break;

    case 'POST':
      const newDocument = req.body;

      connection.getCollection('documentos').then((c) => {
        c.insertOne(newDocument).then(() => {
          res.status(201).json(newDocument);
        });
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${method} não permitido`);
  }
}