/**
 *
 * @type {({id: number, title: string}|{id: number, title: string}|{id: number, title: string}|{id: number, title: string}|{id: number, title: string})[]}
 * 一维数组转为多维数组
 */
let arr = [
    {
        id: 1,
        title: 'a1'
    },
    {
        id: 2,
        title: 'a2'
    },
    {
        id: 3,
        title: 'a3'
    },
    {
        id: 4,
        title: 'a4'
    },
    {
        id: 5,
        title: 'a5'
    },
    {
        id: 6,
        title: 'a6'
    },
]

function arrTrans(num,arr) {
    const iconsArr = []
    arr.forEach((item,index) => {
        const page = Math.floor(index / num)
        if (!iconsArr[page]) { // 判断是否存在
            iconsArr[page] = [];
        }
        iconsArr[page].push(item);
    })
    return iconsArr;
}

let twoArr = arrTrans(3, arr)

for (const arrKey in twoArr) {
    for (const arrKey1 in twoArr[arrKey]) {
        // console.log(twoArr[arrKey][arrKey1]);
    }
}