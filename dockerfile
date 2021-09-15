FROM node:14.17.6

RUN mkdir -p /home/app

WORKDIR /home/app/

COPY package*.json /home/app/

RUN npm install

COPY . /home/app

CMD ["npm", "run", "start"]
