#using debian:jessie for it's smaller size over ubuntu
FROM debian:jessie

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Set environment variables
ENV appDir /var/www/app/homeautomation/client


# Run updates and install deps
RUN apt-get update

RUN apt-get install -y -q --no-install-recommends \
    apt-transport-https \
    build-essential \
    ca-certificates \
    curl \
    g++ \
    gcc \
    git \
    libcairo2-dev \
    libcurl4-openssl-dev \
    libgif-dev \
    libicu-dev \
    libjpeg62-turbo-dev \
    libpango1.0-dev \
    libssl-dev \
    make \
    nginx \
    rsync \
    rsyslog \
    software-properties-common \
    sudo \
    telnet \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean


ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.2.0

# Install nvm with node and npm from https://github.com/creationix/nvm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default


# Set up our PATH correctly so we don't have to long-reference npm, node, &c.
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Set the work directory
RUN mkdir -p /var/www/app/homeautomation/client
WORKDIR ${appDir}

# Add our package.json and install *before* adding our application files
ADD package.json /var/www/app/homeautomation/client
RUN npm install
RUN npm install --save-d webpack-dashboard webpack-dev-server

# Install pm2 so we can run our application
RUN npm i -g pm2 gulp tsd typescript gulp-util


# Add application files
ADD . /var/www/app/homeautomation/client

RUN npm run build

#Expose the port
EXPOSE 8088

CMD ["npm", "serve"]

# voila!
