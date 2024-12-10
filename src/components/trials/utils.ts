export const isDateInPast = (date: string) => {
    if(!date) return false
    const todaysDate = new Date()
    const targetDate = new Date(date)
    if (targetDate.setHours(0, 0, 0, 0) < todaysDate.setHours(0, 0, 0, 0)) {
        return true;
      }
    
      return false;
}