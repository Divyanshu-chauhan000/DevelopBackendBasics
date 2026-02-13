const http = require('http');

const server = http.createServer((req, res) =>{
console.log(req.url , req.method)

if(req.url === '/home'){

res.write('<h1>This is the Home Section</h1>');

return res.end();
}
else if(req.url === '/men'){
res.write('<h1>This is the Men Section</h1>');

return res.end();
}
else if(req.url === '/women'){
res.write('<h1>This is the women Section</h1>');

return res.end(); 
}
else if(req.url === '/kids'){
res.write('<h1>This is the kids Section</h1>');

return res.end();
}
else if(req.url === '/cart'){
res.write('<h1>This is the cart Section</h1>');

return res.end();
}


// res.setHeader('Content-type' , 'text-html');
res.write('<html>');
res.write('<head> <title> Myntra Nav </title> </head>');
res.write('<body><nav>');
res.write('<ul>');
res.write('<a href="/home"><li>Home</li></a>');
res.write('<a href="/men"><li>Men</li></a>');
res.write('<a href="/women"><li>Women</li></a>');
res.write('<a href="/kids"><li>Kids</li></a>');
res.write('<a href="/cart"><li>Cart</li></a>');
res.write('</ul>')
res.write('</nav></body>');



res.write('</html>');
res.end();
})

const PORT = 3000;
server.listen(PORT , ()=>{
console.log(`Server is running on the port ${PORT}`);
});
