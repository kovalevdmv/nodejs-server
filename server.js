const http = require('http');
const server = http.createServer();

server.on('request', (reg,res)=>{
    switch(reg.url){
        case '/':
            res.end('<b>root page</b>');
            break;
        case '/123':
            res.end('<b>page 123</b>');
            break;
        default:
            res.end('<b>Not found</b>');
            break;
    }
    

    
});

server.listen(8080, ()=> console.log('Server work'));