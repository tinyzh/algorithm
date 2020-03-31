const longestPalindrome = (str) => {
    let res = ''
    for(let i = 0; i < str.length; i++){
        // 以 s[i] 为中心的最长回文子串
        let s1 = palindrome(s, i, i);
        // 以 s[i] 和 s[i+1] 为中心的最长回文子串
        let s2 = palindrome(s, i, i + 1);
        // res = longest(res, s1, s2)
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
}

const palindrome = (str,left,right) => {
    while(left >= 0 && right <= str.length - 1 && str[left] == str[right]){
        left--
        right++
    }

    return str.substr(left+1,right-left-1)
}