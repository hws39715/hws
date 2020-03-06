var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;
    if (pathname == "favicon.ico") {
        return;
    } else if (pathname == "/" || pathname == "index") {
        var pathname = __dirname + '/' + url.parse("index.html").pathname;
        var indexData = fs.readFileSync(pathname, "utf-8");
        res.writeHead(200, { "Content-type": "text/html" }) //写包头
        res.end(indexData);
    }else{
        res.writeHead(404,{"Content-type":"text/plain"});
        res.end("the page is not founded");
    }

    //如何用原生的node取处理一下 发回 图片 get请求 和post请求

    // //1、 发回去文件的文件路径
    // var pathname = __dirname+'/'+url.parse("index.html").pathname;
    // //2、 通过文件路径把文件读取到内存
    // var indexData = fs.readFileSync(pathname,"utf-8");
    // //3、 把读取到内存的数据 打成数据包发回（写包头 写包体）
    // res.writeHead(200,{"Content-type":"text/html"}) //写包头
    // res.end(indexData);
}).listen(3000);

//chrome-->server 发包 request 请求包 req
//server-->chrome 发包 response 返回包 res

//  var server = http.createServer(function(){

// }).addListener(3000,"201.8.12.345");