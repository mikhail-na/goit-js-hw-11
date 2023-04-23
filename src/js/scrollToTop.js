import { refs } from './refs';

export function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    refs.btnTop.style.display = 'flex';
  } else {
    refs.btnTop.style.display = 'none';
  }
}
refs.btnTopRef.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//? scroll example =================================================

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     // element.style.display = "block";
//     refs.btnTop.style.opacity = '1';
//     refs.btnTop.style.transform = 'translateY(0px)';
//   } else {
//     // btnTop.style.display = "none";
//     refs.btnTop.style.opacity = '0';
//     refs.btnTop.style.transform = 'translateY(20px)';
//   }
// }
// // scrollFunction()
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   $('html, body').animate({ scrollTop: 0 }, 'slow');
// }

// refs.btnTop.addEventListener('click', topFunction);
