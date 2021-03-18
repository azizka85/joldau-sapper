import * as http from 'http';
import sirv from 'sirv';
import * as template from './template.html';

const port = process.env.PORT || 3000;

const assets = sirv('public');

http.createServer(async (req, res,) => {
  assets(req, res, async () => {
    const component = await import('./App.svelte');
    const data = component.default.render();

    let head = `${data.head}<style>${data.css.code}</style>`;
    let html = template.default;
    html = html.replace('%server.lang%', 'en');
    html = html.replace('%server.head%', head);
    html = html.replace('%server.html%', data.html);
  
    res.end(html);
  });
}).listen(port);
