/*

    *
   * *
  * * *
 * * * *
  * * *
   * *
    *
    
*/

var n=4
for(var i=0;i<2*n;i++)
{
    if(i>n){
        for(var j=n;j<2*n;j++)
        {
            if(j<i){
                process.stdout.write(" ")
            }
            else{
                process.stdout.write(" *")
            }
        }
    }
    else
    {
        for(var k=n;k>0;k--)
        {
            if(k>i)
            {
                process.stdout.write(" ")
            }
            else{
                process.stdout.write(" *")
            }
        }
    }
    process.stdout.write("\n")
}