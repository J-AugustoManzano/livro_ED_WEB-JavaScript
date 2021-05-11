<!--
  function Acesso(FORM) { 
    /* Checa Senha */
    FORM.Nome.value = FORM.Nome.value.toLowerCase();
    FORM.Senha.value = FORM.Senha.value.toLowerCase();
    if (FORM.Nome.value == 'nome' && FORM.Senha.value == 'senha') { 
      location='acesso.htm'; } 
    else { 
      FORM.Nome.value = '';
      FORM.Senha.value = '';
      alert('Dados incorretos'); 
    } 
  } 
//-->