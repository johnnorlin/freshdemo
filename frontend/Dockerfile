FROM node

WORKDIR /usr/src/frontend

COPY . . 

# COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]