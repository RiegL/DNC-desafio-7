import * as express from 'express';
import type {Request, Response} from 'express'
import * as alunoModel from './aluno.model';

const router = express.Router();

router.get('/', async (_:Request, res:any) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req:Request, res:any) => {
  const data = await alunoModel.store(req.body);
  return res.status(200).json({ data });
});

export default router;

