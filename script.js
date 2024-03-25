function getTab(el) {
  const active = document.querySelector(".active");
  const visible = document.querySelector(".content-visible");
  const tabContent = document.getElementById(el.href.split("#")[1]);

  active.classList.toggle("active");
  visible.classList.toggle("content-visible");

  el.classList.add("active");
  tabContent.classList.add("content-visible");
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".tab-item a")) {
    getTab(e.target);
  }
});

const containerTwo = document.querySelector(".content-container-2");
const btn = document.querySelector(".btn");
const containerOne = document.querySelector(".content-container-1");
const a =
  'HTML, or Hypertext Markup Language, is the standard markup language used to create web pages and define their structure and content. HTML elements tell the browser how to display content, and can label pieces of content like "this is a heading", "this is a paragraph", or "this is a link". For example, content can be structured within paragraphs, bulleted points, images, or data tables';

btn.addEventListener("click", () => {
  containerOne.innerText = a;
  containerTwo.classList.toggle("toggle");
  // const firstPara = document.querySelector('.content-container-1');
  // const content = firstPara.textContent;
  // firstPara.textContent = content.substring(0, content.lastIndexOf('...'));
});
