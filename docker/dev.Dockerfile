FROM node:23.1.0

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

CMD ["yarn", "dev"]