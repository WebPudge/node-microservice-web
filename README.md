# node-microservice-web

consul microservice test based on nodejs

because the program is designed  run in docker environments, so prepare the docker running 
environment and the  docker-compose is critical.
but unfortunately, I would not show you how to do that, please <a href="www.google.com">google</a> for the basic preparation
## Step 1: Make The docker image
please check the Dockerfile, there are many scripts in the file which means make a docker image. run the next command:
>docker build -t fasimito/node-microservice-web .

Two important notes:
1. please don't lost the last "."(dot)
2. for another reason would affect the build process is the network environment and the network speed of the server ,
so please make sure the server could access the repository and the speed is fast enough.

## Step 2: Run The docker-compose to prepare for RUNNING ENV.

please use the next command:

>docker-compose -f docker-compose.consul.yml up -d

to start the basic running env.

## Step 3: Run the Web Container

please run the next command:

>docker-compose -f docker-compose.web.yml up -d --scale web=3

up till now, you have setup all the environment. so easy.

## Step 4: Check

After all the container is running, we should have a check of the microservice environments.
1. check the containers:
>docker ps -a

should list all the containers, if some one's status is not up, you should run the command
>docker logs [container ID]

to check the container's log to get the reason and resolve the problems.