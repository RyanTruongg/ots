FROM node:14.17

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

# RUN npm install --platform=linux --arch=x64 --ignore-scripts=false --verbose

RUN yarn install

RUN yarn add sharp

CMD [ "yarn", "dev" ]
