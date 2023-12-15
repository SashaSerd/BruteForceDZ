function bruteForcePatternSearch(T, S) {
    var M = T.length,
        N = S.length;
    for (var i = 0; i <= N - M; i++) {
        var j=0;
        while (j < M) {
            if (S.charAt(i+j) !=T.charAt(j)){
                break;
                }
        j++;
            }
        if (j == M) {return i;}          
    }
    return false;                            
}
console.log(bruteForcePatternSearch("abbc","abracabcabcbdabbcb"));