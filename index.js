async function getData(){
    setTimeout(function() {
        console.log("i am inside set timeout block")
        
    },3000);
}
let output=getData();


//async code without await //promise resturn krega only
async function getData()
{
    let response =fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}
getData();

//async code with await //async-await
async function getData(){
    //get request -async
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    
    //para json-async
    let data =await response.json();
    console.log(data);

}
getData();
