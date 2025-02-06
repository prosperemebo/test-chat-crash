export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function updateSkillLevel(userData, games) {
  return games.reduce((accumulator, element) => {
    const skill = userData?.gameSkills.find((skill) => skill.gameId === element.id)
    if (skill) {
      element.gameSkill = skill.value
    }
    return [...accumulator, element]
  }, [])
}