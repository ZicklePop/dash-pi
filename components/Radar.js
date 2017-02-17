/* eslint-disable max-len */
const RADAR_EMBED = 'https://maps.darksky.net/@radar,37.780,-122.419,9?embed=true&timeControl=false&fieldControl=false&defaultField=radar'

export default ({ className }) => (
    <iframe
        width={'100%'}
        frameBorder={'0'}
        className={`${className} h-100`}
        src={RADAR_EMBED}
    />
)
