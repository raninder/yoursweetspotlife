
    const aboutUsButton = document.getElementById('about-us-button');
    const OceanFallsButton = document.getElementById('ocean-falls-button');
    const aboutUsContent = document.getElementById('about-content');
    const OceanFallsContent = document.getElementById('ocean-falls-content');

    aboutUsButton.addEventListener('click', ()=> {
        console.log("Hello About");
        aboutUsContent.style.display = "block";
        OceanFallsContent.style.display = "none";

});

    OceanFallsButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        OceanFallsContent.style.display = "block";

});

