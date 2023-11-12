console.log('Better Sigaa');

// document.querySelector('.unidade').innerHTML =
//   "Extensão feita por <a  href='https://github.com/Raphael-Soares' target='_blank'>Raphael Soares</a> ";

document.querySelector('#perfil-docente').innerHTML += ` 

<div class="INJECTED_LINKS">
  <a href="https://ensino.ifc.edu.br/calendarios-academicos/">Calendário Acadêmico</a>
  <a href="https://ensino.araquari.ifc.edu.br/horario-academico/">Horário Acadêmico</a>
  <a href="https://pergamum.ifc.edu.br/">Pergamum</a>
  <a href="https://pergamum.ifc.edu.br/login?redirect=/meupergamum">Meu Pergamum</a>
  <a href="perfil.jsf">Atualizar Foto e Perfil</a>
  <a href="/sigaa/abrirCaixaPostal.jsf?sistema=2">Mensagens</a>
</div>


`;

const userInfo = document.querySelector('#info-usuario');

const fotoPerfil = document.querySelector('.foto');
const mudarSenha = document.querySelector('#mudar-senha');

document.querySelector('.pessoal-docente ul').append(document.querySelector('.dados-pessoais'));

document.querySelector('#painel-usuario').append(fotoPerfil);
