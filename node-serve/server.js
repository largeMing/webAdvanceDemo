const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico')
        return

    res.setHeader('Content-Type', 'text/html')
    res.setHeader('X-Foo', 'bar')
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(`
<html maaa=a>
<head>
    <style>
        body div #myid {
            width: 100px;
            background-color: #ff5000;
        }
        body div img {
            width: 30px;
            background-color: #ff1111;
            color: #333;
            font-size: 16px;
        }
    </style>
</head>
<body>
<div>
    <img id="myid"/>
    <img />
</div>
</body>
</html>
`)
})

server.listen(8088)