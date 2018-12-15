exports.home=function(req,res){
  res.render('home',{title:"home",
                     heading :'INDIAN Cities'
                     });
}

exports.city=function(req,res){
    var city=req.params.city;
    
    var heading ,title;
    if(city=="Mumbai"){
    console.log(city);
      title="MUMBAI";
      heading="MUMBAI CITY";
    } else if(city =="bangalore"){
    title="BANGALORE";
    heading="BANGALORE CITY";
    } else if(city =="delhi"){
    title="DELHI";
    heading="DELHI CITY";
    }

   res.render('city',{
    title:title,
    heading:heading,
    numberofimage:3,
    city:city
    });

}
