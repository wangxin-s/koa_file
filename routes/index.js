const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/api/htmlToPdf', async (ctx, next) => {
  const puppeteer = require('puppeteer');
  const readable = require('stream').Readable
  const s = new readable;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.homsom.com/', {waitUntil: 'networkidle2'});
  let name = 'hn'
  let m = await page.pdf({
    path: `${name}.pdf`,
    // format: 'A4',
    printBackground: true,
    '-webkit-print-color-adjust': 'exact',
  });
  console.log('---------', m)
  ctx.set('Content-disposition','attachment;filename='+`${name}.pdf`);
  s.push(m)
  s.push(null);
  ctx.body = s;
  await browser.close();
})
module.exports = router
