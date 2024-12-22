const ans = new Set(); 
    for (let i of s2) { 
        if (s1.has(i)) { 
            ans.add(i); 
        } 
    } 
    return ans; 
