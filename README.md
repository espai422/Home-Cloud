# home-cloud
The cloud at home

## Instalation

First of all you need to clone this repo and unzip the bootstrap theme

```bash
git clone https://github.com/espai422/home-cloud
cd home-cloud/client/src
tar -xzvf bootstrapTheme
```
## MongoDB

We are using a MongoDB database to store our users. You need to install and start a MongoDB server.

#### Arch

MongoDB is not in the oficial arch repo so you will need to install it from the **AUR**.

`yay -S mongodb-bin`

Once is istalled you will ned to start the server.
To start the server you can use the following command:

`sudo systemctl start mongodb`

If you want the server to start automatically in the system boot you can use enable the service with

`sudo systemctl enable mongodb`


## Dependences
There are only a nom dependeces so you can go to the root of each server an run npm install

`cd Server && npm install`
`cd client && npm install`


## Set-Up
Once the bootstrap theme is extracted, you need to export 3 ENV VARS for the server and 1 for the client
Values ar only an exaple
Server
```bash
export HOST=192.168.1.75
export PORT=4222
export NODE_ENV=/home/Cloud
```
Client
```bash
export REACT_APP_API_URL=http://192.168.1.75:4222
```

Remember to export each var in diferent terminals, if it will not run

## Run 

Server --> `node server.js`
client --> `yarn start`

if want to use produccion envoirement you will need to buid the react app



