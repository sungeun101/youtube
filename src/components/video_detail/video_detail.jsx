import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({ video, video: { snippet } }) => (
    <section className={styles.detail}>
        <iframe className={styles.video} title={video.id} id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&origin=http://example.com`}
            frameBorder="0" allowFullScreen></iframe>
        <h2 className={styles.title}>{snippet.title}</h2>
        <h3 className={styles.channelTitle}>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
    </section >
)
// const VideoDetail = ({video}) => {
//    return <h1>{video.snippet.title}</h1>
// };
// 화살표 함수의 유일한 문장이 'return'일 때 'return'과
// 중괄호({})를 생략할 수 있다.

export default VideoDetail;