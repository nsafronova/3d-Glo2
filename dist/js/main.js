(() => {
   "use strict";
   (e => {
      const t = document.getElementById("timer-hours"),
         o = document.getElementById("timer-minutes"),
         c = document.getElementById("timer-seconds");
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
         e.timeRemaining > 0 && (t.textContent = n(e.hours), o.textContent = n(e.minutes), c.textContent = n(e.seconds))
      }), 1e3);
      const n = e => e >= 0 && e < 10 ? "0" + e : e
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
      let c, n, a = 0;
      const l = () => {
         a++, c = requestAnimationFrame(l), a < 15 ? t.style.top = a + "%" : (cancelAnimationFrame(c), a = 0)
      };
      o.forEach((t => {
         t.addEventListener("click", (() => {
            n < 786 || l(), e.style.display = "block"
         }))
      })), e.addEventListener("click", (t => {
         t.target.closest(".popup-content") && !t.target.classList.contains("popup-close") || (e.style.display = "none")
      })), window.addEventListener("resize", (() => {
         n = document.documentElement.clientWidth
      }))
   })(), (() => {
      const e = document.querySelectorAll(".calc-block input"),
         t = document.querySelectorAll('[name="user_name"]'),
         o = document.querySelectorAll('[type="email"]'),
         c = document.querySelectorAll('[type="tel"]');
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
      })), c.forEach((e => {
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
            const c = e.target.closest(".service-header-tab");
            o.forEach(((e, o) => {
               e === c ? (e.classList.add("active"), t[o].classList.remove("d-none")) : (e.classList.remove("active"), t[o].classList.add("d-none"))
            }))
         }
      }))
   })(), (() => {
      const e = document.querySelector(".portfolio-content"),
         t = document.querySelectorAll(".portfolio-item"),
         o = document.querySelectorAll(".dot");
      document.querySelectorAll(".portfolio-dots");
      let c, n = 0;
      const a = (e, t, o) => {
            e[t].classList.remove(o)
         },
         l = (e, t, o) => {
            e[t].classList.add(o)
         },
         r = () => {
            a(t, n, "portfolio-item-active"), a(o, n, "dot-active"), n++, n >= t.length && (n = 0), l(t, n, "portfolio-item-active"), l(o, n, "dot-active")
         },
         s = (e = 1500) => {
            c = setInterval(r, e)
         };
      e.addEventListener("click", (e => {
         e.preventDefault(), e.target.matches(".dot, .portfolio-btn") && (a(t, n, "portfolio-item-active"), a(o, n, "dot-active"), e.target.matches("#arrow-right") ? n++ : e.target.matches("#arrow-left") ? n-- : e.target.classList.contains("dot") && o.forEach(((t, o) => {
            e.target === t && (n = o)
         })), n >= t.length ? n = 0 : n < 0 && (n = t.length - 1), l(t, n, "portfolio-item-active"), l(o, n, "dot-active"))
      })), e.addEventListener("mouseenter", (e => {
         e.target.matches(".dot, .portfolio-btn") && clearInterval(c)
      }), !0), e.addEventListener("mouseleave", (e => {
         e.target.matches(".dot, .portfolio-btn") && s(2e3)
      }), !0), s(2e3)
   })(), ((e = 100) => {
      const t = document.querySelector(".calc-block"),
         o = document.querySelector(".calc-type"),
         c = document.querySelector(".calc-square"),
         n = document.querySelector(".calc-count"),
         a = document.querySelector(".calc-day"),
         l = document.getElementById("total");
      t.addEventListener("input", (t => {
         t.target !== o && t.target !== c && t.target !== n && t.target !== a || (() => {
            const t = +o.options[o.selectedIndex].value,
               r = +c.value;
            let s = 0,
               i = 1,
               u = 1;
            n.value > 1 && (i += n.value / 10), a.value && a.value < 5 ? u = 2 : a.value && a.value < 10 && (u = 1.5), o.value && c.value ? (s = e * t * r * i * u, l.textContent = s) : s = 0, l.textContent = s
         })()
      }))
   })(100)
})();