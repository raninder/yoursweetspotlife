// Buttons and Contents Variables
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
    const FaqButton = document.getElementById("faq-button");
    const FaqContent = document.getElementById("faq");
    const SponsorButton = document.getElementById("sponsor-button");
    const SponsorContent = document.getElementById("sponsor-page");
    const FestivalContent = document.getElementById("festivals-content");
    const FestivalButton = document.getElementById("festivals-button");

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
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        SponsorContent.style.display = "none";
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    YssLiveButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "block";
        document.getElementById('yss-live-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        SponsorContent.style.display = "none";
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    MetaNarButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "block";
        document.getElementById('meta-narrative-content').scrollIntoView({  behavior: 'smooth', block:'start' });
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        SponsorContent.style.display = "none";
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    ComDevButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "block";
        document.getElementById('community-development-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        SponsorContent.style.display = "none";
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    StartButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "block";
        document.getElementById('start-content').scrollIntoView({ behavior: 'smooth', block:'start' });
        FaqContent.style.display = "none";
        SponsorContent.style.display = "none";
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });

    FaqButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "block";
        SponsorContent.style.display = "none";
        document.getElementById('faq').scrollIntoView({ behavior: 'smooth', block:'start' });
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
    SponsorButton.addEventListener('click', ()=> {
        aboutUsContent.style.display = "none";
        YssLiveContent.style.display = "none";
        MetaNarContent.style.display = "none";
        ComDevContent.style.display = "none";
        StartContent.style.display = "none";
        FaqContent.style.display = "none";
        SponsorContent.style.display = "block";
        document.getElementById('sponsor-page').scrollIntoView({ behavior: 'smooth', block:'start' });
        FestivalContent.style.display = "none";
        MarketplaceContent.style.display = "none";


    });
FestivalButton.addEventListener('click', ()=> {
    aboutUsContent.style.display = "none";
    YssLiveContent.style.display = "none";
    MetaNarContent.style.display = "none";
    ComDevContent.style.display = "none";
    StartContent.style.display = "none";
    FaqContent.style.display = "none";
    SponsorContent.style.display = "none";
    FestivalContent.style.display = "block";
    MarketplaceContent.style.display = "none";

    document.getElementById('festivals-content').scrollIntoView({ behavior: 'smooth', block:'start'});
});

MarketplaceButton.addEventListener('click', ()=> {
    aboutUsContent.style.display = "none";
    YssLiveContent.style.display = "none";
    MetaNarContent.style.display = "none";
    ComDevContent.style.display = "none";
    StartContent.style.display = "none";
    FaqContent.style.display = "none";
    SponsorContent.style.display = "none";
    FestivalContent.style.display = "none";
    MarketplaceContent.style.display = "block";
    document.getElementById('marketplace-content').scrollIntoView({ behavior: 'smooth', block:'start'});
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

    // For Meta Narrative
    const metacoverlay = document.getElementById('meta-content-overlay');
    function handleClickMeta(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            metacoverlay.style.display = metacoverlay.style.display === 'none' ? 'block' : 'none';
        });
        metacoverlay.addEventListener('click', () => {
            content.style.display = 'none';
            metacoverlay.style.display = 'none';
        });
    }
    for (let i = 1; i <= 4; i++) {
        handleClickMeta(`meta-content-${i}`, `meta-content-${i}-opened`);
    }

    // For Community Development
    const comdevoverlay = document.getElementById('comdev-content-overlay');
    function handleClickComDev(buttonId, contentId) {
        const button = document.getElementById(buttonId);
        const content = document.getElementById(contentId);
        button.addEventListener('click', () => {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            comdevoverlay.style.display = comdevoverlay.style.display === 'none' ? 'block' : 'none';
        });
        comdevoverlay.addEventListener('click', () => {
            content.style.display = 'none';
            comdevoverlay.style.display = 'none';
        });
    }
    // Change increment ie: i <= x for how many nodes exist in the road map (x)
    for (let i = 1; i <= 5; i++) {
        handleClickComDev(`comdev-content-${i}`, `comdev-content-${i}-opened`);
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

const festivaloverlay = document.getElementById('festivals-content-overlay');
function handleClickFestival(buttonId, contentId) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    button.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
        festivaloverlay.style.display = festivaloverlay.style.display === 'none' ? 'block' : 'none';
    });
    festivaloverlay.addEventListener('click', () => {
        content.style.display = 'none';
        festivaloverlay.style.display = 'none';
    });
}
for (let i = 1; i <= 5; i++) {
    handleClickFestival(`festivals-content-${i}`, `festivals-content-${i}-opened`);
}

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