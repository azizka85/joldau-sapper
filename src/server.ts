import * as http from 'http';
import sirv from 'sirv';
import { Router } from './utils/Router';
import * as template from './template.html';
import { ServerNavigator } from './utils/ServerNavigator';

const port = process.env.PORT || 3000;

const router = new Router({routes: [
	{ pattern: /about/ },
	{ pattern: /products\/(.*)\/edit\/(.*)/ }
]});

const assets = sirv('public');

http.createServer(async (req, res,) => {
  assets(req, res, async () => {
    const navigator = new ServerNavigator(router, res);
    navigator.handlePath(req.url);

    const result = navigator.match(req.url);
    const props: any = { navigator };

    if(!result.route) {
      props.navigationPath = '/about';
    }

    const component = await import('./App.svelte');
    const data = component.default.render(props);
    const head = `${data.head}<style>${data.css.code}</style>`;

    let html = template.default;
    html = html.replace('%server.lang%', 'en');
    html = html.replace('%server.head%', head);
    html = html.replace('%server.html%', data.html);
  
    res.end(html);
  });
}).listen(port);
