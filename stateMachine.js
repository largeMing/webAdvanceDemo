let str = '123456abcdef'
let res = ''

for (const strKey in str) {
    res += str[strKey]
    if (str[strKey] === 'a') {
        break
    }
}

console.log(res);
