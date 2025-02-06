export const formatBirthday = (date: string) => {
  const birthdayDate = new Date(date)
  return birthdayDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
}

export const convertToDate = (dateStr: string) => {
  const [month, day, year] = dateStr.split('/')
  return new Date(`${year}-${month}-${day}T00:00:00`)
}