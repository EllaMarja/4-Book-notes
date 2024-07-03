document.addEventListener('DOMContentLoaded', function() {
    //console.log('DOMContentLoaded event fired');
    const toggle = document.querySelector('.toggle-input');
    //console.log('Toggle element:', toggle);

    // Function to toggle dark mode
    function toggleDarkMode(enabled) {
        //console.log('Entered toggle dark mode function.....')
        const darkStars = document.querySelectorAll('.darkStars');
        const lightStars = document.querySelectorAll('.lightStars');

        if (enabled) {
            //console.log('inside if statement');
            try {
                document.body.classList.add('dark-mode');
                
                const stickyHeader = document.getElementById("stickyHeader");
                if (stickyHeader) {
                    stickyHeader.classList.add('dark-mode');
                } else {
                    console.error('stickyHeader element not found!');
                }

                const logo = document.getElementById("logo");
                if (logo) {
                    logo.classList.add('dark-logo');
                } else {
                    console.error('logo element not found!');
                }

                const filter = document.getElementById("filter");
                if (filter) {
                    filter.classList.add('dark-button');
                } else {
                    console.error('filter element not found!');
                }

                const filterButton = document.getElementById("filter-button");
                if (filterButton) {
                    filterButton.classList.add('dark-button');
                    filterButton.classList.add('dark-mode-off');
                } else {
                    console.error('filter-button element not found!');
                }

                const scroll = document.getElementById("scroll");
                if (scroll) {
                    scroll.classList.add('dark-button');
                } else {
                    console.error('scroll element not found!');
                }

                const footer = document.getElementById("footer");
                if (footer) {
                    footer.classList.add('dark-mode');
                } else {
                    console.error('footer element not found!');
                }

                const inputs = document.getElementsByClassName("input");
                //console.log('Here are the inputs: ', inputs);
                if (inputs.length > 0) {
                    for (let input of inputs) {
                        input.classList.add('dark-input');
                    }
                } else {
                    console.error('No elements with class "input" found!');
                }

                // Set visibility for dark stars to visible, and light stars to hidden
                darkStars.forEach(star =>star.classList.remove('hidden'));
                lightStars.forEach(star => star.classList.add('hidden'));
            } catch (error) {
                console.log('Error occurred when adding dark modes:', error.message);
            }
        } else {
            //console.log('Entered else...');
try {
    document.body.classList.remove('dark-mode');
    
    const stickyHeader = document.getElementById("stickyHeader");
    if (stickyHeader) {
        stickyHeader.classList.remove('dark-mode');
    } else {
        console.error('stickyHeader element not found!');
    }

    const logo = document.getElementById("logo");
    if (logo) {
        logo.classList.remove('dark-logo');
    } else {
        console.error('logo element not found!');
    }

    const filter = document.getElementById("filter");
    if (filter) {
        filter.classList.remove('dark-button');
    } else {
        console.error('filter element not found!');
    }

    const filterButton = document.getElementById("filter-button");
    if (filterButton) {
        filterButton.classList.remove('dark-button');
        filterButton.classList.remove('dark-mode-off');
    } else {
        console.error('filter-button element not found!');
    }

    const scroll = document.getElementById("scroll");
    if (scroll) {
        scroll.classList.remove('dark-button');
    } else {
        console.error('scroll element not found!');
    }

    const footer = document.getElementById("footer");
    if (footer) {
        footer.classList.remove('dark-mode');
    } else {
        console.error('footer element not found!');
    }

    const inputs = document.getElementsByClassName("input");
    //console.log('Here are the inputs: ', inputs);
    if (inputs.length > 0) {
        for (let input of inputs) {
            input.classList.remove('dark-input');
        }
    } else {
        console.error('No elements with class "input" found!');
    }

    // Set visibility for light stars to visible, and dark stars to hidden
    darkStars.forEach(star => star.classList.add('hidden'));
    lightStars.forEach(star => star.classList.remove('hidden'));
} catch (error) {
    console.log('Error occurred when removing dark modes:', error.message);
}

        }
    }

    // Check if dark mode was previously enabled
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    toggle.checked = isDarkModeEnabled;
    toggleDarkMode(isDarkModeEnabled);

    //console.log('Binding event listener...');
    // Toggle dark mode when the switch is clicked
    toggle.addEventListener('change', function() {
       // console.log('Entered final event listener...')
        const isEnabled = toggle.checked;
        localStorage.setItem('darkModeEnabled', isEnabled);
        toggleDarkMode(isEnabled);
    });
});
