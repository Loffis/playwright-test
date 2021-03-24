FROM mcr.microsoft.com/playwright:bionic
ENV SCREENSHOTURL="http://www.standout.se"
WORKDIR /usr/src/app
COPY . .
RUN npm install -g npm
RUN npm install
COPY . .
CMD ["node", "--trace-warnings", "index.js", "${URL}"]
