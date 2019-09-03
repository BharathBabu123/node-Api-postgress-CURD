const pg = require('pg');                                                          //npm install pg
const url='postgres://postgres:Admin@123@localhost:5432/postgres';
const client =  new pg.Client(url);
client.connect(function(err){
if(err){
return console.error('Please Give Me Valid Url');
}
});


function InsertData(req,res){
    var user ={
     id:req.body.id,
     category:req.body.category,
     name:req.body.name,
     description:req.body.description,
     image:req.body.image
    }
let InseartQuarry=`INSERT INTO handloom.clothes(id,category,name,description,image) VALUES 
                    (${user.id},'${user.category}','${user.name}','${user.description}','${user.image}')`;
               //1....**IN Promise Formate**/
client.query(InseartQuarry)
.then(result =>res.send(user))
.catch(err =>console.error('Please Enter A Valid Query'+err))
}


function Delete (req,res){
    id=req.body.id;
    let DeleteQuary = `DELETE from handloom.clothes where id = ${id}`;
           //**IN Promise Formate**/
     client.query(DeleteQuary)
     .then(result =>res.send(result.rows))
     .catch(err =>console.error(err))
}


function Update (req,res){
        var user ={
            id:req.body.id,
            category:req.body.category,
            name:req.body.name,
            description:req.body.description,
            image:req.body.image
           }
    let UpdateQuary=`UPDATE handloom.clothes set category='${user.category}',name='${user.name}',
                      description='${user.description}',image='${user.image}' where id=${user.id}`;
                      //**IN Promise Formate**/
    client.query(UpdateQuary)
    .then(result =>res.send(user))
    .catch(err =>console.error("Please Give Me A Valid Update Quary"+err))
}


function Retrive(req,res){
    //**IN Promise Format**/
let RetriveQuary = `SELECT * from handloom.clothes`;
client
.query(RetriveQuary)
.then(result => res.send(result.rows))
.catch(err => console.error('Please Enter A Valied Queary'+err))
}


function singleid(req,res){
    id=req.body.id;
let SigleIdQurey = `SELECT * from handloom.clothes where id=${id}`
client.query( SigleIdQurey)
.then(result =>res.send(result.rows))
.catch(err=>console.error("PLease Provide a Valie SingleId URL"+err))
}




module.exports = {add : InsertData , dlt : Delete , updte : Update , rtve : Retrive , sngle:singleid}