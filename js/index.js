quotes=[
    {
        quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "Bernard M. Baruch"
    },
    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author: "Robert Frost"
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author: "Mark Twain"
    },
    {
        quote:"“It is our choices, Harry, that show what we truly are, far more than our abilities.”",
        author: "Albus Dumbledore"
    },
    {
        quote:"“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”",
        author: "Roy T. Bennett"
    },
    {
        quote:"“Do what is right, not what is easy nor what is popular.”",
        author: "Roy T. Bennett"
    },
    {
        quote:"“Pain is inevitable. Suffering is optional.”",
        author: "haruki murakami"
    },
    {
        quote:"“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
        author: "Winston S. Churchill"
    }


];
var container=""
var oldX =-1;
function quoteFunction() {
   do {
    var x = Math.floor(Math.random() * quotes.length);
   } while (x===oldX);
    container=`
     <h4>${quotes[x].quote}</h4>
    <h3>--${quotes[x].author} </h3>
    `;
    document.getElementById("caption").innerHTML =container; 
     oldX =x;
     
}