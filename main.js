document.getElementById('calculate').addEventListener('click',function(){
    const numFamily = parseFloat((document.getElementById('family')).value);

    const zakat = (numFamily * 150 ).toFixed(2);

    const amount = document.getElementById('amount');
    const result = document.getElementById('result')

    amount.innerHTML=`${zakat} DZ`;
    result.innerHTML=' zakat el-Fiter of your fumily is :'
})