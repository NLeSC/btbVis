FROM mkuzak/btbserver

# RUN mkdir /webapp
WORKDIR /app

COPY . .
RUN apt-get install -y nodejs-legacy npm git
RUN npm install -g bower grunt grunt-cli
RUN npm install
RUN bower install --allow-root
CMD python btbFlaskServer.py & grunt serve
