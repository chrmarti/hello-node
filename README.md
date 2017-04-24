## Debugging a Docker container in Visual Studio Code

Run:

```
docker build -t hello-node .
docker run -it --rm -p 3000:3000 -p 9229:9229 hello-node
```

Then hit `F5`, place a breakpoint in `server.js` on the `send()` line and open [http://localhost:3000](http://localhost:3000).