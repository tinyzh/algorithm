const minWindow = (s,t) => {
    let need = {}
    let window = {}
    for(let i = 0; i < t.length; i++){
        need[t[i]] = need[t[i]] ? need[t[i]] + 1 : 1
    }

    let left = right = 0
    let start = 0
    let len = Number.MAX_SAFE_INTEGER

    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            window[c] = window[c] ? window[c] + 1 : 1
            if(window[c] == need[c]){
                valid++
            }
        }

        // 判断左侧是否需要移动
        while(valid == Object.keys(need).length){
            if(right - left < len){
                start = left
                len = right - left
            }
            let d = s[left]
            left++
            if(need[d]){
                if(window[d] == need[d]){
                    valid--
                }
                window[d] -= 1
            }
        }
    }
    return len == Number.MAX_SAFE_INTEGER ? '' : s.substr(start,len)
}

const checkInclusion = (t,s) => {
    let need = {}
    let window = {}
    for(let i = 0; i < t.length; i++){
        need[t[i]] = need[t[i]] ? need[t[i]] + 1 : 1
    }

    let left = right = 0
    let valid = 0

    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            window[c] = window[c] ? window[c] + 1 : 1
            if(need[c] == window[c]){
                valid++
            }
        }

        while(right-left >= t.length){
            if(valid == Object.keys(need).length){
                return true
            }
            let d = s[left]
            left++
            if(need[d]){
                if(windoe[d] == need[d]){
                    valid--
                }
                window[d] -= 1
            }
        }
    }
    return false
}

var findAnagrams = function(s, p) {
    let need = {}
    let window = {}
    for(let i = 0; i < p.length; i++){
        need[p[i]] = need[p[i]] ? need[p[i]] + 1 : 1
    }

    let left = right = 0
    let valid = 0
    let res = []

    while(right < s.length){
        let c = s[right]
        right++
        if(need[c]){
            window[c] = window[c] ? window[c] + 1 : 1
            if(need[c] == window[c]){
                valid++
            }
        }

        while(right-left >= p.length){
            if(valid == Object.keys(need).length){
                res.push(left)
            }
            let d = s[left]
            left++
            if(need[d]){
                if(need[d] == window[d]){
                    valid--
                }
                window[d] -= 1
            }
        }
    }
    return res
};

const lengthOfLongestSubstring = (str) => {
    let window = {}
    let left = right = 0
    let res = 0
    while(right < str.length){
        let c = str[right]
        right++
        window[c] = window[c] ? window[c]+1 : 1
        while(window[c] > 1){
            let d = str[left]
            left--
            window[d] -= 1
        }
        res = Math.max(res, right - left)
    }
    return res
}