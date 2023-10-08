// Close popup
function closeButton() {
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    })
}


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
        <td><img class="detail" data-id="${data.data[i].id}" src="https://img2.pngdownload.id/20180727/wcl/kisspng-logo-eye-eye-symbol-5b5b71026a50a0.4980465915327193624355.jpg" width="30" height="30" alt=""></td>
        `
        detailAppointment()
    }

})
.catch(error => {
    console.log(error);
})




// Detail Appointment
const infoAppointment = document.querySelector('.infoAppointment');
function detailAppointment() {
    const lihatAppointment = document.querySelectorAll('.detail');
    lihatAppointment.forEach((e) => {
        e.addEventListener('click', function() {
            // Pop Up
            const popup = document.querySelector('.popup');
            popup.style.display = 'block';
            closeButton()

            // Get Id
            const dataId = this.getAttribute('data-id');
            
            // Data
            fetch(`https://be-balikpapan-30-production.up.railway.app/appointment/${dataId}`)
            .then(response => response.json())
            .then(data => {
                const Data = data.data;
                infoAppointment.innerHTML = `
                <div class="detailInfoAppointment">
                    <h4>Date</h4>
                    <p>: ${Data.date}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Name</h4>
                    <p>: ${Data.nama}</p>
                </div>  
                <div class="detailInfoAppointment">
                    <h4>Age</h4>
                    <p>: ${Data.umur}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Gender</h4>
                    <p>: ${Data.gender}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Phone</h4>
                    <p>: ${Data.phone}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Specialist</h4>
                    <p>: ${Data.doctor.specialist}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Doctor</h4>
                    <p>: ${Data.doctor.nama}</p>
                </div>
                <div class="detailInfoAppointment">
                    <h4>Reason</h4>
                    <p>: ${Data.reason}</p>
                </div>
                `
            })
        })
    })
}
