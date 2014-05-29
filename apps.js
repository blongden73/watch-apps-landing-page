$("article").html('<div class="guapp__proposition">        <div class="gs-container">            <img class="guapp__proposition__image guapp__proposition__image--mobile" src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/proposition__image.png" alt=""/>            <div class="guapp__proposition__container">                <h1 class="guapp__proposition__title">The new free Guardian app for iOS and Android</h1>                <p class="guapp__proposition__intro">Get the whole picture the whole time, with up-to-minute coverage, personalised alerts, offline reading and full access to the Guardian’s award-winning journalism.<br /> For mobile, for tablet, for free.</p>                <div class="guapp__appstores">                    <a class="guapp__appstore__link"  href="https://itunes.apple.com/gb/app/the-guardian/id409128287?mt=8&uo=4"><img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/btn--appstore--outline.png" alt="Android app on Google Play"/></a>                    <a class="guapp__appstore__link"  href="https://play.google.com/store/apps/details?id=com.guardian"><img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/btn--playstore--outline.png" alt="Android app on Google Play" /></a>                </div>            </div>            <img class="guapp__proposition__image guapp__proposition__image--desktop" src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/proposition__image.png" alt=""/>        </div>    </div>    <div class="guapp__video">        <div class="gs-container">            <div class="guapp__video__wrapper">                <iframe class="guapp__video__player" autohide="1" width="1280" height="720" src="//www.youtube.com/embed/4XcMq6LiR3c?rel=0&autohide=1&fs=0&modestbranding=1&showinfo=0&theme=light&annotations=3" frameborder="0" allowfullscreen></iframe>            </div>        </div>    </div>    <div class="guapp__features">        <div class="gs-container">            <ul class="list grid">                <li class="guapp__feature list__item grid__item">                    <img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/feature-1.png" alt=""/>                    <h2 class="guapp__feature__title">Make it yours</h2>                    <p class="guapp__feature__desc">Make it yours by tailoring your home screen. Pick the topics and sections that matter most to you, then choose how they appear.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/feature-2.png" alt=""/>                    <h2 class="guapp__feature__title">Get the inside track</h2>                    <p class="guapp__feature__desc">Follow your favourite stories, series and writers for personal notifications, and get goal alerts when your football team is in action. Straight to your mobile or tablet.</p>                </li>                <li class="guapp__feature list__item grid__item guapp__feature--save">                    <img class="guapp__feature--save__image" src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/feature-3.png" alt=""/>                    <h2 class="guapp__feature__title">Save for later</h2>                    <p class="guapp__feature__desc">Keep reading offline, and save your favourite content for as long as you like.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Discover even more</h2>                    <p class="guapp__feature__desc">Browse award-winning audio, video and interactive content, as well as stunning full-screen galleries.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Have your say</h2>                    <p class="guapp__feature__desc">Shape the conversation with your comments, and share your photos and videos through GuardianWitness.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Enhance your experience</h2>                    <p class="guapp__feature__desc">Upgrade to the premium tier for just £2.49 a month. You&#8217;ll get daily crosswords, specially curated content, extracts from Guardian Books and an advert-free experience.</p>                </li>            </ul>        </div>    </div>    <div class="guapp__footer">        <div class="gs-container">            <div class="guapp__footer__wrapper">                <p class="guapp__tagline">                    <strong>The whole picture. The whole time.</strong><br/>                    Download the new free Guardian app                </p>                <div class="guapp__appstores">                    <a class="guapp__appstore__link"  href="https://itunes.apple.com/gb/app/the-guardian/id409128287?mt=8&uo=4"><img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/btn--appstore.png" alt="Android app on Google Play"/></a>                    <a class="guapp__appstore__link"  href="https://play.google.com/store/apps/details?id=com.guardian"><img src="https://s3-eu-west-1.amazonaws.com/app-promotional-static/guardianapppage/images/btn--playstore.png" alt="Android app on Google Play" /></a>                </div>            </div>        </div>        <div class="gs-container">            <p class="guapp__footer__designed">Designed by the Guardian behind a station in King&#8217;s Cross</p>        </div>    </div>');

$(".guapp__video__wrapper").click(function() {
    $(".guapp__video__player__button").hide();
    $(".guapp__video__poster").hide();
    $(".guapp__video__player").get(0).play();
    $(".guapp__video__player").removeAttr("controls");
    $(".guapp__video__player").attr("controls", "");
});