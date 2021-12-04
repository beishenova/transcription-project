let inputText = $('.inputText');
let outputText = $('.outputText');
outputText.prop('disabled', true);
let buttonSub = $('.button-sub');


const array = [
  { name: 'США', transcript: 'сэ-шэ-+а' },
  { name: 'СШ', transcript: 'сэ-ш+э' },
  { name: 'ГКНБ', transcript: 'гэ-кэ-эн-б+э' },
  { name: 'ЖКХ', transcript: 'жэ-кэ-х+а' },
  { name: 'СССР', transcript: 'эс-эс-эс+эр' },
  { name: 'НТВ', transcript: 'эн-тэ-в+э' },
  { name: 'ФБР', transcript: 'фэ-бэ-+эр' },
];

function render(word) { 
  array.every(v => { 
    if(word.toLowerCase() == v.name.toLocaleLowerCase()){ 
      outputText.val(v.transcript) 
      return false 
    }else{ 
      outputText.val("транскрипция не найдена") 
      return true; 
    } 
  }) 
}

buttonSub.on('click', (e) => {
  if (inputText.val() == '') {
    alert('заполните поле!');
  } else {
    render(inputText.val());
  }
});