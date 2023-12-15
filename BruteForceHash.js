function brute(alphabet, match, intstart, intstop){
    var a = alphabet, al = 0,                     
        m = match.toString(), ml = m.length,      
        i = intstart || 0, j = intstop || 0,    
        k = 0, l = 0, add = 0, sub = 0, diff = 0, 
        test = '', found = false;                 
    if(a.constructor !== undefined){           
        if( a.constructor.name !== 'String' &&  a.constructor.name !== 'Array' )   
                a = a.toString();               
    }
    al = a.length;    
    add = al;                             
    while(add <= i - sub) sub += add,     
                          add = add * al; 
    diff = add - sub; 
    while( i < j ){   
        test = '';       
        k = diff + i;
        while(k > 0){           
            l = k % al;         
            test = a[l] + test; 
            k = ( k - l ) / al; 
        }
        test = test.substring(1); 
        if(test.length === ml && test === m){ 
            found = true;
            break;
        }
        i++;                  
        if(i - sub === add)   
            sub += add,       
            add = add * al,   
            diff = add - sub; 
    }
    if(found === false) i = -1; 
    return [i, test, m];
}
