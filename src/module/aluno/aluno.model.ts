import knex from '../../service/knex';
import { Aluno } from './aluno.d';

export const getAll = async (): Promise<Aluno[] | []> => {
  return knex('aluno').select();
};

export const store = async (params: Aluno) => {
  // Verificar se o nome está presente
  if (!params.nome || params.nome.trim() === "") {
      throw new Error("O nome é obrigatório");
  }

  const isValidCPF = (cpf: string): boolean => {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // CPF deve ter exatamente 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    return true;
};

  // Verificar se o CPF é válido
  if (!isValidCPF(params.cpf)) {
      throw new Error("CPF inválido");
  }

  // Verificar se o CPF já existe no banco de dados
  const existingAluno = await knex('aluno').where('cpf', params.cpf).first();
  if (existingAluno) {
      throw new Error("CPF já cadastrado");
  }

  // Lógica para inserir no banco de dados
  const [id] = await knex('aluno').insert(params);
  return id;
};