import { getAll, store } from '../../module/aluno/aluno.model'; // Ajuste o caminho conforme necessário
import knex from '../../service/knex'

describe("Aluno Model Suite", () => {
    afterAll(async () => {
        await knex.destroy();
    });

    it("retorna todos os alunos", async () => { 
        const allAlunos = await getAll();
        expect(allAlunos).toBeInstanceOf(Array);
        expect(allAlunos.length).toBeGreaterThan(0); // Se você tiver dados
    });

    it("retorna um aluno ao armazenar um novo aluno", async () => {
        const novoAluno = { nome: "Leo", cpf: "12345678910" };
        const insertId = await store(novoAluno);
        expect(insertId).toBeDefined();
    });

    it("não deve permitir a inserção de um aluno com CPF duplicado", async () => {
        const novoAluno = { nome: "Leo", cpf: "22345678910" }; // se colocar um cpf ja cadastrado test da erro
        await store(novoAluno); // Armazena a primeira entrada
        await expect(store(novoAluno)).rejects.toThrow(); // Espera um erro na duplicata
    }, 10000);

    it("deve retornar um erro ao tentar armazenar um aluno sem nome", async () => {
        const alunoInvalido = {nome:"", cpf: "56625425464" }; // Sem nome
        await expect(store(alunoInvalido)).rejects.toThrow();
    });

    it("deve retornar um erro ao tentar armazenar um aluno com CPF inválido", async () => {
        const alunoInvalido = { nome: "Inválido", cpf: "123" }; // CPF inválido
        await expect(store(alunoInvalido)).rejects.toThrow();
    });

    it("deve retornar um array vazio se não houver alunos", async () => {
        // Limpe a tabela ou assegure-se de que não haja dados
        await knex('aluno').truncate(); // Atenção: Isso irá deletar todos os dados
        const allAlunos = await getAll();
        expect(allAlunos).toEqual([]); // Espera array vazio
    });
});
