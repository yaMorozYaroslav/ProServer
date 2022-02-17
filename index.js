var express = require("express");
var axios = require("axios");
var port = process.env.PORT || 3001;
var app = express();
var oAuth = require('./moddl/oAuth');
 
const challengesAPIEndpoint = "http://localhost:8080/challenges";
app.get("/challenges", async(req, res)=>{
    try{
        const{access_token}=req.oauth;
        const response = await axios({
            method: "get",
            url: challengesAPIEndpoint,
            headers: {Authorization: `Bearer ${access_token}`},
        });
        res.json(response.data);
    } catch(error){
        console.log(error);
        if(error.response.status === 401){
            res.status(401).json("Unathorized");
        }else if (error.response.status === 403){
            res.status(403).json("Permission denided");
        }else{
            res.status(500).json("Whoops, something");
        }
    }
});
app.listen(port, ()=>console.log("Started"));