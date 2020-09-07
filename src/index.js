function helloWorld() {
  return console.log('hello world');
}
function saudacao() {
  const data = new Date();
  if (data.getHours() <= 12) {
    return 'Bom dia';
  }
  if (data.getHours() <= 18) {
    return 'boa tarde';
  }
  return 'boa noite';
}
helloWorld();
saudacao();
