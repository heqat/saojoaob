import { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
    const btnPlayVideo = document.getElementById('btn-play-video');
    const containerVideo = document.getElementById('container-video');

    function handlePlayVideo(event) {
      event.preventDefault();
      btnPlayVideo.style.display = 'none';
      containerVideo.innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/GdVTH-02big?si=HgFV-6SdKQOWkKgq" title=" title="Clipe carnaval" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

    btnPlayVideo?.addEventListener('click', handlePlayVideo);
    return () => btnPlayVideo?.removeEventListener('click', handlePlayVideo);
  }, []);

  return (
    <section id='clipe'>
      <div id='container-video' className='d-flex justify-content-center align-items-center container-video' data-parallax="scroll" data-image-src="/instrumentos.jpg">
        <button id='btn-play-video' type='button' className='m-btn-play-video'>
          <i className='bx bx-play-circle bx-tada text-white display-1'></i>
        </button>
      </div>
    </section>
  );
}
