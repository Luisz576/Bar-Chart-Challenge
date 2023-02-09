function initChartListeners(){
    const bars = document.querySelectorAll('li.chart-bar')
    function listener(index){
        for(let i = 0; i < bars.length; i++){
            if(i == index){
                bars.item(i).classList.add('selected')
                continue
            }
            bars.item(i).classList.remove('selected')
        }
    }
    for(let i = 0; i < bars.length; i++){
        bars.item(i).addEventListener('click', () => {
            listener(i)
        })
    }
}

function calculateBars(days = []){
    const bars = document.querySelectorAll('li.chart-bar span')
    const bigger = Math.max(...days)
    for(let i = 0; days.length; i++){
        if(i == bars.length){
            break;
        }
        const d = days[i] / bigger
        const h = d * 100;
        bars.item(i).style.height = h + "px"
    }
}

setTimeout(() => {
    const data = {
        "money": 921.48,
        "days": [153, 120.25, 202, 134, 115.5, 234, 218],
        "month_total": 478.33,
        "income": "2.4"
    }
    const money = document.getElementById('money')
    const month_total = document.getElementById('month_total')
    const income = document.getElementById('income')
    if(money && month_total && income){
        money.innerText = data['money']
        month_total.innerText = data['month_total']
        income.innerText = data['income']
        calculateBars(data['days'])
        return
    }
    throw "Fatal error: elements not founded!"
}, 2000)

initChartListeners()