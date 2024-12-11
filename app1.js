let btn=document.querySelector('button')
let btn1=document.querySelector('.o')


btn.addEventListener('click',async()=>{
    let fact= await getfact()
    console.log(fact)
    let p=document.querySelector('.result')
    p.innerText=fact
    let link= await getimg()
    let img=document.querySelector('#imgs')
    img.setAttribute('src',link)
})
// btn.addEventListener('click',async()=>{
//     let link= await getimg()
//     let img=document.querySelector('#imgs')
//     img.attributes('src',link)
    
// })

// btn1.addEventListener('click',async()=>{
//     let search=document.querySelector('input').value;
//     console.log(search);
//     let p1=document.querySelector('#a');
//     p1.innerHTML=p1;
// });







let url2='https://dog.ceo/api/breeds/image/random';
url='https://catfact.ninja/fact';
//  async function getfact(){
//     try{
//         res= await fetch(url);
//         data= await res.json();
//         console.log(res);
//          console.log(data);
//          res2= await fetch(url);
//         data2= await res2.json();
//        console.log(res2);
//        console.log(data2);
  
//     }catch(e){
//         console.log('error',e);
//     }
//     console.log(url)

// }nothing
async function getfact() {
      try {
        res= await axios.get(url);
        return  res.data.fact;
      } catch (error) {
        return error
      }    
}
async function getimg() {
    try {
      res1= await axios.get(url2);
      return  res1.data.message;
    } catch (error) {
      return error
    }    
}