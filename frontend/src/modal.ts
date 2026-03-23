//IMPORTS
import { z } from 'zod'

//MODAIS
const modalTermos = document.querySelector(
  '.container-modal-termos',
) as HTMLElement
const modalPrivacidade = document.querySelector(
  '.container-modal-privacidade',
) as HTMLElement
const modalEsqueceuSenha = document.querySelector(
  '.container-modal-formulario-senha',
) as HTMLElement
const modalConfirmacaoEmail = document.querySelector(
  '.container-modal-confirmacao-link',
)
// ---------------- MODAL TERMO DE USO E POLITICA DE PRIVACIDADE ----------------

//SELECIONA OS LIKNS
const linksTermos = document.querySelectorAll('a[href="#termos"]')
const linksPrivacidade = document.querySelectorAll('a[href="#privacidade"]')

//SELECIONA OS BOTÕES DE FECHAR
const botoesFechar = document.querySelectorAll('.botao-fechar-janela')
const botoesPadraoLaranja = document.querySelectorAll('.botao-padrao-laranja')

//ABRIR MODAIS
function abrirModal(modal: HTMLElement) {
  modal.classList.add('ativo')
}
//FECHAR MODAIS
function FecharModal(modal: HTMLElement) {
  modal.classList.remove('ativo')
}

//LISTNERS ABERTURA
//TERMOS
linksTermos.forEach((link) => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault()
    abrirModal(modalTermos)
  })
})
//PRIVACIDADE
linksPrivacidade.forEach((link) => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault()
    abrirModal(modalPrivacidade)
  })
})

//LISTNERS FECHAMENTO
//BOTÃO FECHAR JANELA
botoesFechar.forEach((botao) => {
  botao.addEventListener('click', () => {
    FecharModal(modalTermos)
    FecharModal(modalPrivacidade)
    FecharModal(modalEsqueceuSenha)
    limparModalEsqueceuSenha()
  })
})

//BOTÃO LARANJA - ENTENDI
botoesPadraoLaranja.forEach((botao) => {
  botao.addEventListener('click', () => {
    FecharModal(modalTermos)
    FecharModal(modalPrivacidade)
  })
})

// ---------------- MODAL RECUPERAÇÃO DE SENHA ----------------

//SELECIONAR O LINK
const linkEsqueceuSenha = document.querySelector('a[href="#esqueceusenha"]')

const linkVoltarLogin = document.querySelector('a[href="#voltarlogin"]')

//FECHAR MODAIS
function FecharModalEsqueceuSenha(modal: HTMLElement) {
  modal.classList.remove('ativo')
  limparModalEsqueceuSenha()
}

//LISTNER ABERTURA
linkEsqueceuSenha?.addEventListener('click', (evento) => {
  evento.preventDefault()
  abrirModal(modalEsqueceuSenha)
})

//LISTNER FECHAR PELO LINK VOLTAR AO LOGIN
linkVoltarLogin?.addEventListener('click', (evento) => {
  evento.preventDefault()
  FecharModalEsqueceuSenha(modalEsqueceuSenha)
})

// ---------------- ALTERNAR FORMULÁRIO DE ENTRAR PARA CRIAR A CONTA ----------------

//MOSTRAR E OCULTAR PALAVRA "DE VOLTA."
const spanDeVolta = document.querySelector('.span-volta') as HTMLElement

function removeClassOcultaSpan() {
  spanDeVolta?.classList.remove('oculta')
}
function addClassOcultaSpan() {
  spanDeVolta?.classList.add('oculta')
}

//MOSTRAR E OCULAR A FRASE HEADER: ENTRAR
const pHeader = document.querySelector('#p-header') as HTMLElement

function fraseOpcaoEntrar() {
  pHeader.innerText = 'Entre na sua conta para continuar de onde parou'
}
function fraseOpcaoCadastrar() {
  pHeader.innerText = 'Crie sua conta e começe agora'
}

//MOSTRAR E OCULTAR LABEL: NOME
const labelNome = document.querySelector('#label-cadastro-nome') as HTMLElement

function removeClassOcultaLabelNome() {
  labelNome?.classList.remove('oculta')
}
function addClassOcultaLabelNome() {
  labelNome?.classList.add('oculta')
}

//MOSTRAR E OCULTTAR INPUT: NOME
const inputNome = document.querySelector('#input-cadastro-nome') as HTMLElement

function removeClassOcultaInputNome() {
  inputNome?.classList.remove('oculta')
}
function addClassOcultaInputNome() {
  inputNome?.classList.add('oculta')
}

//MOSTRAR E OCULTAR LABEL: CONFIRMAR SENHA
const labelConfirmarSenha = document.querySelector(
  '#label-confirmar-senha',
) as HTMLElement

function removeClassOcultaLabelConfirmarSenha() {
  labelConfirmarSenha?.classList.remove('oculta')
}
function addClassOcultaLabelConfirmarSenha() {
  labelConfirmarSenha?.classList.add('oculta')
}

//MOSTRAR E OCULTAR INPUT DO CONFIRMAR SENHA
const inputConfirmarSenha = document.querySelector(
  '#input-confirmar-senha',
) as HTMLElement

function removeClassOcultaInputConfirmarSenha() {
  inputConfirmarSenha?.classList.remove('oculta')
}
function addClassOcultaInputConfirmarSenha() {
  inputConfirmarSenha?.classList.add('oculta')
}

//MOSTRAR E OCULTAR DIV: ESQUECEU SENHA
const divEsqueceuSenha = document.querySelector(
  '.esqueceu-senha',
) as HTMLElement

function removeClassOcultaEsqueceuSenha() {
  divEsqueceuSenha?.classList.remove('oculta')
}
function addClassOcultaEsqueceuSenha() {
  divEsqueceuSenha?.classList.add('oculta')
  limparModalEsqueceuSenha()
}

//TROCAR TEXTO DO BOTÃO
const textoBotao = document.querySelector('.texto-button') as HTMLElement

function textoOpcaoEntrar() {
  textoBotao.innerText = 'Entrar'
}

function textoOpcaoCadastrar() {
  textoBotao.innerText = 'Cadastrar'
}

// ALTERNAR COR BOTÃO ENTRAR/CRIAR CONTA
//const divFormTabs = document.querySelector('.form-tabs') as HTMLElement
const buttonEntrar = document.querySelector('#button-etrar') as HTMLElement
const buttonCadastrar = document.querySelector(
  '#button-cadastrar',
) as HTMLElement

function botaoCadastrar() {
  buttonEntrar?.classList.remove('active')
  buttonCadastrar?.classList.add('active')
}

function botaoEntrar() {
  buttonEntrar?.classList.add('active')
  buttonCadastrar?.classList.remove('active')
}

function clicarEntrar(isMostraEntrar: boolean) {
  if (isMostraEntrar == true) {
    removeClassOcultaSpan()
    fraseOpcaoEntrar()
    addClassOcultaLabelNome()
    addClassOcultaInputNome()
    addClassOcultaLabelConfirmarSenha()
    addClassOcultaInputConfirmarSenha()
    removeClassOcultaEsqueceuSenha()
    textoOpcaoEntrar()
    botaoEntrar()
  } else {
    addClassOcultaSpan()
    fraseOpcaoCadastrar()
    removeClassOcultaLabelNome()
    removeClassOcultaInputNome()
    removeClassOcultaLabelConfirmarSenha()
    removeClassOcultaInputConfirmarSenha()
    addClassOcultaEsqueceuSenha()
    textoOpcaoCadastrar()
    botaoCadastrar()
  }
}

buttonCadastrar.addEventListener('click', () => clicarEntrar(false))
buttonEntrar.addEventListener('click', () => clicarEntrar(true))

// ---------------- FECHAR MODAL ESQUECEU SENHA E ABRIR MODAL CONFIRMAÇÃO DE ENVIO ----------------
const botaoEnviarLinkEsqueceuSenha = document.querySelector(
  '#botao-enviar-link-email',
)
const inputEmailModalEsqueceuSenha = document.getElementById(
  'inputEmailEsqueceuSenha',
) as HTMLInputElement
const spanTextoEmail = document.getElementById('emailDigitado') as HTMLElement

function fecharModalEsqueceuSenha() {
  modalEsqueceuSenha?.classList.remove('ativo')
}

function abrirModalConfirmacaoEmail() {
  modalConfirmacaoEmail?.classList.add('ativo')
}

//INFORMAR MENSAGEM DE ERRO
const criaParagrafoMensagemDeErro = document.getElementById(
  'mensagemAdicionada',
) as HTMLElement

//INFORMAR MENSAGEM DE ERRO
function mensagemInformarEmail() {
  criaParagrafoMensagemDeErro.innerText = 'Por favor digite um email válido!'
}

//LIMPAR INFORMAÇOES QUANDO CLICAR NO BOTÃO
function limparModalEsqueceuSenha() {
  inputEmailModalEsqueceuSenha.value = ''
  criaParagrafoMensagemDeErro.innerText = ''
}

//VALIDAÇÃO EMAIL COM ZOD
const validacaoEmailZod = z.string().email()
function emailValido(email: string): boolean {
  const resultado = validacaoEmailZod.safeParse(email)
  return resultado.success
}

//
function enviarLinkSenhaPorEmail() {
  if (emailValido(inputEmailModalEsqueceuSenha.value) == false) {
    mensagemInformarEmail()
  } else {
    fecharModalEsqueceuSenha()
    abrirModalConfirmacaoEmail()
    mostrarEmailNaMensagem()
    limparModalEsqueceuSenha()
  }
}
botaoEnviarLinkEsqueceuSenha?.addEventListener('click', enviarLinkSenhaPorEmail)

// ---------------- MODAL CONFIRMAÇÃO DE ENVIO DE SENHA ----------------

const botaoConfirmacaoSenhaX = document.querySelector('#fechar-confrimacao-x')
const botaoConfirmacaoSenhaEnviarLink = document.querySelector(
  '#fechar-confrimacao-header',
)

//FECHAR MODAL NO BOTÃO "FECHAR"
function FecharModalConfirmacaoEnvioSenha() {
  modalConfirmacaoEmail?.classList.remove('ativo')
}

botaoConfirmacaoSenhaX?.addEventListener(
  'click',
  FecharModalConfirmacaoEnvioSenha,
)
botaoConfirmacaoSenhaEnviarLink?.addEventListener(
  'click',
  FecharModalConfirmacaoEnvioSenha,
)

// ---------------- PEGAR VALOR DO INPUT MODAL ESQUECEU SENHA E MOSTRAR NO MODAL CONFIRMAÇÃO  ----------------

function mostrarEmailNaMensagem() {
  spanTextoEmail.innerText = inputEmailModalEsqueceuSenha.value
}
