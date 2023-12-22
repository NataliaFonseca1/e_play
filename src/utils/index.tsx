import { Game } from '../pages/Home'

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentPrice) => {
    if (currentPrice.prices.current) {
      return (accumulator += currentPrice.prices.current)
    }
    return 0
  }, 0)
}
