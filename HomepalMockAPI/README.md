**Stand in the "SalesTool" folder.** 
`cd SalesTool`

**Build Docker image:**
`sudo docker build -t salestool .`

**In order to run Docker image in container:**
`sudo docker run -p 5000:5000 salestool`

**Export image to file**
`sudo docker save salestool:latest | gzip > salestool.tar.gz`

**Load image from file:**
`sudo docker load < salestool.tar.gz`




