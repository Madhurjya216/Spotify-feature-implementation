async function songs() {
  const data = await fetch("http://127.0.0.1:5500/songs/");
  const res = await data.text();
  console.log(res);
  let div = document.createElement("div");
  div.innerHTML = res;
  const as = div.getElementsByTagName("a");
  console.log(as);

  const song = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      song.push(element.href);
    }
    console.log(song);

    const tree = document.getElementsByTagName("a");
    tree.href = song;
  }
}

songs();;
