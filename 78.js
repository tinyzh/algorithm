function throttle(fn,delay){
    let last = 0
    let timer = null

    return function(){
        let context = this
        let args = arguments
        let now = +new Date()

        //判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
        if(now - last < delay){
            // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
            clearTimeout(timer)
            timer = setTimeout(function(){
                last = now
                fn.apply(context,args)
            },delay)
        }else{
            // 如果时间间隔超出了我们设定的时间间隔阈值，那就马上执行，给用户一次响应
            last = now
            fn.apply(context,args)
        }
    }
}
window.addEventListener('scroll', throttle(() => {
    console.log(123)
},200),false)
