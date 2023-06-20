FROM node:16-alpine 

WORKDIR /home

COPY package*.json ./

RUN npm install

COPY . /home/

EXPOSE  3000

CMD [ "npm", "run", "dev" ]