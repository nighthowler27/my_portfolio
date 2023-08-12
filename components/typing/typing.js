"use client"
import React, { useEffect } from 'react';
import styles from '@/components/typing/typing.module.css';

const Typing = () => {
  useEffect(() => {
    const TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

      const that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName(styles.typewrite);
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid #fff }`;
    document.body.appendChild(css);
  }, []);

  return (
    <div className="container">
      <h1>
        <a
          href=""
          className={styles.typewrite}
          data-period="2000"
          data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
        >
          <span className="wrap"></span>
        </a>
      </h1>
    </div>
  );
};

export default Typing;
