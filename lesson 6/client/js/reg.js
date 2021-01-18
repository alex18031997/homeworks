// получаем данные с формы авторизации

const form = document.querySelector('.form-horizontal');
const btnDefault = document.querySelector('.btn-default');
const error = document.querySelector('#error');
const row = document.querySelector('.row');
const resSec = document.querySelector('#resSec');



form.addEventListener('click', (e) => {
    e.preventDefault();
});

btnDefault.addEventListener('click', (e) => {
    const login = document.querySelector('#inputName').value;
    const pass = document.querySelector('#inputPassword').value;
    const PassСon = document.querySelector('#PassСon').value;
    const DataReg = new Date(Date.now());
    const object = {login, pass, PassСon, DataReg}
    if(pass === '' || login === '' || PassСon === '') {
        error.innerHTML = '* заполните пожалуйста все поля';
        error.classList.remove('hide');
    } else if(pass.length < 8) {
        error.innerHTML = '* пароль должен состоять минимум из 8 символов';
        error.classList.remove('hide');
    } else if (pass !== PassСon) {
        error.innerHTML = '* пароли не совпадают';
        error.classList.remove('hide');
    }

       fetch('http://localhost:3000/reg', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(object)
       }) .then(data => data)
           .then(data => {
               if(data.status === 200){
                   console.log(data.status);
                   row.classList.add('hide');
                   resSec.classList.remove('hide');
               }
           });

});




