export interface StoryData {
    type: "image" | "video";
    src: string;
    width: number;
    height: number;
  }
  
  export const storyData: StoryData[] = [
  {type: "image", src: "https://fastly.picsum.photos/id/670/450/853.jpg?hmac=YPJBmKpKzUASB--jf3-y13w0K4TIvfezwLBDWBHgGvw", width: 450, height: 853},
  {type: "image", src: "https://fastly.picsum.photos/id/955/450/853.jpg?hmac=wHkyeTYI6RhkApHDBw5tIhDatVJ1JLOwh--fHQdhk-k", width: 450, height: 853},
  {type: "image", src: "https://fastly.picsum.photos/id/47/450/853.jpg?hmac=fYzBlY7YEnN5W9Mkb4vKKQxhpmjGgWbgzlpk62QfmHY", width: 450, height: 853},
  {type: "image", src: "https://fastly.picsum.photos/id/896/450/853.jpg?hmac=WosAQgr1ppitgWJgt050y_HoDS4j5Hqu_BI48j8qqyo", width: 450, height: 853},
  {type: "image", src: "https://fastly.picsum.photos/id/421/450/853.jpg?hmac=rDZTVZNOjEmXe0h8J_2LFNRmoDChqGGvXTatTBxXcCQ", width: 450, height: 853},
  ]