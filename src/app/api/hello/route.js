/** @format */

import * as fs from "fs";


export async function GET(request) {

  data1 = {"message": "Hello "}

  // fs.readFile('blogdata/how-to-learn-javascript.json', 'utf-8',(data) => {
  //  console.log(data)
  // });

  const headers = {
    'Content-Type': 'application/json',
  };

  return new Response(data1, { status: 200, headers });
}
