/*

****
****
####
####

*/

var c=1
for(var i=1;i<=4;i++)
{
    for(var j=1;j<=4;j++)
{
        if(c%2!==0)
            process.stdout.write("*");
        else
            process.stdout.write("#")
}
if(i%2==0)
    c++;
process.stdout.write("\n")
}