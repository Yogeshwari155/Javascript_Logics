/*

   *
  **
 ***
****

*/

var j,m=1;
for(var k=4;k>0;k--)
{
    j=m;
    var i=0;
    while(j!=0||i<k-1){
        if(i!=k-1){
            process.stdout.write(" ");
            i++;
        }
    else
    {
        process.stdout.write("*");
        j--;
    }
}
m++;
process.stdout.write("\n");
}