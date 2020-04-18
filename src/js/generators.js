/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const typePerson = Math.floor(Math.random() * allowedTypes.lenght);
    const levelPerson = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[typePerson](levelPerson);
  }
}


export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const hero = characterGenerator(allowedTypes, maxLevel);
  const userTeam = [];

  for (let i = 0; i < characterCount; i += 1) {
    userTeam.push(hero.next().value);
  }
  return userTeam;
  // TODO: write logic here
}
