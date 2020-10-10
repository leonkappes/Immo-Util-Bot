FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .
COPY tsconfig.json .

RUN npm ci

# Bundle app source
COPY ./src ./src

RUN npm run build

ENTRYPOINT ["npm", "start"]