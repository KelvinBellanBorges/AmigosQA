//verificação dos componentes
//verificação das imagens/gifs
//ortografia

import footer from '../support/components/footer'
import header from '../support/components/header'
import loginPage from '../support/pages/login'
import dash from '../support/pages/dash'

describe('Dashboard', () => {
    const user = {
        nome: 'MEIRELES MODAS LTDA ME',
        cnpj: '03.504.501/0001-01',
        password: 'Beirario2022@'
    }
    beforeEach(() => {
        loginPage.go()
        loginPage.form(user)
        loginPage.submit()
    })
    context('checar header', () => {
        it('verificar se os headers estão corretos e clicar neles', () => {
            header.carrinho()
            header.favovito()
            header.trocarSenha()
            header.lojaVirtual()
            header.servicos()
            header.localFaturamento(user)
            header.exit()
        })
    })
    context('checar footer', () => {
        it('footer', () => {
            footer.lojaVirtual()
            footer.Serviços()
            footer.midias()
        })
    })
    context('verificação do Marketing', () => {
        it('checando as imagens marketing', () => {
            dash.imagemCarrossel() // primeira imagem do carrossel
            dash.imagem1() // CAMPANHA BEIRA RIO
            dash.imagem2() // PODCAST
            dash.imagem3() // SICC
            dash.imagem4() // CR
            dash.imagem5() // CP
            dash.imagem6() // BR post fácil
            dash.imagem7() // Eu vendo moda
            dash.imagem8() // 2 via boletos
            dash.imagem9() // Acompanhe seu pedido
        })
    })
})