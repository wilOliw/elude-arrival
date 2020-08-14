// const $frame = document.getElementsByClassName('arrival__frame-content')[0];
//
// const containerSize = ({
// 	w: $frame.offsetWidth,
// 	h: $frame.offsetHeight
// })
// // $frame.innerHTML = `<iframe width="${containerSize.w}" height="${containerSize.h}" src="https://www.youtube.com/embed/f8BgqvqjC-s?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//
// function fillFrame(type, url) {
// 	if (type === 'img') {
// 		$frame.innerHTML = `<img src="${url}"/>`;
// 	} else if (type === 'video') {
// 		$frame.innerHTML = (`
//
// 		`)
// 	} else {
// 		alert('no fill.');
// 	}
// }
//
// var tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player('player', {
// 		width: containerSize.w,
// 		height: containerSize.h,
// 		videoId: 'ygoaBrsf8Hw',
// 		events: {
// 			'onReady': onPlayerReady,
// 			'onStateChange': onPlayerStateChange
// 		}
// 	});
// }
//
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
// 	// event.target.playVideo();
// 	console.log('ready.')
// }
//
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
// 	if (event.data == YT.PlayerState.PLAYING && !done) {
// 		// setTimeout(stopVideo, 6000);
// 		done = true;
// 	}
// }
// function stopVideo() {
// 	player.stopVideo();
// }
//
// fillFrame('img', 'https://www.liveabout.com/thmb/s6wcupyhjrstpTmxv_3K8kLIPYM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/feet-face-599c412c22fa3a0011d92add.jpg')
// // fillFrame('video', 'https://www.liveabout.com/thmb/s6wcupyhjrstpTmxv_3K8kLIPYM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/feet-face-599c412c22fa3a0011d92add.jpg')
