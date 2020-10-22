const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
  //let menu = " CARDAPIO \n\n";

  //Object.keys(cardapio.menu).forEach((value) => {
    //let element = cardapio.menu[value];
    //menu += `${value} - ${element.descricao}        R$ ${element.preco} \n`;
  //});

  //banco.db[user].stage = 1;

  return [
    `Olá ${contato} sou uma assistente virtual e me chamo Brook, 
    esse é meu novo aplicativo, lhe ajudará a fazer compras com mais 
    facilidade, é só apertar no link: 'https://visa-app-com.umbler.net'`,
    //menu,
  ];
}

exports.execute = execute;
