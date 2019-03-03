### GraphQL nodejs example

#### Developmemt
- yarn global add pm2 # Skip it if you already have this
- cp ./server/config.js.example ./server/config.js # And Modify it
- yarn  --cwd="./server" && yarn --cwd="./client"
- pm2 start
