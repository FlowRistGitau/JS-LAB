const outputLines= document.getElementById('output-lines');
const placeHolder= document.getElementById('output-placeholder');
const originalLog= console.log;

function printLine(result){
    const outputText=document.createElement('p');
    outputText.textContent=result;
    outputText.classList.add('output-line');
    outputLines.appendChild(outputText);
    placeHolder.classList.add('hidden');
}

function logToPage(...args){
    const text = args.map(String).join(" ");
    printLine(text);
    originalLog(...args);

}
console.log=logToPage;