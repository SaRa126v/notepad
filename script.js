// variables....................................

// یک متغیر واسه دیو پرنتی ک توش همه این اتفاقا میفته تایین کردم
let tabsNewNote = document.querySelector('#tabs-NewNote');

let svg = document.querySelector('#svgBtn');


// adding a tab function..........................
function addNote() {

// یک دیو ساختم
let button = document.createElement('button');
// براش استایلی ک توی سی اس اس دادمو گذاشتم
button.classList.add('noteStyle');
  // توی اون دیو هدینگ اضافه کردم
button.innerHTML = 'New Note';

// دیوی ک ساختم رو توی این دیو پرنت گذاشتم و دیو رو نمایش میده
tabsNewNote.appendChild(button)

// اس وی جی رو ببره اخر دیو پرنت بزاره یعنی بعد از اون دیوی ک ساخته شد
tabsNewNote.appendChild(svg);
}


// اگه روی اس وی جی کلیک شه این فانکشن ها انجام شن
svg.addEventListener('click', addNote)

// the date note has been created.....................

let date = document.querySelector('#date');
date = new Date ;
document.querySelector('#date > span').textContent = date.toLocaleDateString()


//saving the text with localStorage....................

let textarea = document.querySelector('#textarea')

// باید بیرون از فانکشن هم نوشته بشه ک موقع لود صفحه متن بمونه
textarea.innerHTML = localStorage.getItem('key');

document.querySelector('.save').addEventListener('click', () => {
localStorage.setItem('key', textarea.value);
textarea.innerHTML = localStorage.getItem('key');
} )

//deleting the text....................................

let removableDiv = document.querySelector('#removable');
//  قبلا واسه تکست اریا متغیر گذاشتم

document.querySelector('#deleteBtn').addEventListener('click', function () {
 if (  confirm('are you sure?') == true) {
  removableDiv.remove()
 }
})

//active & disabled state...............................

let navbarBtns = document.querySelectorAll('.navbarBtn');

navbarBtns.forEach( button => {
  button.addEventListener('click', () => {
document.querySelector('.active')?.classList.remove('active');
  button.classList.add('active');
})
});

// switching between tabs...............................
















// sending info between tabs.............................

// search through notes with loop........................