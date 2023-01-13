FROM node:17.6.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
