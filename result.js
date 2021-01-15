import os from 'os'

export const getResult = (data) => {
  let result = '';
  data.forEach(item => {
      const line = item.join(" ")
      result += line + '\n'
  })
  return result.trim();
};
