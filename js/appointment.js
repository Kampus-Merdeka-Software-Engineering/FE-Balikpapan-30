const userTable = document.getElementById('tbody');

fetch('https://be-balikpapan-30-production.up.railway.app/appointment')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.data.length; i++) {
        const tabelRow = document.createElement('tr');
        tabelRow.setAttribute('class', 'userRow');
        userTable.appendChild(tabelRow);
        const userRow = document.getElementsByClassName('userRow');
        userRow[i].innerHTML = `
        <td>${i + 1}</td>
        <td>${data.data[i].nama}</td>
        <td>${data.data[i].umur}</td>
        <td>${data.data[i].doctor.nama}</td>
        <td>${data.data[i].reason}</td>
        <td class="last" id-data="${data.data[i].id}"><img src="../Asset/lihat.png" alt=""></td>
        `
    }

})
.catch(error => {
    console.log(error);
})


// Detail Appointment
const tdElement = document.querySelector('last');
const dataId = tdElement.getAttribute('id-data');

