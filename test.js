const fs = require('node:fs');

async function readPlanContent(file) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
}


async function run() {
    const content = await readFile( 'README.txt' );
    console.log( content );
}

run();