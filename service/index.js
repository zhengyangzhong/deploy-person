const http = require('http')

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf8')

  if(request.method === 'GET' && request.url === '/test'){
    console.log('被执行了');
    response.write('123123')
    response.end()
  } else {
    response.end('not fount url')
  }
  // console.log(request, response);
  // response.write('123')
  // response.end()
})

server.listen(5050, function(){
  console.log('启动localhost:5050端口测试服务器');
})