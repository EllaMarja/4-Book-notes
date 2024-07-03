function scrollToTop() {
    if (window.location.pathname === '/') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.location.href = '/';
    }
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}


document.getElementById("editButton").addEventListener("click", function() {
    document.getElementById("editForm").submit();
});




// Define the filterReview function
function filterReview() {
    const selectedValue = document.getElementById('filter').value;
    // Call refreshPageWithInfo function with selected value
    refreshPageWithInfo({ data: selectedValue });
}

// Add event listener to the dropdown select element
document.getElementById('filter').addEventListener('change', filterReview);






// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    stickyNav();
};

// Get the navbar
var navbar = document.getElementById("stickyHeader");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
