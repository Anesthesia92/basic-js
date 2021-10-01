import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members ) {
  function createDreamTeam(members) {
    if (!members) {
      return false
    }
    let x = []
    for (let i = 0; i < members.length; i++) {
      let currentMem = members[i]
      if(typeof currentMem === 'string') {
        currentMem = currentMem.split(' ').join('')
        x.push(currentMem[0])
      }
    }
    return x.sort().map(i => i.toUpperCase()).join('')
  }
  const mem = ['Matt', 'Ann', 'Dmitry', 'Max']
  const mem2 = [null]
  console.log(createDreamTeam)
}

