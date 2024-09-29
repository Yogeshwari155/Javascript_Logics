/*

****
 ***
  **
   *
   
  */

var j,m=4;
for(var k=0;k<4;k++)
{
    j=m;
    var i=0;
    while(j!=0||i<k){
        if(i!=k){
            process.stdout.write(" ");
            i++;
        }
    else
    {
        process.stdout.write("*");
        j--;
    }
}
m--;
process.stdout.write("\n");
}