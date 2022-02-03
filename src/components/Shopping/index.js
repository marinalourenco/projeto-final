import { Card, Container, Content, Grid, Loading } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useModal } from '../../hooks/useModal';

export default function Shooping() { 
  const [ pokeCard, setPokeCard ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1);
  const { handleOpenDetailModal } = useModal()

  useEffect(() => {
    api.get(`/products?_page=${currentPage}&_limit=12`)
    .then((newPokes) => setPokeCard((prevPoke) => [...prevPoke, ...newPokes.data]))
    .catch(err => console.log(err));
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    });

    intersectionObserver.observe(document.querySelector('#sentinel'));

    return () => intersectionObserver.disconnect()
  }, []);


    
  return (
    <>
    {pokeCard.length>0?(      
      <Container>
        <Content>                  
          <Grid>
          { pokeCard.map(pokecard => (
            <Card key={pokecard.id} onClick={() => handleOpenDetailModal(pokecard)}>
              <div className="img">
                <img src={`images/${pokecard.id}.gif`} alt={pokecard.name} />
              </div>
                
              <h2>{`${pokecard.name} ${pokecard.cardNumber}`}</h2>
              <div className="descriptions">
                <p>Tipo: {`${pokecard.type.tp1} ${pokecard.type.tp2}`}</p>
              </div>
              <div className="values">
                <p className="cifr">R$</p>
                <p className="value">{pokecard.price}</p>
                <p className="valuesec">,00</p>
              </div>
              <button className="car" type="submit" onClick={() => {}}>VER DETALHES</button> 
            </Card>
            ))}
          </Grid>
        </Content>
        <p id="sentinel"/>
      </Container>
      ):(
        <Container>
            <Content>
                  <Loading>
                    <img src="http://a.top4top.net/p_1990j031.gif" alt="loading..." />
                    <h2>Carregando...</h2>
                  </Loading>
            </Content>
          </Container>
      )}
    </>
  )
}
