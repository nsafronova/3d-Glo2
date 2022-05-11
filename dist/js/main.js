(() => {
   "use strict";
   const e = ({
      formId: e,
      someElem: t = []
   }) => {
      const o = document.querySelector(`#${e}`),
         a = document.createElement("div"),
         r = o.querySelector('[name="user_phone"]'),
         c = o.querySelector('[name="user_name"]'),
         n = document.querySelectorAll('[name="user_message"]'),
         s = o.querySelector('[name="user_email"]');
      r.addEventListener("input", (e => {
         e.target.value.match(/[0-9-()]+/gi) ? e.target.classList.add("success") : e.target.classList.add("error")
      })), c.addEventListener("input", (e => {
         e.target.value.match(/[а-я -]+/gi) ? e.target.classList.add("success") : e.target.classList.add("error")
      })), n.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value.match(/[а-я -0-9,:;.]+/gi) ? e.target.classList.add("success") : e.target.classList.add("error")
         }))
      })), s.addEventListener("input", (e => {
         e.target.value.match(/[a-z0-9@-_.!~*']+/gi) ? e.target.classList.add("success") : e.target.classList.add("error")
      }));
      try {
         if (!o) throw new Error("Пожалуйста, верните форму)");
         o.addEventListener("submit", (e => {
            e.preventDefault(), (() => {
               const e = o.querySelectorAll("input"),
                  r = new FormData(o),
                  c = {};
               var n;
               a.textContent = "Загрузка..", o.append(a), r.forEach(((e, t) => {
                  c[t] = e
               })), t.forEach((e => {
                  const t = document.getElementById(e.id);
                  "block" === e.type && "0" !== t.textContent ? c[e.id] = t.textContent : "input" === e.type && 0 !== t.value && (c[e.id] = t.value)
               })), (e => {
                  let t = !0;
                  return e.forEach((e => {
                     !e.classList.contains("success") && e.classList.contains("error") && (t = !1)
                  })), t
               })(e) ? (n = c, fetch("https://jsonplaceholder.typicode.com/posts", {
                  method: "POST",
                  body: JSON.stringify(n),
                  headers: {
                     "Content-Type": "application/json"
                  }
               }).then((e => e.json()))).then((t => {
                  e.forEach((e => {
                     e.value = "", a.textContent = "Спасибо! Наш менеджер свяжется с Вами!"
                  }))
               })).catch((e => {
                  a.textContent = "Ошибка"
               })) : (alert("Данные не валидны!"), e.forEach((e => {
                  e.value = "", a.textContent = ""
               })))
            })(), n.forEach((e => {
               e.classList.remove("success"), e.classList.remove("error")
            }))
         }))
      } catch (e) {
         console.log(e.message)
      }
   };
   (e => {
      const t = document.getElementById("timer-hours"),
         o = document.getElementById("timer-minutes"),
         a = document.getElementById("timer-seconds");
      setInterval((() => {
         let e = (() => {
            let e = (new Date("18 may 2022").getTime() - (new Date).getTime()) / 1e3;
            return {
               timeRemaining: e,
               hours: Math.floor(e / 60 / 60),
               minutes: Math.floor(e / 60 % 60),
               seconds: Math.floor(e % 60)
            }
         })();
         e.timeRemaining > 0 && (t.textContent = r(e.hours), o.textContent = r(e.minutes), a.textContent = r(e.seconds))
      }), 1e3);
      const r = e => e >= 0 && e < 10 ? "0" + e : e
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
      document.querySelectorAll(".popup-btn").forEach((a => {
         a.addEventListener("click", (() => {
            o < 786 ? e.style.display = "block" : (({
               timing: e,
               draw: t,
               duration: o
            }) => {
               let a = performance.now();
               requestAnimationFrame((function r(c) {
                  let n = (c - a) / o;
                  n > 1 && (n = 1);
                  let s = e(n);
                  t(s), n < 1 && requestAnimationFrame(r)
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
         a = document.querySelectorAll('[type="tel"]');
      e.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.replace(/\D+/, "")
         }))
      })), t.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.match(/[а-я-]+/gi)
         }))
      })), o.forEach((e => {
         e.addEventListener("input", (e => {
            e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi)
         }))
      })), a.forEach((e => {
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
            const a = e.target.closest(".service-header-tab");
            o.forEach(((e, o) => {
               e === a ? (e.classList.add("active"), t[o].classList.remove("d-none")) : (e.classList.remove("active"), t[o].classList.add("d-none"))
            }))
         }
      }))
   })(), (() => {
      const e = document.querySelector(".portfolio-content"),
         t = document.querySelectorAll(".portfolio-item"),
         o = document.querySelector(".portfolio-dots");
      let a, r = document.querySelectorAll(".dot"),
         c = 0;
      const n = (e, t, o) => {
            e[t].classList.remove(o)
         },
         s = (e, t, o) => {
            e[t].classList.add(o)
         },
         l = () => {
            n(t, c, "portfolio-item-active"), n(r, c, "dot-active"), c++, c >= t.length && (c = 0), s(t, c, "portfolio-item-active"), s(r, c, "dot-active")
         },
         i = (e = 1500) => {
            a = setInterval(l, e)
         };
      e.addEventListener("click", (e => {
         e.preventDefault(), e.target.matches(".dot, .portfolio-btn") && (n(t, c, "portfolio-item-active"), n(r, c, "dot-active"), e.target.matches("#arrow-right") ? c++ : e.target.matches("#arrow-left") ? c-- : e.target.classList.contains("dot") && r.forEach(((t, o) => {
            e.target === t && (c = o)
         })), c >= t.length ? c = 0 : c < 0 && (c = t.length - 1), s(t, c, "portfolio-item-active"), s(r, c, "dot-active"))
      })), e.addEventListener("mouseenter", (e => {
         e.target.matches(".dot, .portfolio-btn") && clearInterval(a)
      }), !0), e.addEventListener("mouseleave", (e => {
         e.target.matches(".dot, .portfolio-btn") && i(2e3)
      }), !0), t.forEach(((e, t) => {
         const a = document.createElement("li");
         0 === t && a.classList.add("dot-active"), a.classList.add("dot"), o.append(a)
      })), r = document.querySelectorAll(".dot"), i(2e3)
   })(), ((e = 100) => {
      const t = document.querySelector(".calc-block"),
         o = document.querySelector(".calc-type"),
         a = document.querySelector(".calc-square"),
         r = document.querySelector(".calc-count"),
         c = document.querySelector(".calc-day"),
         n = document.getElementById("total");
      t.addEventListener("input", (t => {
         t.target !== o && t.target !== a && t.target !== r && t.target !== c || (() => {
            const t = +o.options[o.selectedIndex].value,
               s = +a.value;
            let l = 0,
               i = 1,
               d = 1;
            r.value > 1 && (i += r.value / 10), c.value && c.value < 5 ? d = 2 : c.value && c.value < 10 && (d = 1.5), o.value && a.value ? (l = e * t * s * i * d, n.textContent = l) : l = 0, n.textContent = l
         })()
      }))
   })(100), e({
      formId: "form1",
      someElem: [{
         type: "block",
         id: "total"
      }]
   }), e({
      formId: "form2",
      someElem: [{
         type: "block",
         id: "total"
      }]
   }), e({
      formId: "form3",
      someElem: [{
         type: "block",
         id: "total"
      }]
   })
})();