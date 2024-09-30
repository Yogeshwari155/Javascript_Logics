/*
    *
   * *
  *   *
 * * * *
 
*/
var n=4
for(var i=0;i<n;i++)
{
    for(var j=n-1;j>=0;j--)
    {
        if(j>i)
            process.stdout.write(" ")
        else{
            if(j==i||j==0||i==n-1){
                process.stdout.write(" *")
            }
            else{
                process.stdout.write("  ")
            }
        }
    }
    process.stdout.write("\n")
}