function sumOfOther(arr){
    let newArr = [];
    let sum=0;
    const l=arr.length;
    for (i=0;i<l;i++){
        sum +=arr[i];
    }
    for (i=0;i<l;i++){
        newArr[i]=sum-arr[i];
    }
    return newArr;
}