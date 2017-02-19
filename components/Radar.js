/* eslint-disable max-len */
const RADAR_EMBED = 'https://maps.darksky.net/@radar,37.780,-122.419,11?embed=true&timeControl=false&fieldControl=false&defaultField=radar'

export default ({ className }) => (
  <div className={`${className} w-100`}>
    <iframe
      width={'100%'}
      frameBorder={'0'}
      className={'h-100'}
      src={RADAR_EMBED}
    />
  </div>
)
