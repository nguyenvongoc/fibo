function fibo(n)
{
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
  let i;
 
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
function play()
{
   let i=0;
   let number =+ document.getElementById('number').value;
   document.write(number+" số Fibonacci đầu là : "+"<br>")
   if(number==1){
   document.write("1");
   }
   else if(number==2){
   document.write("1 1");
   }
   else
   {
    for(i=1;i<=number;i++)
    {
        document.write(fibo(i)+" ");
    }
   }
}