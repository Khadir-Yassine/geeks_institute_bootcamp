class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(this.uploader + " watched all " + this.time + " of " + this.title + "!");
  }
}

var video1 = new Video("JavaScript Basics", "Yassine", 300);
video1.watch();

var video2 = new Video("Learn OOP", "Sara", 450);
video2.watch();


var videoData = [
  { title: "JS Arrays", uploader: "Ali", time: 200 },
  { title: "JS Objects", uploader: "Lina", time: 180 },
  { title: "Async JS", uploader: "Omar", time: 400 },
  { title: "DOM Tutorial", uploader: "Nora", time: 350 },
  { title: "Node.js Intro", uploader: "Karim", time: 500 }
];

var videos = [];

for (var i = 0; i < videoData.length; i++) {
  var data = videoData[i];
  var newVideo = new Video(data.title, data.uploader, data.time);
  videos.push(newVideo);
}


for (var i = 0; i < videos.length; i++) {
  videos[i].watch();
}
