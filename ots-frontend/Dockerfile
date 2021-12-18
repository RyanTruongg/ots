# FROM node:14.17-alpine3.14

# WORKDIR /app

# COPY jsconfig.json ./
# COPY package.json ./
# COPY yarn.lock ./

# RUN yarn install

# CMD ["yarn", "start"]

FROM node:14.17-alpine3.14

WORKDIR /app

COPY /build/ ./build

RUN yarn global add serve

CMD ["serve", "-s", "build"]
