// Buttons and Contents Variables
    const aboutUsButton = document.getElementById('about-us-button');
    const aboutUsContent = document.getElementById('about-content');
    const StartButton = document.getElementById("start-button");
    const StartContent = document.getElementById("start-content");
    const ReservoirButton = document.getElementById("reservoir-button");
    const ReservoirContent = document.getElementById("reservoir-content");
    const StreamweaverButton = document.getElementById('streamweaver-button');
    const StreamweaverContent = document.getElementById('streamweaver-content');
    const YssLiveButton = document.getElementById('yss-live-button');
    const YssLiveContent = document.getElementById('yss-live-content');
    const PortalButton = document.getElementById("portal-button");
    const PortalContent = document.getElementById("portal-content");
    const MarketplaceButton = document.getElementById("marketplace-button");
    const MarketplaceContent = document.getElementById("marketplace-content");
    const ContributorButton = document.getElementById("contributor-button");
    const ContributorContent = document.getElementById("contributor-page");
    const FaqButton = document.getElementById("faq-button");
    const FaqContent = document.getElementById("faq");
    

   
document.getElementById("imgButton_1").addEventListener("click", function() {
    document.getElementById("video_1").style.display = "block";
});
document.getElementById("closeBtn_1").addEventListener("click", function() {
    var video = document.querySelector("#video_1 video");
    video.pause(); // Pause the video   
    document.getElementById("video_1").style.display = "none";
});

document.getElementById("imgButton_2").addEventListener("click", function() {
    document.getElementById("video_2").style.display = "block";
});
document.getElementById("closeBtn_2").addEventListener("click", function() {
    var video = document.querySelector("#video_2 video");
    video.pause(); // Pause the video 
    document.getElementById("video_2").style.display = "none";
});

document.getElementById("imgButton_3").addEventListener("click", function() {
    document.getElementById("video_3").style.display = "block";
});
document.getElementById("closeBtn_3").addEventListener("click", function() {
    var video = document.querySelector("#video_3 video");
    video.pause(); // Pause the video   
    document.getElementById("video_3").style.display = "none";
});

document.getElementById("imgButton_4").addEventListener("click", function() {
    document.getElementById("video_4").style.display = "block";
});
document.getElementById("closeBtn_4").addEventListener("click", function() {
    var video = document.querySelector("#video_4 video");
    video.pause(); // Pause the video   
    document.getElementById("video_4").style.display = "none";
});

document.getElementById("imgButton_5").addEventListener("click", function() {
    document.getElementById("video_5").style.display = "block";
});
document.getElementById("closeBtn_5").addEventListener("click", function() {
    var video = document.querySelector("#video_5 video");
    video.pause(); // Pause the video   
    document.getElementById("video_5").style.display = "none";
});

document.getElementById("imgButton_6").addEventListener("click", function() {
    document.getElementById("video_6").style.display = "block";
});
document.getElementById("closeBtn_6").addEventListener("click", function() {
    var video = document.querySelector("#video_6 video");
    video.pause(); // Pause the video   
    document.getElementById("video_6").style.display = "none";
});

document.getElementById("imgButton_7").addEventListener("click", function() {
    document.getElementById("video_7").style.display = "block";
});
document.getElementById("closeBtn_7").addEventListener("click", function() {
    var video = document.querySelector("#video_7 video");
    video.pause(); // Pause the video   
    document.getElementById("video_7").style.display = "none";
});

document.getElementById("imgButton_8").addEventListener("click", function() {
    document.getElementById("video_8").style.display = "block";
});
document.getElementById("closeBtn_8").addEventListener("click", function() {
    var video = document.querySelector("#video_8 video");
    video.pause(); // Pause the video   
    document.getElementById("video_8").style.display = "none";
});


// Button Functionalities for road map project selector
    aboutUsButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "block";
        document.getElementById('about-content').scrollIntoView({ behavior: 'smooth', block:'start'});
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });

    StartButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "block";
        document.getElementById('start-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });

    ReservoirButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "block";
        document.getElementById('reservoir-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });

    StreamweaverButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "block";
        document.getElementById('streamweaver-content').scrollIntoView({  behavior: 'smooth', block:'start' });
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });

    YssLiveButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "block";
        document.getElementById('yss-live-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    
    PortalButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "block";
        MarketplaceContent.style.display = "none";
        document.getElementById('portal-content').scrollIntoView({ behavior: 'smooth', block:'start'});
    });

    MarketplaceButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "none";
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "block";
        document.getElementById('marketplace-content').scrollIntoView({ behavior: 'smooth', block:'start'});
    });
    
    ContributorButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        ContributorContent.style.display = "block";
        document.getElementById('contributor-page').scrollIntoView({ behavior: 'smooth', block:'start' });
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });

    FaqButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        StreamweaverContent.style.display = "none";
        ReservoirContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "block";
        ContributorContent.style.display = "none";
        document.getElementById('faq').scrollIntoView({ behavior: 'smooth', block:'start' });
        PortalContent.style.display = "none";
        MarketplaceContent.style.display = "none";
    });
    


    // Functionalities for Road Map Node Selectors Per Project

    

    // For About Us
    const overlay = document.getElementById('about-content-1-overlay');
    function handleClickAbout(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
        });
        overlay.addEventListener('click', () => {
            content.style.display = 'none';
            overlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 6; i++) {
        handleClickAbout(`about-content-${i}`, `about-content-${i}-opened`);
    }


    // For YSS Live
    const yslcoverlay = document.getElementById('yslc-content-overlay');
    function handleClickYslc(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            yslcoverlay.style.display = yslcoverlay.style.display === 'none' ? 'block' : 'none';
        });
        yslcoverlay.addEventListener('click', () => {
            content.style.display = 'none';
            yslcoverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 5; i++) {
        handleClickYslc(`yslc-content-${i}`, `yslc-content-${i}-opened`);
    }

    // For Streamweaver 
    const streamweaveroverlay = document.getElementById('streamweaver-content-overlay');
    function handleClickStreamweaver(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            streamweaveroverlay.style.display = streamweaveroverlay.style.display === 'none' ? 'block' : 'none';
        });
        streamweaveroverlay.addEventListener('click', () => {
            content.style.display = 'none';
            streamweaveroverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 4; i++) {
        handleClickStreamweaver(`streamweaver-content-${i}`, `streamweaver-content-${i}-opened`);
    }

    // For Reservoir
    const reservoiroverlay = document.getElementById('reservoir-content-overlay');
    function handleClickReservoir(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            reservoiroverlay.style.display = reservoiroverlay.style.display === 'none' ? 'block' : 'none';
        });
        reservoiroverlay.addEventListener('click', () => {
            content.style.display = 'none';
            reservoiroverlay.style.display = 'none';
        });
    }
    // Change increment ie: i <= x for how many nodes exist in the road map (x)
    for (let i = 1; i <= 5; i++) {
        handleClickReservoir(`reservoir-content-${i}`, `reservoir-content-${i}-opened`);
    }

    // For The Portal
    const portaloverlay = document.getElementById('portal-content-overlay');
    function handleClickPortal(buttonId, contentId) {

        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            portaloverlay.style.display = portaloverlay.style.display === 'none' ? 'block' : 'none';
        });
        portaloverlay.addEventListener('click', () => {
            content.style.display = 'none';
            portaloverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 5; i++) {

        handleClickPortal(`portal-content-${i}`, `portal-content-${i}-opened`);
    }

  // For MarketPlace
    const mp = document.getElementById('mp-content-overlay');
    const marketplaceoverlay = document.getElementById('mp-content-overlay');
    
    function handleClickMarketplace(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            marketplaceoverlay.style.display = marketplaceoverlay.style.display === 'none' ? 'block' : 'none';
        });
        marketplaceoverlay.addEventListener('click', () => {
            content.style.display = 'none';
            marketplaceoverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 6; i++) {
        handleClickMarketplace(`mp-content-${i}`, `mp-content-${i}-opened`);
    }

    // For S.T.A.R.T
    const startoverlay = document.getElementById('start-content-overlay');
    function handleClickStart(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            startoverlay.style.display = startoverlay.style.display === 'none' ? 'block' : 'none';
        });
        startoverlay.addEventListener('click', () => {
            content.style.display = 'none';
            startoverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 6; i++) {
        handleClickStart(`start-content-${i}`, `start-content-${i}-opened`);
    }

    


const videooverlay = document.getElementById('video-overlay');
function handleClickVideo(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    button.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        videooverlay.style.display = videooverlay.style.display === 'none' ? 'block' : 'none';
    });
    videooverlay.addEventListener('click', () => {
        content.style.display = 'none';
        videooverlay.style.display = 'none';
    });
}
handleClickVideo('video-btn', `video-cnt`);


function scrollToTop() {
    document.getElementById('hero-page').scrollIntoView({ behavior: 'smooth', block:'start'});
}