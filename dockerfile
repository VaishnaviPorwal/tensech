FROM node:12
WORKDIR /index.js
COPY package*.json ./ 
RUN npm install 

COPY . . 
