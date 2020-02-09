import fetch from 'isomorphic-unfetch'
import filter from 'lodash/filter'
import get from 'lodash/get'
import shuffle from 'lodash/shuffle'

const MY_HOT_PICS = 'https://myhot.pics/api/gifs'

export default async (req, res) => {
  const data = await fetch(MY_HOT_PICS)
  const json = await data.json()
  const images = filter(get(json, 'images', []), el => (
    get(el, 'title', 'NSFW').indexOf('NSFW') < 0
  ))
  const out = get(shuffle(images), '[0]', {})
  res.status(200).json(out)
}
