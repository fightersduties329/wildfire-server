const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let nodes = {};

app.post("/update", (req, res) => {
  const data = req.body;

  // ESP32 sends { nodes: [...] }
  // loop through each node and store individually
  if (data.nodes && Array.isArray(data.nodes)) {
    data.nodes.forEach(n => {
      nodes[n.id] = n;
    });
  }

  console.log("Node update:", JSON.stringify(nodes));
  res.json({ status: "ok" });
});

app.get("/latest", (req, res) => {
  res.json({
    nodes: Object.values(nodes)
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Railway server running");
});
