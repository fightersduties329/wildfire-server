const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let nodes = {};

app.post("/update",(req,res)=>{

    const data = req.body;

    nodes[data.id] = data;

    console.log("Node update:",data);

    res.json({status:"ok"});
});

app.get("/latest",(req,res)=>{

    res.json({
        nodes:Object.values(nodes)
    });

});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Railway server running");
});
