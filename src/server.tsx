import path from 'path';
import fs from 'fs';

import express from "express";
import { App } from "./components/App";
import { renderToString } from 'react-dom/server';

const PORT = process.env.PORT || 3006;
const app = express();

app.use("/public", express.static("./dist/public"));

app.get("*", async (req, res) => {
  try {
    const app = renderToString(<App />);
    const indexFile = path.resolve('./src/index.html');

    const data = await fs.promises.readFile(indexFile, 'utf8');
    const clientString = data.replace(
      '<div id="app"></div>',
      `<div id="app">${app}</div>`,
    );

    return res.send(clientString);
  } catch (e) {
    console.error("Something went wrong:", e);
    return res.status(500).send("Oops, better luck next time!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
