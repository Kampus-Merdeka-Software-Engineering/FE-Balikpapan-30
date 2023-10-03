document.querySelector('#specialist').addEventListener('change', function() {
    const opsi = document.querySelector('#specialist').value;
   
    const json = {
      "CARDIOLOGIST": ["Dr. Ethan Winters, Sp.JP", "Dr. Jill Valen, Sp.PD, KKV"],
      "ORTHOPEDICS": ["Dr. Johnny Smith, Sp.OT", "Dr. Judy Alvarez, Sp.OTM"],
      "NEPHROLOGY": ["Dr. Joel Miller, Sp.PD, KGH", "Dr. Ellie White, Sp.PD, KGH"],
      "PULMONOLOGY": ["Dr. Franklin Clint, Sp.PD, KP", "Dr. Abigail Marston, Sp.P"],
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