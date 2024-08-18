let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sortCoursesArrayDuration = (directionStr) => {
    let sortedCourses = [];
    if (directionStr === 'ascending') {
        sortedCourses.push(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
        console.log(sortedCourses);
    }
    if (directionStr === 'descending') {
        sortedCourses.push(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
        console.log(sortedCourses);
    }
}
const filterCoursesArrayDuration = (DurationNum) => {
    let result = coursesAndDurationArray.filter(item => item.monthDuration > DurationNum);
    console.log(result)
}
// --------MAP -----------

sortCoursesArrayDuration('descending')
filterCoursesArrayDuration(5)
