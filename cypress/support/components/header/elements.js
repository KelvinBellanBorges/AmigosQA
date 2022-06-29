const { default: lojaVirtual } = require("../../pages/lojaVirtual");

exports.el = {
    carrinho: 'a[alt*=Carrinho]',
    favoritos: 'a[alt*=Favoritos]',
    trocarSenha: 'a[alt*=senha]',
    lojaVirtual: 'a[alt*=Loja]',
    servicos: 'a[alt=Serviços]',
    meAjuda: 'a[alt=ajuda]',
    exit: 'a[alt=Sair]',
    veriCart: ( 'div[class*=title]', "Carrinho de compras"),
    veriMeAjuda: ( 'div[class*=title]', "Me ajuda"),
    veriFav: ( 'div[class*=title]', "Favorito"),
    veriTrocaSen: ( 'div[class*=title]', "senha"),
    veriExit: ( 'div', "CNPJ", "Senha"),
    descProg: '.geOzxs'
}