exports.el = {
    cnpj: 'input[type=text][id*=cnpj]',
    textCnpj: 'div[for*=cnpj]',
    password: 'input[id*=password]',
    textPassword: 'div[for*=password]',
    signIn: ('button[type=submit]', 'Entrar'),
    imgPortal: ('img[src*=logo-portal]'),
    imgMarcas: ('img[src*=cd76243b][alt="Logos das Marcas"]'),
    ortLog: ('span', 'Primeiro acesso? O seu login é o mesmo do Compra Rápida/Compra Programada.'),
    eyes: ('.inputIcon'),
    forgetPassword: ('a[alt*="Esqueci minha senha"]', 'Esqueci a minha senha ou')
}