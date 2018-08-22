import nock from 'nock';
import SvgUri from "..";

test('can make get requests', async () => {
  nock('http://test.com').get('/image/test.svg').reply(200, "<svg></svg>");

  const svg = await new SvgUri({}).fetchSVGData('http://test.com/image/test.svg');
  expect(svg).not.toBeNull();
});

test('can make post requests', async () => {
  nock('http://test.com').post('/image/test.svg').reply(200, "<svg></svg>")

  const request = new Request('http://test.com/image/test.svg', { method: 'POST' });
  const svg = await new SvgUri({}).fetchSVGData(request);
  expect(svg).not.toBeNull();
})