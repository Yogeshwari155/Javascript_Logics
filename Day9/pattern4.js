/*

   2
  24
 246
2468

*/

var j,m=1
for(var k=4;k>0;k--){
    j=m
    var i=0;c=1
    while(j!=0||i<k-1)
    {
      if(i!=k-1){
      process.stdout.write(" ")
      i++
      }
      else{
        process.stdout.write(`${2*c}`)
        c++
        j--
      }
    }
      m++
    process.stdout.write("\n")
    }