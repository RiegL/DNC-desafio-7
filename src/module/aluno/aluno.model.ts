import knex from '../../service/knex';
import {Aluno} from './aluno.d'


export const getAll  = async () : Promise<Aluno [] | []> => {
  return knex('aluno').select();
};

export  const store = async (params:Aluno) => {
  return knex('aluno').insert(params);
};

