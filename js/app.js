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
var aTag = document.createElement('a');
aTag.setAttribute('href', 'mailto:salmoncookiesrus@email.com');
aTag.setAttribute('id', 'footer-email');
aTag.textContent = 'salmoncookiesrus@email.com';
span2.appendChild(aTag);
var span3 = document.createElement('span');
span3.textContent = '12345 Fishy Rd Salmonville, Washington 80808';

footer.appendChild(span1);
footer.appendChild(span2);
footer.appendChild(span3);
