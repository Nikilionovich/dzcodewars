function findOutlier(integers){
let count1=0,count2=0,index=0;
for(let i of integers )
  {
    if(index>3) continue;
    if(i%2==0 )
      {
        count1++;
      }
    else count2++;
  index++;
  }
if(count1>count2)
  {
    for(let i of integers )
  {
    if(i %2 != 0 )
      {
        return i;
      }
   
  }
  }
else {
  for(let i of integers )
  {
    if( i %2 == 0 )
      {
        return i;
      }
   
  }
}
}

  console.log(findOutlier([2,6,8,10,3]))
  
