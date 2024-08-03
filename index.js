const app = require("express")();

app.get("/", (req, res) => res.send("Hello..."));

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
});

let i = 0;
function send(res){
    res.write("data: " + `Hey${i}\n\n`);
    i += 1;
    setTimeout(() => send(res), 1000)
}

app.listen(8080);
console.log("listen to port 8080")