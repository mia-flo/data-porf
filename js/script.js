// hamburger menu for tablet/mobile
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () =>
{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// scroll back to top

window.onscroll = function () { scrollFunction() };

function scrollFunction()
{
    let topbutton = document.getElementsByClassName("to-top");
    if (document.body.scrollTop > 20 || documentElement.scrollTop > 20)
    {
        topbutton.classList.add("show");
        console.log("show")
    } else
    {
        topbutton.classList.remove("show");
        console.log("don't show")
    }
}

function scrollToTop()
{
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, Internet Explorer
}



// filtering projects based on tags

filterElements("all");

function filterElements(selected)
{
    var tags, i;
    tags = document.getElementsByClassName("project-card-filt")
    if (selected == "all") selected = "";

    for (i = 0; i < tags.length; i++)
    {
        removeFilter(tags[i], "show");
        if (tags[i].className.indexOf(selected) > -1) addFilter(tags[i], "show")
    }
}

// adding a filter
function addFilter(element, name)
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
    {
        if (arr1.indexOf(arr2[i]) == -1)
        {
            element.className += " " + arr2[i];
        }
    }
}


function removeFilter(element, name)
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++)
    {
        while (arr1.indexOf(arr2[i]) > -1)
        {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element; element.className = arr1.join(" ");
}













