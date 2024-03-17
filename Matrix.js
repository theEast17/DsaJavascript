function matrix(n) {
    const result = []
    for(let i=0; i<n; i++){
      result.push([])
    }
  
    let counter=1,startRow=0,endRow=n-1,startCol=0,endCol=n-1

    
    while(startRow<=endRow && startCol<=endCol){
        for(let i=startRow;i<=endCol;i++){
            result[startRow][i]=counter
            counter++
        }
        startRow++
    
        for(let i=startRow;i<=endRow;i++){
            result[i][endRow]=counter
            counter++
        }
    
        endRow-- 
    
        for(let i=endRow;i>=startCol;i--){
           result[endCol][i]=counter
           counter++
        }
    
        endCol--  //4
    
        for(let i=endCol;i>=startRow;i--){
            result[i][startCol]=counter
            counter++
        }
        startCol++    

        console.log(startRow,endRow,startCol,endCol)
    }
   
    return result
  }
  
  console.log(matrix(6));