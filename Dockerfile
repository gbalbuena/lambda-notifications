FROM node:8.9.0

ENV NODE_ENV production
ENV PORT 3000

RUN mkdir /home/node/app
WORKDIR /home/node/app
ADD . .

EXPOSE 3000

RUN yarn install
CMD yarn serve
