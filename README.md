# Froot Wrapper
 Froot Wrapper is the official Node.js wrapper for Bots Para Discord.

### Installation
``
$ npm i froot-wrapper
``

### Usage
Start importing the package and then instantiate the client:
````js
const froot = require('froot-wrapper')
const client = new froot.BPDClient()

// Or direct import 
const { BPDClient } = require('froot-wrapper')
const client = new BPDClient()
````

#### Retrieving a user
````js
client.getUser("268526982222970880")
.then(response => console.log(response))
.catch(reason => console.log("Uh-oh! An error occurred:" + reason))
````

#### Retrieving a bot
````js
client.getBot("464304679128530954")
.then(response => console.log(response))
.catch(reason => console.log("Uh-oh! An error occurred:" + reason))
````

### Contribute
Clone the repository with `$ git clone https://github.com/zuraaa-projects/froot-wrapper`, make changes and then make a [Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
For support, join the [support server](https://discord.gg/t5qzWQB), and for issues, [open an issue](https://github.com/zuraaa-projects/froot-wrapper/issues/new).
