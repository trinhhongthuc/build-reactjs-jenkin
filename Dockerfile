FROM node:16-apline

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD [ "npm", 'start' ]