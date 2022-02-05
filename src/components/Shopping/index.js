import { Card, Container, Content, Grid, Loading } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useModal } from '../../hooks/useModal';
import { useSearch } from '../../hooks/useSearch';

export default function Shooping() { 
  const [ pokeCard, setPokeCard ] = useState([])
  const [ pokeCardFiltered, setPokeCardFiltered ] = useState([])
  const [loading, setLoading] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1);
  const { handleOpenDetailModal } = useModal()
  const { queryParams, typePokemon } = useSearch()
  
  let cardPoke = pokeCard;

  if(queryParams && typePokemon){
    cardPoke = pokeCardFiltered.filter(poke => typePokemon === poke.type.tp1 || typePokemon === poke.type.tp2)
  }

  if(!queryParams && typePokemon){
    cardPoke = pokeCard.filter(poke => typePokemon === poke.type.tp1 || typePokemon === poke.type.tp2)
  }

  if(queryParams && !typePokemon){
    cardPoke = pokeCardFiltered
  }

  useEffect(() => {
    setLoading(true)
      api.get("/products")
      .then((newPokes) => {
        console.log(newPokes)
        setPokeCardFiltered(newPokes.data.filter(poke => poke.name.toUpperCase().includes(queryParams.toUpperCase())))
      })
      .catch(err => console.log(err));
    setLoading(false)
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true)
    if(queryParams){
      api.get("/products")
      .then((newPokes) => {
        console.log(newPokes)
        setPokeCardFiltered(newPokes.data.filter(poke => poke.name.toUpperCase().includes(queryParams.toUpperCase())))
      })
      .catch(err => console.log(err));
    }
    setLoading(false)
  }, [queryParams]);

  useEffect(() => {
    setLoading(true)
    api.get(`/products?_page=${currentPage}&_limit=12`)
    .then(
      (newPokes) => setPokeCard((prevPoke) => [...prevPoke, ...newPokes.data]))
    .catch(err => console.log(err));
    setLoading(false)
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
    {!loading?(      
      <Container>
        <Content>                  
          <Grid>
          {cardPoke.map(pokecard => (
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
                    <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading"/>
                    <h2>Carregando...</h2>
                  </Loading>
            </Content>
            <p id="sentinel"/>
          </Container>
      )}
    </>
  )
}
