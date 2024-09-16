function max(arr){
    
    for(let i=0;i<1;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]  
                arr[j]=arr[j+1]  
                arr[j+1]=temp   
            }
        }
    }

    console.log(arr[arr.length-1])

}

max([10,15,1,4,20,17,34,53])