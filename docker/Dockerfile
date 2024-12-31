FROM node:23.1.0 as build

WORKDIR /app

COPY package.json yarn.lock ./
ENV NODE_ENV=development
RUN yarn install  --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]