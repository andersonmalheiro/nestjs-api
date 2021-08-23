FROM node:12.18-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "yarn.lock*", "./"]

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]
