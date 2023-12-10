const form=document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("button clicked");
    const un=document.getElementById("un");
    const pw=document.getElementById("pw");

    const obj={
        username:un,
        password:pw
    }


})