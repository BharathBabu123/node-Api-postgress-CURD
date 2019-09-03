
const express= require('express');
var app = express();
var cors=require('cors');
app.use(cors());
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const handloomdata= require('./handloomdata');


app.post("/InsertData",handloomdata.add);
app.post("/DeleteData",handloomdata.dlt);
app.put('/UpDateData',handloomdata.updte);
app.get("/RetriveingData",handloomdata.rtve);
app.put("/SingleId",handloomdata.sngle);
app.listen(9999, function () {

    console.log("Example app listening at http://localhost:9999")
 });