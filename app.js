const inputName = document.querySelector('#courseName');
const inputRating = document.querySelector('#courseRating');
const addCourse = document.querySelector('#submitBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const coursesList = document.querySelector('#coursesList');

cancelBtn.addEventListener('click', () => {
  clear();
});

var clear = () => {
  inputName.value = '';
  inputRating.value = '';
};

addCourse.addEventListener('click', () => {
  var enteredName = inputName.value;
  var enteredRating = inputRating.value;

  if (
    enteredName.trim().lenght <= 0 ||
    enteredRating.trim().lenght <= 0 ||
    enteredRating <= 0
  ) {
    const alert = document.createElement('ion-alert');
    // alert.cssClass = 'my-custom-class';
    alert.header = 'Error Message';
    // alert.subHeader = 'Subtitle';
    alert.message = 'Please Enter a Valid Input VAlue.';
    alert.buttons = ['Okay'];

    document.body.appendChild(alert);
    return alert.present();
  }
  //   console.log(enteredName + ' : ' + enteredRating);
  var printText = document.createElement('ion-item');
  //   debugger;
  printText.textContent =
    'Course Name ' + enteredName + ' : Rating Star ' + enteredRating;
  coursesList.appendChild(printText);
  clear();
});
