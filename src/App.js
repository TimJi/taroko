import React from 'react';
import './App.scss';

function App() {
  const arr = ['請至文天祥公園接受任務', '快去文天祥公園接受任務', '再不去接受任務就來不及了', '你還在看？']
  let count = 0;
  setInterval( function() {
    count += 1;
    const typewriteAni = document.getElementById('typewrite-animated');
    const typewriteText = document.getElementById('typewrite-text');
    if (typewriteAni.classList.contains('typewriter')) {
      typewriteAni.classList.remove('typewriter');
    } else {
      typewriteAni.classList.add('typewriter');
      typewriteAni.addEventListener('animationend', function() {
        setTimeout(function() {
          typewriteText.textContent = '';
          typewriteAni.classList.remove('typewriter');
        }, 800)
      })
    }
    typewriteText.textContent = arr[count%3];
  }, 2500);
  return (
      <div className="d-inline-block app">
        <div id="typewrite-animated">
          <span id="typewrite-text" className="d-inline-block"/>
        </div>
      </div>
  );
}

export default App;
