const sum = require('../sum');


// فقط للتنظيم وليس شرط اساسي

descirbe("check the Nubmbers",()=>{
   
    descirbe("check if there just one number or no",()=>{
        test("return nothing ",() =>{
            expect(sum()).toBe(0);
        })
        
        
        test("return value  ",() =>{
            expect(sum(5)).toBe(5);
        }) 
    })
    
   descirbe("check if there is more than one number ",()=>{
     
    test("return value + value  ",() =>{
        expect(sum( 4,5)).toBe(9);
    })
    
    
    test("return value + value + value ",() =>{
        expect(sum( 4,5,1)).toBe(10);
    })
   })
    
})
