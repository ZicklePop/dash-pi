import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'

const DARKSKY_TOKEN = get(process, 'env.DARKSKY_TOKEN', '')
const DARKSKY_API = `https://api.darksky.net/forecast/${DARKSKY_TOKEN}/37.7865,-122.4052`

export default async (req, res) => {
  const data = await fetch(DARKSKY_API)
  const json = await data.json()
  const out = get(json, 'hourly.data[0]', {})
  res.status(200).json(out)
}
