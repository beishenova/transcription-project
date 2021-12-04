const API = 'http://localhost:8000/words';

let inputText = $('.inputText');
let outputText = $('.outputText');
outputText.prop('disabled', true);
let buttonSub = $('.button-sub');

async function render(word) {
  console.log(word);
  try {
    let result = await fetch(`${API}?q=${word}`);
    let data = await result.json();
    console.log(data);
    if (data.length === 0) {
      outputText.val('не найдено');
    } else {
      data.forEach((w) => {
        w.name === word
          ? outputText.val(w.transcript)
          : outputText.val('не найдено');
      });
    }
  } catch (error) {
    console.log(error);
  }
}

buttonSub.on('click', (e) => {
  if (inputText.val() == '') {
    alert('у вас пустой инпут');
  } else {
    render(inputText.val());
  }
});

//  { "ГКНБ": "гэ-кэ-эн-б+э" },
//  { "ЖКХ": "жэ-кэ-х+а" },
//  { "СССР": "эс-эс-эс+эр" },
//  { "НТВ": "эн-тэ-в+э" },
//  { "ФБР": "фэ-бэ-+эр" }
