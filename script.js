// variables....................................

// یک متغیر واسه دیو پرنتی ک توش همه این اتفاقا میفته تایین کردم
let tabsNewNote = document.querySelector("#tabs-NewNote");

let svg = document.querySelector("#svgBtn");

let textarea = document.querySelector("#textarea");

let tab = document.querySelectorAll("button");

// adding a tab function..........................
let number = 0;
function addNote() {
  // یک دیو ساختم
  let button = document.createElement("button");
  // براش استایلی ک توی سی اس اس دادمو گذاشتم
  button.classList.add("noteStyle");

  // توی اون دیو هدینگ اضافه کردم
  // با هربار اضافه کردن یکی بیشترشه
  number++;
  button.innerHTML = "New Note " + number;

  // giving tabs active class......................
  button.addEventListener("click", () => {
    document.querySelector(".activeNote")?.classList.remove("activeNote");
    button.classList.add("activeNote");

    // getting tabs from local storage.............
    // به جیسون نیازی نیست چون همشون استرینگ هستن و تنها با لوکال اسورج میشه ذخیرشون کرد
    textarea.value = localStorage.getItem(button.textContent);
  });

  // دیوی ک ساختم رو توی این دیو پرنت گذاشتم و دیو رو نمایش میده
  tabsNewNote.appendChild(button);

  // اس وی جی رو ببره اخر دیو پرنت بزاره یعنی بعد از اون دیوی ک ساخته شد
  tabsNewNote.appendChild(svg);

  // save tabs in local storge......................
  localStorage.setItem("New Note " + number, "");
}

// ساخت اولین تب موقع لود صفحه چون که میخوام عدد بگیره
// برای همین توی جی اس میسازمش نه توی اچ تی ام ال
addNote();

// اگه روی اس وی جی کلیک شه این فانکشن ها انجام شن
svg.addEventListener("click", addNote);


//saving the text with localStorage....................
// باید بیرون از فانکشن هم نوشته بشه ک موقع لود صفحه متن بمونه
textarea.value = localStorage.getItem("key");

document.querySelector(".save").addEventListener("click", () => {
  let selectedTab = document.querySelector(".activeNote");
  console.log(selectedTab.textContent);

  localStorage.setItem(selectedTab.textContent, textarea.value);
});

// the date in which note has been created.....................

let date = document.querySelector("#date");
date = new Date();
document.querySelector("#date > span").textContent = date.toLocaleDateString();

//deleting the text....................................

let removableDiv = document.querySelector("#removable");
//  قبلا واسه تکست اریا متغیر گذاشتم

document.querySelector("#deleteBtn").addEventListener("click", function () {
  if (confirm("are you sure?") == true) {
    removableDiv.remove();
  }
});

//active & disabled state...............................

let navbarBtns = document.querySelectorAll(".navbarBtn");

navbarBtns.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    button.classList.add("active");
  });
});

// sending info between tabs.............................

// search through notes with loop........................
