var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Contact = require("./models/contact")
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/contactlist",function(){
	console.log("successfully connected to the mongodb")
})
var PORT = process.env.PORT || 3000;
/*app.use(express.static(__dirname+"/public"))
app.get("/",function(req,res){
	res.send("helloajkajkl hyd");
})
app.listen(PORT,function(){
	console.log("server is listening at "+ PORT);
})*/

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json());
app.get("/contactList",function(req,res){
	Contact.getContacts(function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})

	app.post("/contactList",function(req,res){
		var body = req.body; // will fetch body details
		Contact.addContact(body,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
		})
	
	})


app.get("/contactList/:id",function(req,res){
	var id = req.params.id
	Contact.getContactById(id,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	

	})
})

app.put("/contactList/:id",function(req,res){
	var id= req.params.id;
	var body = req.body;
	Contact.updateContact(id,body,function(err,data){
	if(err){
			throw err;
		}
		res.json(data);
	
	})
})




app.delete("/contactList/:id",function(req,res){
	var id = req.params.id
	Contact.deleteContact(id,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
		
	})
})

	/*app.get("/employeeList",function(req,res){
		Contact.getContacts(function(err,data){
			if(err){
				throw err;
			}
			res.json(data);
		})
	})
*/






	/*var person1 ={
	name: "scott",
	email:"scott@gmail.com",
	mobile:"(989) 1111-1111"

var person2 ={
	name: "tharun",
	email:"tharun@gmail.com",
	mobile:"(989) 22222-1111"
}

var person3 ={
	name: "arun",
	email:"arun@gmail.com",
	mobile:"(989) 3333-1111"
}*/
/*var contactList = [person1,person2,person3];
res.send(contactList)*/
})
app.listen(PORT,function(){
	console.log("server is listening at "+ PORT);
})