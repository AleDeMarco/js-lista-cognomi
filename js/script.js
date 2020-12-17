var db = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var name = prompt('Inserisci il tuo cognome:');
name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
var pos = 0;

db.push(name);
db.sort();
for (var i = 0; i < db.length; i++) {
  document.getElementById('list').innerHTML += db[i] + '<br>';
  if (db[i] == name) {pos = ++i;}
}
document.getElementById('position').innerHTML = pos;
