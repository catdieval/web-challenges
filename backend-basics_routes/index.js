import { server } from "./server.js";

const port = 8080;
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
  });
