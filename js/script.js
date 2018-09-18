//variable storing all student info
const students = $("li.student-item");

let pages= Math.ceil(students.length/10);
//function that hides all students
function hideStudents(){
  for (let i = 0; i < students.length; i++) {
    students[i].style.display='none';
  }
}

function clearSearch(){
  $("#searchBox").val("");
  loadStudents(1); 
}
//hides al students and then loads 10 students, depending on which paramater is set, the parameter being the number button clicked
function loadStudents(x) {
hideStudents();
let studentsPage = students.slice((x-1) * 10, x * 10);
  for (var i = 0; i < studentsPage.length; i++) {
  studentsPage[i].style.display='';
  }
}
//creates buttons on bottom of page depending on how many items are in the students array, then calls load students passing in the argument based on the number pressed
function createPagination(){
  let ul=document.createElement('ul');
       for(i=0;i<pages;i++)
     {
         let li=document.createElement('li');
         li.innerHTML= "<button onclick= loadStudents("+(i+1)+") class='pages'"+'>'+(i+1)+ "</button>";
         ul.appendChild(li);
     }

     document.getElementById('pagination').appendChild(ul);
}
//creates an input box and search button
function createSearch(){
  let search=document.createElement('input');
  let searchButton=document.createElement('button');
  let clearButton=document.createElement('button');
    search.type = "text";
    search.id="searchBox";
    search.placeholder = "Search for students...";
    searchButton.innerHTML="Search";
    searchButton.onclick=()=> searchStudents();
    clearButton.innerHTML="X";
    clearButton.onclick=()=> clearSearch();
    // search.oninput=()=> searchStudents();--- //This was for live search results but ended up being buggy with what was included
document.getElementById('student-search').appendChild(search);
document.getElementById('student-search').appendChild(searchButton);
document.getElementById('student-search').appendChild(clearButton);
}

function searchStudents(){
let input = document.getElementById("searchBox").value.toLowerCase();
let ele =$("li.student-item h3");
for (var i = 0; i < ele.length; i++) {
  let list = ele[i].innerHTML;

    if (list ===input) {
      students[i].style.display='';
    }
      else{
        students[i].style.display='none';
        }
  }
}

//creates the search elements and functions
createSearch();
//loads the first ten students initially
loadStudents(1);
//creates links at bottom of page
createPagination();
