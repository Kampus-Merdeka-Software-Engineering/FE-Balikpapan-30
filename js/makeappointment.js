document.querySelector('#specialist').addEventListener('change', function() {
    const opsi = document.querySelector('#specialist').value;
   
    const json = {
      "CARDIOLOGIST": ["Dr. Ethan Winters, Sp.JP", "Dr. Jill Valentine, Sp.PD, KKV"],
      "ORTHOPEDICS": ["Dr. Johnny Silverhand, Sp.OT", "Dr. Judy Alvarez, Sp.OTM"],
      "NEPHROLOGY": ["Dr. Joel Miller, Sp.PD, KGH", "Dr. Ellie Williams, Sp.PD, KGH"],
      "PULMONOLOGY": ["Dr. Franklin Clinton, Sp.PD, KP", "Dr. Abigail Marston, Sp.P"],
      "PSYCHIATRY": ["Dr. Trevor Philips, Sp.KJ", "Dr. Sadie Adler, Sp.KJ"],
      "RADIOLOGY": ["Dr. Arthur Morgan, Sp.R", "Dr. Lara Croft, Sp.R"]
    }
   
    let res = "";
    const len = json[opsi] ? json[opsi].length : 0; 
   
    for(let i = 0; i < len; i++) {
      res += "<option value='"+ json[opsi][i] + "'>" + json[opsi][i] + "</option>";
    }
   
    document.querySelector("#subopsi").innerHTML = res;
});



// POST - CREATE Method
const nama = document.querySelector('#nama');
const umur = document.querySelector('#age');
const gender = document.querySelector('#gender');
const date = document.querySelector('#date');
const phone = document.querySelector('#phone');
const doctor = document.querySelector('#subopsi');
const reason = document.querySelector('#reason');
const submit = document.querySelector('#submit');


submit.addEventListener('click', () => {

  const data = {
    date: date.value,
    nama: nama.value,
    umur: umur.value,
    gender: gender.value,
    phone: phone.value,
    reason: reason.value,
    doctorName: doctor.value
  }

  fetch('https://be-balikpapan-30-production.up.railway.app/appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.message === 'Success Create Data') {
      window.location.href = 'https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-30/appointment.html'
    } else {
      console.log('Gagal Menambahkan Data..!', data.message);
    }
  })
  .then(result => {
    console.log(result);  
  })
});




