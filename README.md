

## 移动端网络调试 基于express的JsServerDemo
1. 用途 作为自己mock测试服务器
2. 可以简单的模拟各种请求数据
3. 可以结合Charles 拦截代理，将线上环境的数据完整替换为本地的数据，可以方便模拟调试各种情形


##  1. 启动mock的JsServer
 

``` javascript
 	node .\bin\www 
```
### 用法 结合Charles
1. Charles 的 Map 功能分 Map Remote 和 Map Local两种，前者是将制定的网络请求重定向到另一个网址，MapLocal 是将指定的网络请求重定向到本地文件。
2. 
<div  align="center">    
 <img src="./images/1497861361904.jpg" width = "270" />
</div>



  

2. 本次直接使用charles的MapRemote功能，将charles 配置map Remote 配置参考如下：
<div  align="center">    
 <img src="./images/1497863960158.jpg" width = "270" />
</div>




  
 3. 将[http://115.159.24.246:8080/JsServertest.json][3]  
 <div  align="center">    
  <img src="./images/1497864028831.jpg" width = "600" />
  </div>
mock修改成本地的 数据 ，区别在于修改了本地字段 **password** 为：**JsServerData**
<div  align="center">    
  <img src="./images/1497863907759.jpg" width = "600" />
  </div>


5. 根据需要修改自己的代码 位于（routes/index.js）

``` stylus
router.all('/test', function (req, res, next) {

    console.log(req)

    res.set({
        'Content-Length': '123',
    })


    res.sendFile('JsServertest.json', {root: path.join(__dirname, '../public/res')});
    // res.render('index', { title: 'Express' });
})
```


结合以上步骤 可以方便将app内网络请求转换成任意自己想要修改的数据

演示 修改本地的（public/res/JsServertest.json）
原接口响应结果
<div  align="center">    
  <img src="./images/charles.png" width = "600" />
  </div>



postman请求 `http://115.159.24.246:8080/JsServertest.json`返回数据已经被修改为
  <div  align="center">    
  <img src="./images/charles2.png" width = "600" />
  </div>
  
  不仅仅是可以修改返回的response的body内容还可以根据需要任意修改返回的header信息，
  
  

``` stylus
router.all('/trade/go', function (req, res) {
    console.log(req.headers)

    /*
    HTTP/1.1 200 OK
     Server	nginx
     Date	Mon, 19 Jun 2017 02:35:26 GMT
     Cache-Control	no-store
     Content-Type	text/xml;charset=UTF-8
     Content-Encoding	gzip
     Vary	Accept-Encoding
     Pragma	no-cache
     Set-Cookie	JSESSIONID=43E6672555D36EAB234DB20C53828DD0; Path=/; HttpOnly
     THE-TIME	Monday, 19-Jun-2017 10:35:27 CST
     Transfer-Encoding	chunked
     Proxy-Connection	Keep-alive
     */
    var date= new Date()
    res.set({
        'Content-Type': 'text/json;charset=UTF-8',
        'Content-Length': '123',
        'Date': date.toDateString()
    })
    res.sendFile('JsServertest.json', {root: path.join(__dirname, '../public/res')});

});
```








  [1]: ./images/1497861361904.jpg
  [2]: ./images/1497863960158.jpg
  [3]: http://115.159.24.246:8080/JsServertest.json
  [4]: ./images/1497863907759.jpg
  [5]: ./images/1497864028831.jpg
  [6]: ./images/charles.png  
  [7]: ./images/charles2.png 
  
  


