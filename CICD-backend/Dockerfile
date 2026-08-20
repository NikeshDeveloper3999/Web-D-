FROM node:22-alpine 

WORKDIR /app 

COPY package*.json ./ 
RUn npm install 


COPY ..
EXPOSE 8080 

CMD ["node" , "server"]