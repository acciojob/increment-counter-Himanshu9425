//your JS code here. If required.
function Increment() {
	let count = document.querySelector("#counter");
	let counter=parseInt(count.textContent);
    counter+=1;
    count.innerHTML=`
    <p>${counter}<p>
    `

}