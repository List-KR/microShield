const HardcodedEntities = [
  {
    'domain': 'mydaily.co.kr',
    'css': ['.header_top > .header_right { 180px !important; }']
  }
]

export const LoadHardcoded = () => {
  return HardcodedEntities.find(Entity => location.hostname.includes(Entity.domain))
}