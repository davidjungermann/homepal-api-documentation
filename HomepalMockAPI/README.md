**Build Docker image:**
`sudo docker build -t homepalmockapi .`

**In order to run Docker image in container:**
`sudo docker run -p 5000:5000 homepalmockapi`

**Export image to file**
`sudo docker save homepalmockapi:latest | gzip > homepalmockapi.tar.gz`

**Load image from file:**
`sudo docker load < homepalmockiapi.tar.gz`



