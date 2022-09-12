import { Headers } from 'node-fetch';
import fetch from 'node-fetch';

// Add the API key to an header object
const meta = {
    "x-dune-api-key": "0PiRuJ5J5tLj6YDJDBalzM410fsFS18I"
};
const header = new Headers(meta);

//  Call the Dune API
const response = await fetch('https://api.dune.com/api/v1/query/1258228/execute', {
    method: 'POST',
    headers: header
});
const body = await response.text();

console.log(body);