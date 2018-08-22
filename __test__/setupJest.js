import fetch, { Request} from 'node-fetch';
global.fetch = fetch;
global.Request = Request;