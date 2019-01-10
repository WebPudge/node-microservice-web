# node-service-test-web

consul microservice test based on nodejs

because the program is designed  run in docker environments, so prepare the docker running 
environment and the  docker-compose is critical.
but unfortunately, I would not show you how to do that, please <a href="www.google.com">google</a> for the basic preparation
## Step 1: Make The docker image
please check the Dockerfile, there are many scripts in the file which means make a docker image. run the next command:
>docker build -t fasimito/node-microservice-web .

Notes: please don't lost the last "."(dot)

## Step 2: Run The docker-compose to prepare for RUNNING ENV.

please use the next command:

>docker-compose -f docker-compose.consul.yml up -d

to start the basic running env.

## Step 3: Run the Web Container

please run the next command:

>docker-compose -f docker-compose.web.yml --scale 3 web

up till now, you have setup all the environment. so easy.