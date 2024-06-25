import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import anime from 'animejs';

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const counterRef = useRef(null);

  useEffect(() => {
    if (inView) {
      anime({
        targets: counterRef.current,
        innerHTML: [0, target],
        round: 1,
        easing: 'easeInOutQuad',
        duration: 2000,
        update: (anim) => {
          setCount(Math.round(anim.animations[0].currentValue));
        },
      });
    }
  }, [inView, target]);

  return (
    <div ref={ref} style={{ fontSize: '4rem', fontWeight: 'bold' }}>
      <span ref={counterRef}>{count}</span>
    </div>
  );
};

export default AnimatedCounter;