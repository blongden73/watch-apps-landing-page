$("article").html(' <div class="guapp__proposition">        <div class="gs-container">            <h1 class="guapp__proposition__title">The new free Guardian app for iOS and Android</h1>            <p class="guapp__proposition__intro">Get the whole picture the whole time, with up-to-minute coverage, personalised alerts, offline reading and full access to the Guardian’s award-winning journalism. For mobile, for tablet, for free.</p>            <img class="guapp__proposition__image" src="#" alt=""/>            <div class="guapp__appstores">                <a class="guapp__appstore__link" href="#appleitunes"><img src="#" alt="Download on the App Store"/></a>                <a class="guapp__appstore__link" href="#googleplay"><img src="#" alt="Android app on Google Play"/></a>            </div>        </div>    </div>    <div class="guapp__video">        <div class="gs-container">            <video>                        </video>        </div>    </div>    <div class="guapp__features">        <div class="gs-container">            <ul class="list grid">                <li class="guapp__feature list__item grid__item">                    <img src="#" alt=""/>                    <h2 class="guapp__feature__title">Make it yours</h2>                    <p class="guapp__feature__desc">Make it yours by tailoring your home screen. Pick the topics and sections that matter most to you, then choose how they appear.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <img src="#" alt=""/>                    <h2 class="guapp__feature__title">Get the inside track</h2>                    <p class="guapp__feature__desc">Follow your favourite stories, series and writers for personal notifications, and get goal alerts when your football team is in action. Straight to your mobile or tablet.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <img src="#" alt=""/>                    <h2 class="guapp__feature__title">Save for later</h2>                    <p class="guapp__feature__desc">Keep reading offline, and save your favourite content for as long as you like.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Discover even more</h2>                    <p class="guapp__feature__desc">Browse award-winning audio, video and interactive content, as well as stunning full-screen galleries.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Have your say</h2>                    <p class="guapp__feature__desc">Shape the conversation with your comments, and share your photos and videos through GuardianWitness.</p>                </li>                <li class="guapp__feature list__item grid__item">                    <h2 class="guapp__feature__title">Enhance your experience</h2>                    <p class="guapp__feature__desc">Upgrade to the premium tier for just £2.49 a month. You&#8217;ll get daily crosswords, specially curated content, extracts from Guardian Books and an advert-free experience.</p>                </li>            </ul>        </div>    </div>    <div class="guapp__footer">        <div class="gs-container grid">            <div class="grid__item">                <p class="guapp__tagline">                    <strong>The whole picture. The whole time.</strong><br/>                    Download the new free Guardian app                </p>            </div>            <div class="grid__item">                <div class="guapp__appstores">                    <a class="guapp__appstore__link" href="#appleitunes"><img src="#" alt="Download on the App Store"/></a>                    <a class="guapp__appstore__link" href="#googleplay"><img src="#" alt="Android app on Google Play"/></a>                </div>            </div>        </div>    </div>');

$(".guapp__video__player__button").click(function() {
    $(".guapp__video__player")[0].play();
    $(".guapp__video__player__button").hide();

    if ($(".guapp__video__player")[0].hasAttribute("controls")) {
       $(".guapp__video__player")[0].removeAttribute("controls")   
    } else {
         $(".guapp__video__player")[0].setAttribute("controls","controls")
    }

});