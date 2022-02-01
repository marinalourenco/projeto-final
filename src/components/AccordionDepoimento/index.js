import React from 'react';
import { Accordion } from 'react-bootstrap';


function AccordionDepoimento() {
  return (
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Nossas vendas são confiaveis</Accordion.Header>
    <Accordion.Body>
      Ficava receoso em realizar qualquer compra online, mas entrei em contato com a equipe da Pokemon Store, e foram muito solícitos e prestativos em sanar com todas as minhas dúvidas. É a melhor loja para fazer as suas compras e aumentar suas coleções. Desejo muito sucesso nas vendas e vou continuar comprando meus pokémons com vocês. Muito obrigado!
     </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Formas de Pagamento</Accordion.Header>
    <Accordion.Body>
      Super recomendo! É a melhor loja online de pokémons, preços justos e promoções imperdíveis!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Tempo de Entrega</Accordion.Header>
    <Accordion.Body>
      Super recomendo! É a melhor loja online de pokémons, preços justos e promoções imperdíveis!
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  );
}

export default AccordionDepoimento;