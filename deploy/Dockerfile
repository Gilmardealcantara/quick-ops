# build environment
FROM node:15-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json
RUN yarn install --silent
RUN yarn global add react-scripts@3.4.4 --silent

COPY ./ /app
RUN yarn run build


# production environment
FROM nginx:1.19.4-alpine

COPY --from=build /app/build /usr/share/nginx/html

# For React-Router
RUN rm /etc/nginx/conf.d/default.conf
COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;" ]
