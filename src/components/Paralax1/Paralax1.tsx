import React, { useEffect } from 'react';
import styles from './Paralax1.module.css';

interface Props {
  url: string;
  text: string;
  insideTextColor?: string;
  outsideTextColor?: string;
  fontFamily?: string;
}

const Paralax1 = ({ url, text, insideTextColor, outsideTextColor, fontFamily }: Props) => {
  let didScroll = false;
  let paralaxTitles: HTMLElement[] = [];

  useEffect(() => {
    const insideText: HTMLElement | null = document.getElementById("outsideText");
    const outsideText: HTMLElement | null = document.getElementById("insideText");

    if (outsideTextColor) {
      outsideText!.style.color = outsideTextColor;
    }

    if (insideTextColor) {
      insideText!.style.color = insideTextColor;
    }

    if (fontFamily) {
      outsideText!.style.fontFamily = fontFamily;
      insideText!.style.fontFamily = fontFamily;
    }

    paralaxTitles = Array.from(document.querySelectorAll(".paralax_title"));
    requestAnimationFrame(raf);
    window.addEventListener('scroll', scrollInProgress);

    return () => {
      // Cleanup: Remove event listener on unmount
      window.removeEventListener('scroll', scrollInProgress);
    };
  }, []);

  const scrollInProgress = () => {
    didScroll = true;
  };

  const raf = () => {
    if (didScroll) {
      paralaxTitles.forEach((element: HTMLElement, index) => {
        element.style.transform = `translateX(${window.scrollY / 10}%)`;
      });
      didScroll = false;
    }
    requestAnimationFrame(raf);
  };

  return (
    <div className={styles.outer_container}>
      <div
        className={styles.image_container}
        style={{
          backgroundImage: `url(${url})` // 'https://images.unsplash.com/photo-1570528812862-9984124e7e22?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
        }}
      >
        <h2 id="outsideText" className={`${styles.section_title} ${styles.on_dark}`}>
          <span className="paralax_title"> {text} </span>
        </h2>
      </div>

      <h2 className={styles.section_title}>
        <span id="insideText" className="paralax_title"> {text} </span>
      </h2>
    </div >
  );
};

export default Paralax1;
