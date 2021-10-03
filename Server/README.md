# Server

This is the server ..........

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

Need to export NODE_ENV var
```bash
export /home/username/storage
```