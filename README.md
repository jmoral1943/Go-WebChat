# Go-WebChat
To start the project you will need to cd into the backend dir and run 
```
go run main.go
```
Then with another terminal
```
cd front-end
npm i
npm run start
```
Send a message and you'll have a web chat application if you want to host it online there is a dockerfile to build the docker image.
```
docker build -t backend .
```
If you want to see it run you can run 
```
docker run -it -p 8080:8080 backend
```
For the front-end you can put the frontend in a S3 bucket in AWS and have the docker image be ran on the cloud.
