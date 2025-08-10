let title = document.getElementById("website_title");
title.innerHTML = "Neuer Titel der Website";


document.getElementById('test_div').innerHTML = "Neuer Inhalt des Test-Divs";

document.getElementById('button_div').innerHTML = `
  <button id="myButton">Klick mich!</button>
`;

document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('green_bg');


document.getElementById('test_input').setAttribute('type', 'text');
document.getElementById('test_input').setAttribute('value', 123)


document.getElementById('attribute_div').innerHTML = ` <p id="p_title" title="Dies ist ein Attribut">Dies ist ein Absatz mit einem Attribut.</p>`;
document.getElementById('p_title').classList.add('green_bg');