console.log("vijay"); 
const express=require('express');  
//const path=require('Path'); 
const port=8082; 

const app=express(); 

//set a view engine 
app.set('view engine','ejs'); 
app.set('views',"./views"); 
//app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded()); 
//adding assets 
app.use(express.static("assets"));

var descriptionList=[
  {
   description:" Get a Vegetable ", 
   date:"2022-01-01", 
   category:"Personal"
  }
];

app.get('/', function(req,res){ 
  //console.log(descriptionList);
  return res.render('home',{
      title :"TODO APP",
      description_list:descriptionList 
  }); 
});  
app.post('/delete-todo-item',function(req,res){
  //let description=(req.query.description); 
  //console.log(description); 
  console.log(req.body); 
  console.log(req.body.taskname); 
  let description=req.body.taskname; 
  let descriptionIndex=descriptionList.findIndex(Description=>Description.description==description); 
 
 if(descriptionIndex!=-1) 
 {
     descriptionList.splice(descriptionIndex,1); 
 } 
 return res.redirect('back');  

});



app.post('/create-description', function(req,res){ 

  // contactList.push(req,body); or 
  //console.log(req.body.description);
  descriptionList.push({
    description:req.body.description, 
    date:req.body.date,
    category:req.body.category
  }); 
return res.redirect('/'); 
}); 
app.listen(port,function(err){
    if(err) { 
    console.log(`ERROR : ${err}`);  
    return; 
    } 
    console.log("Success"); 
}); 