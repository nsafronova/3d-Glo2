(() => {
   "use strict";
   (e => {
      const t = document.getElementById("timer-hours"),
         o = document.getElementById("timer-minutes"),
         n = document.getElementById("timer-seconds");
      setInterval((() => {
         let e = (() => {
            let e = (new Date("8 may 2022").getTime() - (new Date).getTime()) / 1e3;
            return {
               timeRemaining: e,
               hours: Math.floor(e / 60 / 60),
               minutes: Math.floor(e / 60 % 60),
               seconds: Math.floor(e % 60)
            }
         })();
         e.timeRemaining > 0 && (t.textContent = c(e.hours), o.textContent = c(e.minutes), n.textContent = c(e.seconds))
      }), 1e3);
      const c = e => e >= 0 && e < 10 ? "0" + e : e
   })(), (() => {
      const e = document.querySelector("menu");
      document.addEventListener("click", (t => {
         let o = t.target;
         o.closest(".menu") ? e.classList.toggle("active-menu") : (o.closest("a") || o.closest("close-btn") || !o.closest("menu")) && e.classList.remove("active-menu")
      }))
   })(), (() => {
      const e = document.querySelector(".popup"),
         t = document.querySelector(".popup-content"),
         o = document.querySelectorAll(".popup-btn");
      let n, c, r = 0;
      const a = () => {
         r++, n = requestAnimationFrame(a), r < 15 ? t.style.top = r + "%" : (cancelAnimationFrame(n), r = 0)
      };
      o.forEach((t => {
         t.addEventListener("click", (() => {
            c < 786 || a(), e.style.display = "block"
         }))
      })), e.addEventListener("click", (t => {
         t.target.closest(".popup-content") && !t.target.classList.contains("popup-close") || (e.style.display = "none")
      })), window.addEventListener("resize", (() => {
         c = document.documentElement.clientWidth
      }))
   })(), (() => {
      const e = document.querySelectorAll(".calc-block input"),
         t = document.querySelectorAll('[name="user_name"]'),
         o = document.querySelectorAll('[type="email"]'),
         n = document.querySelectorAll('[type="tel"]');
      e.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(/\D+/, "")
         }))
      })), t.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.match(/[а-я -]+/gi)
         }))
      })), o.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi)
         }))
      })), n.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.match(/[0-9-()]+/gi)
         }))
      }))
   })(), (() => {
      const e = document.querySelector(".service-header"),
         t = document.querySelectorAll(".service-tab"),
         o = document.querySelectorAll(".service-header-tab");
      e.addEventListener("click", (e => {
         if (e.target.closest(".service-header-tab")) {
            const n = e.target.closest(".service-header-tab");
            o.forEach(((e, o) => {
               e === n ? (e.classList.add("active"), t[o].classList.remove("d-none")) : (e.classList.remove("active"), t[o].classList.add("d-none"))
            }))
         }
      }))
   })(), (() => {
      const e = document.querySelector(".portfolio-content"),
         t = document.querySelectorAll(".portfolio-item"),
         o = document.querySelectorAll(".dot");
      document.querySelectorAll(".portfolio-dots");
      let n, c = 0;
      const r = (e, t, o) => {
            e[t].classList.remove(o)
         },
         a = (e, t, o) => {
            e[t].classList.add(o)
         },
         l = () => {
            r(t, c, "portfolio-item-active"), r(o, c, "dot-active"), c++, c >= t.length && (c = 0), a(t, c, "portfolio-item-active"), a(o, c, "dot-active")
         },
         s = (e = 1500) => {
            n = setInterval(l, e)
         };
      e.addEventListener("click", (e => {
         e.preventDefault(), e.target.matches(".dot, .portfolio-btn") && (r(t, c, "portfolio-item-active"), r(o, c, "dot-active"), e.target.matches("#arrow-right") ? c++ : e.target.matches("#arrow-left") ? c-- : e.target.classList.contains("dot") && o.forEach(((t, o) => {
            e.target === t && (c = o)
         })), c >= t.length ? c = 0 : c < 0 && (c = t.length - 1), a(t, c, "portfolio-item-active"), a(o, c, "dot-active"))
      })), e.addEventListener("mouseenter", (e => {
         e.target.matches(".dot, .portfolio-btn") && clearInterval(n)
      }), !0), e.addEventListener("mouseleave", (e => {
         e.target.matches(".dot, .portfolio-btn") && s(2e3)
      }), !0), s(2e3)
   })()
})();