import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'

const DARK_SKY_API = 'https://api.darksky.net/forecast/de20cc6dabf0a69b687606902ebb893a/37.7865,-122.4052'

export default async (req, res) => {
  const data = await fetch(DARK_SKY_API)
  const json = await data.json()
  const out = get(json, 'hourly.data[0]', {})
  res.status(200).json(out)
}
