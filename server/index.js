
var express = require('express');
var mongodb = require('mongoose');
var jobModel= require('./model/job-model');
const userModel= require('./model/users-model');
var cors= require('cors');
var dbConn = mongodb.connect('mongodb://localhost:27017/careerPaid?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser: true});

var app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));
app.use(express.json());

app.post('/login', async(req,res)=>{
    const {userid, password} = req.body;
    if(!(userid && password)){
        res.status(400).send("Empty user name or password");
        }
    const user= await userModel.findOne({userid: userid, password: password},(err,result)=>{
        if(err)
            res.send("Please try again");
        else 
        {
                console.log("redirecting...");
                // res.setHeader("Access-Control-Allow-Origin", "*");
                // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
 //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);
                // res.redirect("http://localhost:3000");
                // res.end();

                
                res.send(result);
                
        }
    });
});


app.post('/postJob', async (req, res)=> {
   
        const job= new jobModel({
            title: req.body.jobtitle, 
            company: req.body.company,
            location: req.body.location,   
            degree: req.body.degree,
            skills: req.body.skills,
            experience:req.body.experience,
            details:req.body.details
        });
        await job.save();
        res.send("Data received:");// + JSON.stringify(req.body));
    });    
    


app.get('/postedJobs',  function(req, res) {
    
    jobModel.find({},(err,result)=>{
        if(err)
        {
            console.log("error");
            res.send(err);
        }
        else
        {
            console.log(result);

            res.send(result);
        }
            
    });
    
});

app.put("/deleteJob/:id",  async (req, res) => {
    const id= req.params.id;
    await jobModel.findByIdAndRemove(id).exec();
    console.log("sucess");
    res.send("Deleted");
   
});



app.listen(3001, ()=>{
    console.log("Connected");
} );
