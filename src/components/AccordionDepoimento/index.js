import React from 'react';
import { Accordion } from 'react-bootstrap';


function AccordionDepoimento() {
  return (
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Formas de Pagamento</Accordion.Header>
    <Accordion.Body>
    Cartões de crédito são a forma de pagamento mais aceita nas compras que anunciam na Pokémon Store. A maioria delas usa cartões de crédito para validar a compra. Em alguns casos, formas alternativas de pagamento como PayPal, entre outras, também são aceitas. Há algumas exceções à regra, em que também pode ser possível o pagamento com cartão de débito.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Trocas e Devoluções</Accordion.Header>
    <Accordion.Body>
    Se quiser trocar ou devolver seu pedido, não importa o motivo, estamos aqui para ajudar! O Código de Defesa do Consumidor define que trocas e devoluções podem ser realizadas em até 7 dias em caso de arrependimento. Após esse período, são gratuitas pelo prazo de 30 dias após a data do seu pedido. Você pode trocar seu produto por crédito no estabelecimento, um produto diferente ou receber reembolso pela mesma forma de pagamento.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Fale Conosco</Accordion.Header>
    <Accordion.Body>
    Entre em contato conosco pelo nosso e-mail: suporte@pokemonstore.com.br ou pelo nosso 0800.000.0000.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  );
}

export default AccordionDepoimento;