// Generates a date starting from 30 days after current date 
export const randomDateGenerator = () => {
    const dateToday = new Date();
    const min = 30; // 30 days after today
    const max = 90; // up to 120 days after today

    const randomDays = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomDate = new Date(dateToday);
    randomDate.setDate(dateToday.getDate() + randomDays);

    const weekday = randomDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = randomDate.toLocaleDateString('en-US', { month: 'long' });
    const day = randomDate.getDate();
    const year = randomDate.getFullYear();

    // Format: "[day], [date] [year]"
    return `${weekday}, ${month} ${day} ${year}`;
    };

    