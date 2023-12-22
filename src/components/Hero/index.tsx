import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCard = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <> Por {formatPrice(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addToCard}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
