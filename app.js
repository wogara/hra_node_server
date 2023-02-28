const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//const jsonParser = bodyParser.json()
//const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({
	origin: "*"
}))

//app.set("view engine","ejs");
//app.use(express.static('public'));
app.get("/",function(req,res){
  res.send("hey");
});
app.post("/",function(req,res){
	console.log(req.body);
	console.log("hey");
	res.send("ok");
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening here");
});
