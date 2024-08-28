let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const item of coursesAndDurationArray) {
    const heading = document.createElement('h3');
    const paragraph =  document.createElement('p');
    heading.innerText  = item.title;
    paragraph.innerText = item.monthDuration;
    const div = document.createElement("div");
    div.append(heading, paragraph);
    document.body.append(div)
}

