
FROM node:20


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .


ENV NODE_OPTIONS=--openssl-legacy-provider


RUN npm run build


EXPOSE 4173


CMD ["npm", "run", "preview", "--", "--host"]
