import request from 'supertest';
import express from 'express';
import alunoRoute from '../../module/aluno/aluno.route'

const app = express();
app.use(express.json());
app.use('/aluno', alunoRoute);

describe('Aluno Route Suite', () => {
    it('deve retornar todos os alunos', async () => {
        const response = await request(app).get('/aluno');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('deve armazenar um novo aluno', async () => {
        const novoAluno = { nome: 'Teste', cpf: '12345678909' }; // Substitua por um CPF válido
        const response = await request(app).post('/aluno').send(novoAluno);
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
    });

    it('não deve permitir a inserção de um aluno com CPF duplicado', async () => {
        const alunoExistente = { nome: 'Existente', cpf: '12345678909' }; // CPF duplicado
        await request(app).post('/aluno').send(alunoExistente); // Insere um aluno

        const response = await request(app).post('/aluno').send(alunoExistente); // Tenta inserir o mesmo aluno novamente
        expect(response.status).toBe(500); // Espera erro
        expect(response.text).toBe('CPF já cadastrado'); // Mensagem de erro
    });

    it('deve retornar um erro ao tentar armazenar um aluno sem nome', async () => {
        const alunoSemNome = { cpf: '12345678909' }; // CPF válido, mas sem nome
        const response = await request(app).post('/aluno').send(alunoSemNome);
        expect(response.status).toBe(500);
        expect(response.text).toBe('O nome é obrigatório'); // Mensagem de erro
    });

    it('deve retornar um erro ao tentar armazenar um aluno com CPF inválido', async () => {
        const alunoInvalido = { nome: 'Inválido', cpf: '123' }; // CPF inválido
        const response = await request(app).post('/aluno').send(alunoInvalido);
        expect(response.status).toBe(500);
        expect(response.text).toBe('CPF inválido'); // Mensagem de erro
    });
});
