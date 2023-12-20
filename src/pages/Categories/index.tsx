import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'
const Categories = () => {
  const { data: gamesAction } = useGetActionGamesQuery()
  const { data: gamesSports } = useGetSportGamesQuery()
  const { data: gamesSimulation } = useGetSimulationGamesQuery()
  const { data: gamesFight } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()

  if (gamesAction && gamesSports && gamesSimulation && gamesFight && gamesRPG)
    return (
      <>
        <ProductsList
          games={gamesAction}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesSports}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesSimulation}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={gamesFight}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={gamesRPG} title="RPG" background="gray" id="rpg" />
      </>
    )
  return <h4>carregando..</h4>
}
export default Categories
