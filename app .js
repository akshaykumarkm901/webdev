let h1=document.querySelector('h1')
console.log(h1)
function changecolor(color,dely){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color=color;
            resolve('complerte');
        },dely)
    })
}
async function demo() {
    await changecolor('red',1000);
    await changecolor('green',1000);
    await changecolor('blue',1000);
    
};
demo()