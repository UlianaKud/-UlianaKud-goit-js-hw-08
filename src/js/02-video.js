import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify({ seconds })
    );
  }, 1000)
);

const { seconds } = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
console.log(seconds);

if (seconds) {
  player.setCurrentTime(seconds);
}
