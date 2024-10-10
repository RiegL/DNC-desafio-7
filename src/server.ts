import express from 'express';
import cors from 'cors';

import alunoRoute from './module/aluno/aluno.route';


const app = express();

app.use(express.json());
app.use(cors())

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
  console.log('server rodando!');
});
