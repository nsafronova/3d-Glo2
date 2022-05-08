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
         e.timeRemaining > 0 && (t.textContent = a(e.hours), o.textContent = a(e.minutes), c.textContent = a(e.seconds))
      }), 1e3);
      const a = e => e >= 0 && e < 10 ? "0" + e : e
   })(), (() => {
      const e = document.querySelector("menu");
      document.addEventListener("click", (t => {
         let o = t.target;
         o.closest(".menu") ? e.classList.toggle("active-menu") : (o.closest("a") || o.closest("close-btn") || !o.closest("menu")) && e.classList.remove("active-menu")
      }))
   })(), (() => {
      const e = document.querySelector(".popup"),
         t = document.querySelector(".popup-content");
      let o;
      document.querySelectorAll(".popup-btn").forEach((c => {
         c.addEventListener("click", (() => {
            o < 786 ? e.style.display = "block" : (({
               timing: e,
               draw: t,
               duration: o
            }) => {
               let c = performance.now();
               requestAnimationFrame((function a(n) {
                  let l = (n - c) / o;
                  l > 1 && (l = 1);
                  let r = e(l);
                  t(r), l < 1 && requestAnimationFrame(a)
               }))
            })({
               duration: 700,
               timing: e => Math.pow(e, 2),
               draw(o) {
                  t.style.top = 15 * o + "%", e.style.display = "block"
               }
            })
         }))
      })), e.addEventListener("click", (t => {
         t.target.closest(".popup-content") && !t.target.classList.contains("popup-close") || (e.style.display = "none")
      })), window.addEventListener("resize", (() => {
         o = document.documentElement.clientWidth
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
         o = document.querySelector(".portfolio-dots");
      let c, a = document.querySelectorAll(".dot"),
         n = 0;
      const l = (e, t, o) => {
            e[t].classList.remove(o)
         },
         r = (e, t, o) => {
            e[t].classList.add(o)
         },
         s = () => {
            l(t, n, "portfolio-item-active"), l(a, n, "dot-active"), n++, n >= t.length && (n = 0), r(t, n, "portfolio-item-active"), r(a, n, "dot-active")
         },
         i = (e = 1500) => {
            c = setInterval(s, e)
         };
      e.addEventListener("click", (e => {
         e.preventDefault(), e.target.matches(".dot, .portfolio-btn") && (l(t, n, "portfolio-item-active"), l(a, n, "dot-active"), e.target.matches("#arrow-right") ? n++ : e.target.matches("#arrow-left") ? n-- : e.target.classList.contains("dot") && a.forEach(((t, o) => {
            e.target === t && (n = o)
         })), n >= t.length ? n = 0 : n < 0 && (n = t.length - 1), r(t, n, "portfolio-item-active"), r(a, n, "dot-active"))
      })), e.addEventListener("mouseenter", (e => {
         e.target.matches(".dot, .portfolio-btn") && clearInterval(c)
      }), !0), e.addEventListener("mouseleave", (e => {
         e.target.matches(".dot, .portfolio-btn") && i(2e3)
      }), !0), t.forEach(((e, t) => {
         console.log(t);
         const c = document.createElement("li");
         0 === t && c.classList.add("dot-active"), c.classList.add("dot"), o.append(c)
      })), a = document.querySelectorAll(".dot"), i(2e3)
   })(), ((e = 100) => {
      const t = document.querySelector(".calc-block"),
         o = document.querySelector(".calc-type"),
         c = document.querySelector(".calc-square"),
         a = document.querySelector(".calc-count"),
         n = document.querySelector(".calc-day"),
         l = document.getElementById("total");
      t.addEventListener("input", (t => {
         t.target !== o && t.target !== c && t.target !== a && t.target !== n || (() => {
            const t = +o.options[o.selectedIndex].value,
               r = +c.value;
            let s = 0,
               i = 1,
               d = 1;
            a.value > 1 && (i += a.value / 10), n.value && n.value < 5 ? d = 2 : n.value && n.value < 10 && (d = 1.5), o.value && c.value ? (s = e * t * r * i * d, l.textContent = s) : s = 0, l.textContent = s
         })()
      }))
   })(100)
})();