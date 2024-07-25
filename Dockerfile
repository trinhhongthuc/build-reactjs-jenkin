FROM node:18-alpine as builder

RUN npm install -g yarn

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]