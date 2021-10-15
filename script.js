const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.intrimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {

  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  texts.appendChild(p);

if(e.results[0].isFinal){
  if(text.includes('hello')){
    p = document.createElement('p');
    p.classList.add('reply');
    p.innerText = 'Hi';
    texts.appendChild(p);
  }
  if(text.includes('your name') || text.includes("What's your name") || text.includes("What is your name")){
    p = document.createElement('p');
    p.classList.add('reply');
    p.innerText = 'My Name is Ajeeb';
    texts.appendChild(p);
  }
  if(text.includes('open YouTube')){
    p = document.createElement('p');
    p.classList.add('reply');
    p.innerText = 'Openning YouTube';
    texts.appendChild(p);
    window.open('https://www.youtube.com/keenkanish/')
  }
  p = document.createElement('p');
}

  console.log(text);

})

recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();