export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export function getUnixTimestampInMilliseconds(): number {
  return Math.round(+new Date())
}
