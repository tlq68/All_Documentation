// ReactDOM.render(JSX, document.getElementById('root)) <-- This is how we can use JSX and React.

// We need to loop through the querySelector in order to actually use it.
(function () {
const para = document.querySelectorAll('p');

for (let i = 0; i < para.length; i++) {
  para[i].style.color = "black";
} 
})();

