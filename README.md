
# 🛡️ Ring Management API

Este é um sistema de gerenciamento de "Rings" (anéis mágicos) construído com **NestJS**, utilizando **MongoDB** para persistência de dados e **Swagger** para documentação de API.

## 📚 Funcionalidades

- CRUD completo para gerenciamento de "Rings":
  - Criar, listar, atualizar e deletar anéis.
  - Validação e tratamento de erros.
  - Enum para tipos de anéis (HUMAN, ELF, SAURON, DWARF).
- Documentação da API com **Swagger**.
- Validação de entrada com **class-validator**.
- Cobertura de testes unitários com **Jest**.

## 🚀 Tecnologias Utilizadas

- **NestJS** - Framework Node.js para construir aplicativos escaláveis.
- **MongoDB** - Banco de dados NoSQL para armazenamento dos dados dos anéis.
- **Mongoose** - ODM para MongoDB.
- **Swagger** - Para documentação da API.
- **Jest** - Para testes unitários.

## 🛠️ Pré-requisitos

- **Node.js** (v14+)
- **MongoDB** (v4.4+)

### 📦 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/ring-management-api.git
cd ring-management-api
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione a variável de conexão com o MongoDB:

```bash
MONGO_URI=mongodb://localhost:27017/ringDB
```

4. **Inicie o servidor MongoDB**

Certifique-se de que o MongoDB está em execução:

```bash
sudo systemctl start mongod
```

### 🏃‍♂️ Executando a aplicação

Para rodar a aplicação localmente:

```bash
npm run start
```

A API estará disponível em: `http://localhost:3000/api`

### 📖 Documentação da API

Acesse a documentação Swagger em:

```
http://localhost:3000/api/docs
```

Lá você encontrará todas as rotas da API com seus detalhes e exemplos.

### 🔧 Scripts Disponíveis

- **Iniciar a aplicação**:

```bash
npm run start
```

- **Rodar os testes**:

```bash
npm run test
```

- **Rodar a aplicação em modo de desenvolvimento**:

```bash
npm run start:dev
```

- **Compilar o projeto**:

```bash
npm run build
```

- **Executar lint**:

```bash
npm run lint
```

### 🧪 Testes

Os testes de unidade cobrem os serviços e controladores da aplicação. Para rodar os testes, utilize:

```bash
npm run test
```

### 🌐 Rotas da API

#### POST /api/ring

Cria um novo "Ring".

**Request body:**

```json
{
  "name": "The One Ring",
  "power": "Invisibility",
  "ringBearer": "Frodo Baggins",
  "forger": "Sauron",
  "type": "SAURON",
  "image": "https://example.com/ring.jpg"
}
```

**Response:**

```json
{
  "_id": "613b1e5cfc13ae1dd9000000",
  "name": "The One Ring",
  "power": "Invisibility",
  "ringBearer": "Frodo Baggins",
  "forger": "Sauron",
  "type": "SAURON",
  "image": "https://example.com/ring.jpg",
  "createdAt": "2024-09-14T11:37:17.759Z",
  "updatedAt": "2024-09-14T11:37:17.759Z",
  "__v": 0
}
```

#### GET /api/ring

Retorna todos os anéis cadastrados.

#### GET /api/ring/:id

Retorna um anel específico pelo seu `id`.

#### PATCH /api/ring/:id

Atualiza as informações de um anel existente.

#### DELETE /api/ring/:id

Remove um anel pelo seu `id`.

### 📂 Estrutura do Projeto

```bash
src/
├── app.controller.ts
├── app.module.ts
├── main.ts
├── ring/
│   ├── models/
│   │   ├── dto/
│   │   │   ├── create-ring.dto.ts
│   │   │   └── update-ring.dto.ts
│   │   ├── enum/
│   │   │   └── ring-type.enum.ts
│   │   └── interface/
│   │       └── ring.interface.ts
│   ├── repository/
│   │   └── ring.repository.ts
│   ├── ring.controller.ts
│   ├── ring.module.ts
│   ├── ring.service.ts
├── test/
│   ├── ring.controller.spec.ts
│   └── ring.service.spec.ts
```

### 🔒 Segurança

- Validação de entrada utilizando **class-validator** para garantir que os dados estejam corretos antes de persistir no banco.
- Uso de **enum** para garantir valores válidos para o tipo do anel (HUMAN, ELF, SAURON, DWARF).

### 📊 Testes e Cobertura

A aplicação inclui testes unitários que cobrem todos os cenários possíveis das rotas. Utilize o comando abaixo para visualizar a cobertura:

```bash
npm run test:cov
```

### 🏗️ Contribuindo

Se você quiser contribuir para o projeto, siga os seguintes passos:

1. **Fork o projeto**
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Faça um push para a branch: `git push origin minha-nova-feature`
5. Abra um pull request

### 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

Caso tenha alguma dúvida ou sugestão, fique à vontade para entrar em contato:

- **Email**: exemplo@dominio.com
- **LinkedIn**: [Seu LinkedIn](https://linkedin.com/in/seu-usuario)

---

Este é um README otimizado para garantir uma boa experiência de desenvolvimento, uso e contribuição para o projeto.