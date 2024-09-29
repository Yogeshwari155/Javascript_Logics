/*

   *
  * *
 * * *
* * * *

*/

var j,k=1
for(var i=10;i>0;i--)
{
    j=1
    var m=1
    while(j!=i)
    {
        process.stdout.write(" ")
        j++
    }
    while(j<i+k){
        if(m%2!=0)
            process.stdout.write("*")
        else
            process.stdout.write(" ");
        m++
        j++
    }
    k+=2
    process.stdout.write("\n")
}