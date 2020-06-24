var root = document.getElementById('root');
var footer = document.createElement('footer');
footer.setAttribute('id', 'contact-info');
root.appendChild(footer);

var h5 = document.createElement('h5');
h5.textContent = 'Contact Us';
footer.appendChild(h5);

var span1 = document.createElement('span');
span1.textContent = '199-555-1259';
var span2 = document.createElement('span');
span2.textContent = 'salmoncookiesrus@email.com';
var span3 = document.createElement('span');
span3.textContent = '12345 Fishy Rd Salmonville, Washington 80808';

footer.appendChild(span1);
footer.appendChild(span2);
footer.appendChild(span3);
