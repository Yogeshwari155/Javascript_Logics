//Ascending order
var a=[6,4,7,2,5]
for(var i=1;i<a.length;i++)
    for(var j=0;j<i;j++)
        if(a[i]<a[j])
        {
            var c=a[i]
            a[i]=a[j]
            a[j]=c
        }
console.log(a)
//minimum element in this array
console.log("Minimum element : "+a[0])
//maximum element in this array
console.log("Maximum element : "+a[a.length-1])
