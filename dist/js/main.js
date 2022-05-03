(() => {
  "use strict";
  (e => {
    const t = document.getElementById("timer-hours"),
      n = document.getElementById("timer-minutes"),
      o = document.getElementById("timer-seconds");
    setInterval((() => {
      let e = (() => {
        let e = (new Date("5 may 2022").getTime() - (new Date).getTime()) / 1e3;
        return {
          timeRemaining: e,
          hours: Math.floor(e / 60 / 60),
          minutes: Math.floor(e / 60 % 60),
          seconds: Math.floor(e % 60)
        }
      })();
      e.timeRemaining > 0 && (t.textContent = c(e.hours), n.textContent = c(e.minutes), o.textContent = c(e.seconds))
    }), 1e3);
    const c = e => e >= 0 && e < 10 ? "0" + e : e
  })(), (() => {
    const e = document.querySelector(".menu"),
      t = document.querySelector("menu"),
      n = document.querySelector(".close-btn"),
      o = document.querySelectorAll("ul>li>a"),
      c = () => {
        t.classList.toggle("active-menu")
      };
    e.addEventListener("click", c), n.addEventListener("click", c), o.forEach((e => e.addEventListener("click", c)))
  })(), (() => {
    const e = document.querySelector(".popup"),
      t = document.querySelector(".popup-content"),
      n = document.querySelectorAll(".popup-btn"),
      o = e.querySelector(".popup-close");
    let c, l, r = 0;
    const a = () => {
      r++, c = requestAnimationFrame(a), r < 15 ? t.style.top = r + "%" : (cancelAnimationFrame(c), r = 0)
    };
    o.addEventListener("click", (() => {
      e.style.display = "none"
    })), n.forEach((t => {
      t.addEventListener("click", (() => {
        l < 786 || a(), e.style.display = "block"
      }))
    })), window.addEventListener("resize", (() => {
      l = document.documentElement.clientWidth
    }))
  })(), (() => {
    const e = document.querySelectorAll(".calc-block input"),
      t = document.querySelectorAll('[name="user_name"]'),
      n = document.querySelectorAll('[type="email"]'),
      o = document.querySelectorAll('[type="tel"]');
    console.log(e), e.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.replace(/\D+/, "")
      }))
    })), console.log(e), t.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[а-я -]+/gi)
      }))
    })), n.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi)
      }))
    })), o.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[0-9-()]+/gi)
      }))
    }))
  })()
})();