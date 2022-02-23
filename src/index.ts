import express, {Express, Request, Response} from 'express';

const app: Express = express();

function listDocs(req: Request, res: Response) {
  res.json({
    items: [
      {name: 'One', count: 3},
      // {name: 'Two', count: 1},
      // {name: 'Will', count: 0},
      // {name: 'This', count: -1},
      // {name: 'overflow?', count: 2},
    ],
  });
}

function main() {
  const PORT: string | number = 8080; // process.env.PORT || 8080

  // Serve the React static files after build
  app.use(express.static('client/build'));
  app.get('/docs', listDocs);

  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
}

main();
