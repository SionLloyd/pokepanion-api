FROM node:12.13.0

WORKDIR /app

ENV NODE_ENV=production

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --production=false

COPY . /app

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]