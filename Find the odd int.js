function findOdd(A) {
 var count = 0;
  for(var i = 0; i<A.length; i++){
    for(var j = 0; j<A.length; j++){
      if(A[i] == A[j]){
        count++;
      }
    }
    if(count % 2 != 0 ){
      return A[i];
    }
  }
}
