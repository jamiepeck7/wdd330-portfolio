const links = [
    {
    label: "Week 1 --",
    url: "week1/week1.html"
    },
    {
    label: "Week 2 --",
    url: "week2/week2.html"
    },
    {
    label: "Week 3 --",
    url: "week3/week3.html"
    },
    {
    label: "Week 4 --",
    url: "week4/week4.html"
    },
    {
    label: "Week 5 --",
    url: "week5/week5.html"
    },
    {
    label: "Week 6 --",
    url: "week6/week6.html"
    },
    {
    label: "Week 7 --",
    url: "week7/week7.html"
    },
    {
    label: "Week 8 --",
    url: "week8/week8.html"
    },
    {
    label: "Week 9 --",
    url: "week9/week9.html"
    },
    {
    label: "Week 10 --",
    url: "week10/week10.html"
    },
    {
    label: "Week 11 --",
    url: "week11/week11.html"
    },
    {
    label: "Final Project",
    url: "week14final/week14.html"
    }
]

for (let i=0; i < links.length; i ++) {
    let link = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');

    h2.textContent = links[i].label;
    h3.innerHTML = "<a href = " + links[i].url + ">Notes</a>";

    link.appendChild(h2);
    link.appendChild(h3);

    document.querySelector('div.link').appendChild(link);
}