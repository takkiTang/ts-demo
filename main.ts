let div = document.createElement('div')
div.id = 'app'
div.innerHTML = '我是拖拽元素'

document.body.appendChild(div)

let position: [number, number] = [0,0]
let flag: boolean = false


document.onmousemove = e => {
    if (flag) {
        let delaX: number = e.clientX - position[0]
        let delaY: number = e.clientY - position[1]
        let top: number = parseInt(div.style.top) || 0
        let left: number = parseInt(div.style.left) || 0
        div.style.left = left + delaX + 'px'
        div.style.top = top + delaY + 'px'
        position = [e.clientX, e.clientY]
    }
}
// 鼠标按下
div.onmousedown = e => {
    // position = [e.clientX, e.clientY]
    flag = true
}
// 鼠标放开
div.onmouseup = e => {
    // position = [e.clientX, e.clientY]
    flag = false
}