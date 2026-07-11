
FROM node:20-alpine

# Install tools missing in Alpine (useradd, iostat, bash)
# RUN apk add --no-cache shadow sysstat bash

# Create app directory
WORKDIR /usr/src/app

##ENV NODE_ENV production
ENV NODE_ENV $NODE_ENV
ENV DEBUG $DEBUG

# Copy app dependencies
#COPY package*.json yarn.lock ./
#Run
RUN chmod 2777 "/usr/src/app"

COPY . /usr/src/app

# Install app dependencies
RUN yarn install --pure-lockfile
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start", "-p", "3000" ]
