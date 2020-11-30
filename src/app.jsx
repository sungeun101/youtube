import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }
  //비디오가 받아지면, video state를 업데이트

  const search = query => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null)
      })
      ;
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {
          selectedVideo &&
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        }
        <div className={styles.list}>
          {/* 컴포넌트에 className하면 props로 들어가기 때문에 div로 감싼 후 className */}
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
