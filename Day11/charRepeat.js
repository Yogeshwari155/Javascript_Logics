//repeat times of element in a array
var a=['a','a','c','d','c','a','b']
var n=a.length
for(var i=0;i<n;i++)
{
    var c=1
    if(a.indexOf(a[i])==i)
    {
        for(var j=i+1;j<n;j++)
        {
            if(a[i]==a[j])
            {
                c++;
            }}
        console.log(a[i]+" repeats"+c+" times")
    }
}