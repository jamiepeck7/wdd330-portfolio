const links = [
    {
    label: "Week 1 --",
    url: "week1/week1.html"
    },
    {
    label: "Week 2 --",
    url: "week2/week2.html"
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