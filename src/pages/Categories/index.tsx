import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'
const Categories = () => {
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAction}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesSports}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={gamesFight}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}
export default Categories
