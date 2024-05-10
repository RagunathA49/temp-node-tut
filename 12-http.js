import http from 'http';
const server = http.createServer(
    (req,res)=>{
        if(req.url === '/'){
            res.end('Welcome to out home page')
        }
        if(req.url === '/about'){
            res.end('Welcome to out about page')
        }
        res.end(`
        <h1>OOps!</h1>
        <p>We can't seem to find the page you are looking for <a href="/">back home</a></p>
        `)
})

server.listen(4030)