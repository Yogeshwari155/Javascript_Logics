var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

//Displaying elements in days
for(var i=0;i<days.length;i++)
    console.log(days[i])

//check whether Sunday is in days if there displaying its index
if(days.includes("Sunday"))
    console.log("Sunday is present at index : "+days.indexOf("Sunday"))
else
    console.log("Sunday is not present")

//Monday
if(days.includes("Monday"))
    console.log("Monday is present at index : "+days.indexOf("Monday"))
else
    console.log("Monday is not present")
  
