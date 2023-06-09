<!--
  function PegaBotao(BOTAO) {
    if (document.all) {
      if (event.button == 2) {
        alert('Dados incorretos');        
      }
    }
    if (document.layers) {
      if (BOTAO.which == 3) {
        alert('Dados incorretos');
      }
    }
    return false;
  }
  document.onmousedown = PegaBotao;
// -->