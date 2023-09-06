# Use a imagem oficial do Node.js na versão 18 LTS como base
FROM node:18

# Crie um diretório de trabalho no container
WORKDIR /app

# Copie todos os arquivos do projeto para o diretório de trabalho no container
COPY . /app

# Instale as dependências do projeto
RUN npm install

# Construa a aplicação Next.js
RUN npm run build

# Exponha a porta em que a aplicação Next.js será executada (pode ser a porta que você especificar em seu projeto)
EXPOSE 3000

# Inicialize a aplicação Next.js
CMD ["npm", "run", "dev"]
