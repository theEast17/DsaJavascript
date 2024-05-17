function matrix(n) {
    const result = []
    for(let i=0; i<n; i++){
      result.push([])
    }
  
    let counter=1,startRow=0,endRow=n-1,startCol=0,endCol=n-1

    
    while(startRow<=endRow && startCol<=endCol){

        // top
        for(let i=startCol;i<=endCol;i++){
            result[startRow][i]=counter
            counter++
        }
        startRow++
    
        // right 
        for(let i=startRow;i<=endRow;i++){
            result[i][endCol]=counter
            counter++
        }
    
        endCol--   
    
    
        // bottom  
        for(let i=endCol;i>=startCol;i--){
           result[endRow][i]=counter
           counter++
        }
    
        endRow--  //4
    
        // end
        for(let i=endRow;i>=startRow;i--){
            result[i][startCol]=counter
            counter++
        }
        startCol++    

    }
   
    return result
  }
  
  console.log(matrix(5));