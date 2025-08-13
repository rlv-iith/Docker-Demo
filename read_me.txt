Fantastic! That is the perfect outcome. Congratulations, you have successfully built and tested a multi-container, polyglot (multi-language) application.
Let's quickly recap what you just achieved, as it's a major milestone in modern development:
You acted as the end-user when you sent a request from Postman.
Your request hit the node_app container on localhost:3000 because you mapped that port in your docker-compose.yml.
Your Node.js "waiter" app took the request and made a new, internal request to http://python_api:5000. This worked because Docker Compose created a private virtual network where the services can find each other by their names (python_api).
The Python "chef" app (python_api container) received the order, processed the data in the your_script.py file, and returned a JSON response.
The Node.js app received the response from the Python app and relayed it back to you in Postman.