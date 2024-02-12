
    const aboutUsButton = document.getElementById('about-us-button');
    const YssLiveButton = document.getElementById('yss-live-button');
    const aboutUsContent = document.getElementById('about-content');
    const YssLiveContent = document.getElementById('yss-live-content');
    const MetaNarButton = document.getElementById('meta-narrative-button');
    const ComDevButton = document.getElementById("community-development-button");
    const StartButton = document.getElementById("start-button");
    const MarketplaceButton = document.getElementById("marketplace-button");
    const MetaNarContent = document.getElementById('meta-narrative-content');
    const ComDevContent = document.getElementById("community-development-content");
    const StartContent = document.getElementById("start-content");
    const MarketplaceContent = document.getElementById("marketplace-content");
    aboutUsButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "block";
        document.getElementById('about-content').scrollIntoView({ behavior: 'smooth' });
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        MarketplaceContent.style.display = "none";

});

    YssLiveButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "block";
        document.getElementById('yss-live-content').scrollIntoView({ behavior: 'smooth' });
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        MarketplaceContent.style.display = "none";

});

    MetaNarButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "block";
        document.getElementById('meta-narrative-content').scrollIntoView({ behavior: 'smooth' });
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        MarketplaceContent.style.display = "none";

    });

    ComDevButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "block";
        document.getElementById('community-development-content').scrollIntoView({ behavior: 'smooth' });

        StartContent.style.display = "none";
        MarketplaceContent.style.display = "none";

    });

    StartButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "block";
        document.getElementById('start-content').scrollIntoView({ behavior: 'smooth' });

        MarketplaceContent.style.display = "none";

    });

    MarketplaceButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        MarketplaceContent.style.display = "block";
        document.getElementById('marketplace-content').scrollIntoView({ behavior: 'smooth' });


    });

    // Get the button, overlay, and the opened content div
    const button = document.getElementById('about-content-1');
    const content = document.getElementById('about-content-1-opened');
    const overlay = document.getElementById('about-content-1-overlay');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        content.style.display = 'none';
        overlay.style.display = 'none';
    });

    const buttoncontenttwo = document.getElementById('about-content-2');
    const aboutcontenttwo= document.getElementById('about-content-2-opened');

    buttoncontenttwo.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        aboutcontenttwo.style.display = aboutcontenttwo.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        aboutcontenttwo.style.display = 'none';
        overlay.style.display = 'none';
    });

    const buttoncontentthree = document.getElementById('about-content-3');
    const aboutcontentthree= document.getElementById('about-content-3-opened');

    buttoncontentthree.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        aboutcontentthree.style.display = aboutcontentthree.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        aboutcontentthree.style.display = 'none';
        overlay.style.display = 'none';
    });

    const buttoncontentfour = document.getElementById('about-content-4');
    const aboutcontentfour= document.getElementById('about-content-4-opened');

    buttoncontentfour.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        aboutcontentfour.style.display = aboutcontentfour.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        aboutcontentfour.style.display = 'none';
        overlay.style.display = 'none';
    });


    const buttoncontentfive = document.getElementById('about-content-5');
    const aboutcontentfive= document.getElementById('about-content-5-opened');

    buttoncontentfive.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        aboutcontentfive.style.display = aboutcontentfive.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        aboutcontentfive.style.display = 'none';
        overlay.style.display = 'none';
    });

    const buttoncontentsix = document.getElementById('about-content-6');
    const aboutcontentsix= document.getElementById('about-content-6-opened');

    buttoncontentsix.addEventListener('click', () => {
        // Toggle the display of the content and overlay
        aboutcontentsix.style.display = aboutcontentsix.style.display === 'none' ? 'block' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Add click event listener to the overlay
    overlay.addEventListener('click', () => {
        // Hide the content and overlay
        aboutcontentsix.style.display = 'none';
        overlay.style.display = 'none';
    });