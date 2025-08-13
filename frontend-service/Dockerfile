# frontend-service/Dockerfile

# Step 1: Start from an official, lightweight Nginx web server image.
# Nginx is a high-performance, standard tool for serving static websites.
FROM nginx:alpine

# Step 2: Copy your website files into the default directory where Nginx looks for files to serve.
# The '.' on the left means "copy everything from the current folder" (where this Dockerfile is).
# The path on the right is the destination inside the container.
COPY . /usr/share/nginx/html

# That's it! When this container runs, Nginx will automatically start and serve
# your index.html file on port 80.