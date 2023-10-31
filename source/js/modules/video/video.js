const playVideo = () => {
  // if (document.querySelector('.about__btn')
  //     && document.querySelector('.about__video')
  //     && document.querySelector('.about__video iframe')) {

  //   const btnPlay = document.querySelector('.about__btn');
  //   const blockVideo = document.querySelector('.about__video');
  //   const iframeVideo = document.querySelector('.about__video iframe');

  //   btnPlay.addEventListener('click', () => {
  //     blockVideo.classList.add('active');
  //     iframeVideo.setAttribute('autoplay', 'autoplay');
  //     console.log('uuu')
  //   })
  // }

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player = document.querySelector(".about__video");
  let link = document.querySelector(".about__btn");

  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    player.classList.add("is-show");
    new YT.Player(player, {
      videoId: "9TZXsZItgdw",
      events: {
        onReady: (e) => e.target.playVideo()
      }
    });
    evt.stopPropagation();
  });


};

export { playVideo };
