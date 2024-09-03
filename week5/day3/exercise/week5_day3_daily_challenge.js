class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);

    }
}
// First video instance
const video1 = new Video('Javascript Tutorial', 'Alice', '5:00');
video1.watch()
// Second video instance
const video2 = new Video('Python Tutorial', 'Bob', '10:00');
video2.watch()

// Bonus:
const videoData = [
    { title: 'React Introduction', uploader: 'Charlie', time: '6:00' },
    { title: 'Node.js Guide', uploader: 'Dana', time: '7:20' },
    { title: 'HTML for Beginners', uploader: 'Eve', time: '4:30' },
    { title: 'Advanced CSS', uploader: 'Frank', time: '5:45' },
    { title: 'Python Crash Course', uploader: 'Grace', time: '6:10' }
];

// Array to hold video instances
const videoInstances = [];

// Loop through videoData to create video instances
videoData.forEach(video => {
    const newVideo = new Video(video.title, video.uploader, video.time);
    videoInstances.push(newVideo);
    newVideo.watch(); // Automatically call the watch() method for each instance
});
