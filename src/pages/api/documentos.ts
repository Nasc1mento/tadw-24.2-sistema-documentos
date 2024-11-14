// import req and res from Next.js API
import type { NextApiRequest, NextApiResponse } from 'next';
import DocumentosRepository from './mysql/documentos/documentos.repository';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const documentosRepository = new DocumentosRepository();

  switch (method) {
    case 'GET':
      const data = await documentosRepository.getAll();
      res.status(200).json(data);
      break;
    case 'POST':
      const newDocumento = req.body;
      await documentosRepository.save(newDocumento);
      res.status(201).json(newDocumento);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${method} não permitido`);
  }
}