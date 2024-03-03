const replaceMusic = (str) => {
  return str
    .replaceAll("A#", "a")
    .replaceAll("C#", "c")
    .replaceAll("D#", "d")
    .replaceAll("F#", "f")
    .replaceAll("G#", "g");
};

function solution(m, musicinfos) {
  m = replaceMusic(m);
  const music_info = [];

  musicinfos.forEach((e, i) => {
    let [start, end, title, music] = e.split(",");
    music = replaceMusic(music);
    const music_time =
      parseInt(end.split(":")[0]) * 60 +
      parseInt(end.split(":")[1]) -
      (parseInt(start.split(":")[0]) * 60 + parseInt(start.split(":")[1]));

    if (music.length < music_time) {
      music +=
        music.repeat(Math.floor(music_time / music.length)) +
        music.substring(0, music_time % music.length);
    } else if (music.length > music_time) {
      music = music.substring(0, music_time);
    }

    if (music.includes(m)) music_info.push([music_time, title, i]);
  });

  if (music_info.length == 0) return "(None)";

  music_info.sort((a, b) => b[0] - a[0] || a[2] - b[2]);

  return music_info[0][1];
}
