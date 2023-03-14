enum Mounthes {
    'Января' = 0,
    'Февраля' = 1,
    'Марта' = 2,
    'Апреля' = 3,
    'Мая' = 4,
    'Июня' = 5,
    'Июля' = 6,
    'Августа' = 7,
    'Сентября' = 8,
    'Октября' = 9,
    'Ноября' = 10,
    'Декабря' = 11,
}
  
export const getCurrentDate = (date: Date): string => `${date.getDate()} ${Mounthes[date.getMonth()]} ${date.getFullYear()}`
export const getCurrentTime = (date: Date): string => {
    const parseTime = (time: number) => {
      if (time < 10) {
        return `0${time}`
      }
      return time
    }
  
    return `${date.getHours()}:${parseTime(date.getMinutes())}:${parseTime(date.getSeconds())}`
}