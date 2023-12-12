FROM node

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]


# # Build the React app
# RUN npm run build

# # Use a smaller image for serving the production build
# FROM nginx

# # Copy the build from the 'build' stage to the nginx web root
# COPY --from=build /usr/src/app/build /usr/share/nginx/html

# # Expose the port that the app will run on
# EXPOSE 80:80

# # The default command to run when the container starts
# CMD ["nginx", "-g", "daemon off;"]
