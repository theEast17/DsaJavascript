

class reverse{
    constructor(){
        this.stringArr=[]
    }
    arr(element){
        let a=element.split(' ').filter((word)=>{
    return word!==''
})
        this.stringArr=a
    }
    con(){
        let str=''
        for(let i=this.stringArr.length-1;i>=0;i--){
            str += this.stringArr[i] + ' '
        }
        return str
    }
}


let rev=new reverse()
console.log(rev.arr('the sky is blue'))


console.log(rev.con())


