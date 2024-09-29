/*

1
12
123
1234

*/
for(var i=1;i<=4;i++)
    {
    for(var j=1;j<=i;j++)
    {
        process.stdout.write(`${j}`)
    }
    process.stdout.write("\n")
}