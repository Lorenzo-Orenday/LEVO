//Standard modules/requires
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

// connect to Mongoose (Username: MasterUser password: master123)
mongoose.connect("mongodb://MasterUser:master123@cluster0-shard-00-00.no3vk.mongodb.net:27017,cluster0-shard-00-01.no3vk.mongodb.net:27017,cluster0-shard-00-02.no3vk.mongodb.net:27017/LEVO?ssl=true&replicaSet=atlas-gu7ilm-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser:true}, {useUnifiedtopology: true})

//Data Schema for DB
const FeedbackSchema = {
    Name: String,
    Comment: String,
    Contact: String
}

const Feedback = mongoose.model("Feedback", FeedbackSchema);

// App Get
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


//App POST
app.post("/", function(req, res){
    let newFeedback = new Feedback({
        Name: req.body.name,
        Comment: req.body.comment,
        Contact: req.body.contact,
    });
    newFeedback.save();
    res.redirect("/");
})


// App Listen
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})


/////////////////////////////////////////////////////////

// Get CSS styles file
app.get("/public/styles.css", function(req, res){
    res.sendFile(__dirname + "/public/styles.css")
})

// Get tab image
app.get("/images/favicon-16x16.png", function(req, res){
    res.sendFile(__dirname + "/images/favicon-16x16.png")
})

// Get slogan_picture
app.get("/images/slogan_picture.png", function(req, res){
    res.sendFile(__dirname + "/images/slogan_picture.png")
})

// Get slogan_logo
app.get("/images/slogan_logo.png", function(req, res){
    res.sendFile(__dirname + "/images/slogan_logo.png")
})
