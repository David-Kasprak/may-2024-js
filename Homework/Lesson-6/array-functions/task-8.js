let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//--------------- Tried creating dynamic functions, but couldn't make ".map" work -------------

// const sortCoursesArrayDuration = (directionStr) => {
//     let sortedCourses = [];
//     if (directionStr === 'ascending') {
//         sortedCourses.push(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
//         console.log(sortedCourses);
//     }
//     if (directionStr === 'descending') {
//         sortedCourses.push(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//         console.log(sortedCourses);
//     }
// }
// const filterCoursesArrayDuration = (DurationNum) => {
//     let result = coursesAndDurationArray.filter(item => item.monthDuration > DurationNum);
//     console.log(result)
// }
//
// sortCoursesArrayDuration('descending')
// filterCoursesArrayDuration(5)

const sortedFilteredMappedArr = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
    value.id = index + 1;
    return value;
})

console.log(sortedFilteredMappedArr)