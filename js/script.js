let inputs = document.querySelectorAll('.input');
console.log(typeof inputs)
inputs.forEach(element => {
    element.addEventListener('focus',function(){
      this.previousElementSibling.style.bottom = '30px';
    })
    element.addEventListener('blur',function(){
        if(this.value==""){
            this.previousElementSibling.style.bottom = '9px';
        }else{
            this.previousElementSibling.style.bottom = '30px';
        }
 
    })
});