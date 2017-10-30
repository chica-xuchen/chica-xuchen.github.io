
//var str='miaov';
//
//console.log(str);
//
//const http=require('http');//创建一个http的服务器
//
//const server=http.createServer(function(request,reponse){
//	reponse.write('我们都是好孩子');//reponse:响应（理解成“发送”给客户端），request:请求
//	reponse.end();
//});
//server.listen(9090);

const http=require('http');//直接下载下来的模块，不用路径
const fs=require('fs');//专门用来操作本地文件
http.createServer(function(req,res){
	//urlName是前端发送的信息
	let urlName=req.url;
	let na='www';
	
	//因为谷歌浏览器默认给服务器发送一个favicon.ico
	if(req.url!=='/favicon.ico'){
		//na+urlName=www/index.html
		fs.readFile(na+urlName,function(err,data){
			if(err){//如果文件没有读取出来走err
				res.write('404');
			}else{//文件读取出来了data是Buffer格式的，需要使用tostring转
				res.write(data.toString());			
			}
			res.end();
		});
	}
	
	
}).listen(7070);

