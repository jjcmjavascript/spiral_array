function walkLeftToRight(arr){
    return {
        value : arr.splice(0, 1)[0],
        arr,
    }
}

function walkRightToLeft(arr){
    return {
        value : arr.splice(arr.length - 1)[0].reverse(),
        arr,
    }
}

function walkUpToDown(arr){
    let value  =  []; 
    arr.forEach((item) =>{
        value.push(item[item.length - 1]); 
        item.splice(item.length - 1);
    });
    
    return { arr, value: value }
}

function walkDownToUp(arr){
    let value  =  []; 
    arr.forEach((item) =>{
        value.push(item[0]); 
        item.splice(0, 1);
    });
    
    return { arr, value : value }
}

function solution(matrix) {
    let my_solution = []; 
    let methods = {
        1  : walkLeftToRight,
        2  : walkUpToDown,
        3  : walkRightToLeft,
        4  : walkDownToUp,
    }; 
    
    let i = 1; 
    
    while(matrix.length > 0){
        let method =  methods[i]; 
        
        if(i == 4 ) i = 1; 
        
        let result = method(matrix); 
        my_solution = [...my_solution , ...result.value];
        
        matrix = result.arr;
        i++;
        
    }
    
    return my_solution; 
}

console.log(solution([
    [1,2,3],  
    [8,9,4], 
    [7,6,5]]
));
