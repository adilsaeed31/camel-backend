FROM node:8 as base
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server
COPY package.json ./

FROM base as development
ENV NODE_ENV development
RUN npm install
CMD ["npm", "start"]

FROM base as production
ENV NODE_ENV=production
RUN npm install --production
CMD ["npm", "run", "start:prod"]
