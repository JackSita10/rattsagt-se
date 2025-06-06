
// ekonomi.js
document.getElementById('ekonomiForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const lon = parseFloat(document.getElementById('lon').value) || 0;
  const utdelning = parseFloat(document.getElementById('utdelning').value) || 0;
  const moms = parseFloat(document.getElementById('moms').value) || 0;
  const total = lon + utdelning + moms;
  document.getElementById('ekonomiResultat').innerHTML = "Totalt inrapporterat: " + total + " kr";
});
