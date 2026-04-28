// ========== DATA STORAGE ==========
let patients = JSON.parse(localStorage.getItem('patients')) || [];
let queue = JSON.parse(localStorage.getItem('queue')) || [];
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
let nextId = parseInt(localStorage.getItem('nextId')) || 1;

// Sample data for demo
function initializeSampleData() {
    if (patients.length === 0) {
        const samplePatients = [
            { id: 1, name: "Jean Cloude", age: 45, gender: "male", phone: "0788123456", status: "waiting", checkinTime: new Date().toLocaleTimeString(), date: new Date().toISOString(), reason: "General Checkup", patientType: "returning" },
            { id: 2, name: "Mukamana Benita", age: 32, gender: "female", phone: "0788234567", status: "waiting", checkinTime: new Date().toLocaleTimeString(), date: new Date().toISOString(), reason: "Follow-up", patientType: "returning" },
            { id: 3, name: "Uwimana Erice", age: 50, gender: "male", phone: "0788345678", status: "waiting", checkinTime: new Date().toLocaleTimeString(), date: new Date().toISOString(), reason: "Consultation", patientType: "new" },
            { id: 4, name: "Niyonsaba Marie", age: 29, gender: "female", phone: "0788456789", status: "checked", checkinTime: new Date().toLocaleTimeString(), date: new Date().toISOString(), reason: "Vaccination", patientType: "returning" },
            { id: 5, name: "Habimana John", age: 60, gender: "male", phone: "0788567890", status: "checked", checkinTime: new Date().toLocaleTimeString(), date: new Date().toISOString(), reason: "Emergency", patientType: "new" }
        ];
        patients = samplePatients;
        queue = samplePatients.filter(p => p.status === "waiting");
        nextId = 6;
        saveAllData();
    }
}

// Save all data
function saveAllData() {
    localStorage.setItem('patients', JSON.stringify(patients));
    localStorage.setItem('queue', JSON.stringify(queue));
    localStorage.setItem('appointments', JSON.stringify(appointments));
    localStorage.setItem('nextId', nextId);
}

// ========== CHECK-IN FUNCTION ==========
function addPatient() {
    const name = document.getElementById('name')?.value.trim();
    const age = document.getElementById('age')?.value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const phone = document.getElementById('phone')?.value || "";
    const reason = document.getElementById('reason')?.value || "General Checkup";
    const patientType = document.querySelector('input[name="patientType"]:checked')?.value || "new";

    if (!name || !age) {
        alert("Please enter name and age!");
        return;
    }

    const newPatient = {
        id: nextId++,
        name: name,
        age: parseInt(age),
        gender: gender,
        phone: phone,
        status: "waiting",
        checkinTime: new Date().toLocaleTimeString(),
        date: new Date().toISOString(),
        reason: reason,
        patientType: patientType
    };

    patients.unshift(newPatient);
    queue.unshift(newPatient);
    saveAllData();

    // Clear form
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    if (document.getElementById('phone')) document.getElementById('phone').value = "";
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    if (document.getElementById('reason')) document.getElementById('reason').value = "General Checkup";

    alert(`✅ ${name} has been checked in successfully!`);
    
    // Refresh all displays
    refreshDashboard();
    refreshPatientsTable();
    refreshQueueTable();
    refreshAppointmentsTable();
    updateQueueStats();
}

// ========== CHECK-IN / CHECK-OUT ==========
function checkIn(id) {
    const patient = patients.find(p => p.id === id);
    if (patient) {
        patient.status = "checked in";
        queue = queue.filter(q => q.id !== id);
        saveAllData();
        refreshDashboard();
        refreshPatientsTable();
        refreshQueueTable();
        updateQueueStats();
    }
}

function removeFromQueue(id) {
    queue = queue.filter(q => q.id !== id);
    const patient = patients.find(p => p.id === id);
    if (patient) patient.status = "checked in";
    saveAllData();
    refreshDashboard();
    refreshPatientsTable();
    refreshQueueTable();
    updateQueueStats();
}

// ========== DASHBOARD ==========
function refreshDashboard() {
    const totalPatients = patients.length;
    const waitingCount = queue.filter(q => q.status === "waiting").length;
    const checkedCount = patients.filter(p => p.status === "checked in").length;
    const todayCount = patients.filter(p => {
        const today = new Date().toDateString();
        const patientDate = new Date(p.date).toDateString();
        return patientDate === today;
    }).length;

    const totalElem = document.getElementById('totalPatients');
    const waitingElem = document.getElementById('waitingCount');
    const checkedElem = document.getElementById('checkedCount');
    const todayElem = document.getElementById('todayCount');

    if (totalElem) totalElem.innerText = totalPatients;
    if (waitingElem) waitingElem.innerText = waitingCount;
    if (checkedElem) checkedElem.innerText = checkedCount;
    if (todayElem) todayElem.innerText = todayCount;

    // Recent patients
    const recentBody = document.getElementById('recentTable');
    if (recentBody) {
        recentBody.innerHTML = patients.slice(0, 5).map((p, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td>${p.name}</td>
                <td>${p.age}</td>
                <td><span class="status-${p.status === 'waiting' ? 'waiting' : 'checked'}">${p.status}</span></td>
                <td>${p.checkinTime || '-'}</td>
            </tr>
        `).join('');
    }

    // Queue preview
    const queuePreview = document.getElementById('queuePreview');
    if (queuePreview) {
        queuePreview.innerHTML = queue.slice(0, 5).map((p, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td>${p.name}</td>
                <td>${p.age}</td>
                <td><span class="status-waiting">waiting</span></td>
            </tr>
        `).join('');
    }
}

// ========== PATIENTS TABLE (with pagination) ==========
let currentPage = 1;
const itemsPerPage = 10;

function refreshPatientsTable() {
    const searchTerm = document.getElementById('searchPatients')?.value.toLowerCase() || "";
    let filtered = patients.filter(p => p.name.toLowerCase().includes(searchTerm));
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginated = filtered.slice(start, end);
    
    const tbody = document.getElementById('patientsTable');
    if (tbody) {
        tbody.innerHTML = paginated.map((p, idx) => `
            <tr>
                <td>${start + idx + 1}</td>
                <td>${p.name}</td>
                <td>${p.age}</td>
                <td>${p.gender || '-'}</td>
                <td>${p.phone || '-'}</td>
                <td><span class="status-${p.status === 'waiting' ? 'waiting' : 'checked'}">${p.status}</span></td>
                <td>${new Date(p.date).toLocaleDateString()}</td>
            </tr>
        `).join('');
    }
    
    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) {
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        pageInfo.innerText = `Page ${currentPage} of ${totalPages || 1}`;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        refreshPatientsTable();
    }
}

function nextPage() {
    const searchTerm = document.getElementById('searchPatients')?.value.toLowerCase() || "";
    const filtered = patients.filter(p => p.name.toLowerCase().includes(searchTerm));
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        refreshPatientsTable();
    }
}

// ========== QUEUE TABLE ==========
function refreshQueueTable() {
    const tbody = document.getElementById('queueTable');
    if (tbody) {
        tbody.innerHTML = queue.map((p, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td>${p.name}</td>
                <td>${p.age}</td>
                <td>${p.reason || '-'}</td>
                <td><span class="status-waiting">waiting</span></td>
                <td>${p.checkinTime || '-'}</td>
                <td>
                    <button class="action-btn" onclick="removeFromQueue(${p.id})">✓ Check In</button>
                </td>
            </tr>
        `).join('');
    }
}

function refreshQueue() {
    refreshQueueTable();
    updateQueueStats();
}

function clearQueue() {
    if (confirm("Are you sure you want to clear all waiting queue?")) {
        queue = [];
        patients.forEach(p => {
            if (p.status === "waiting") p.status = "checked in";
        });
        saveAllData();
        refreshQueueTable();
        refreshDashboard();
        refreshPatientsTable();
        updateQueueStats();
    }
}

function updateQueueStats() {
    const waitingSpan = document.getElementById('queueWaiting');
    const checkedSpan = document.getElementById('queueChecked');
    if (waitingSpan) waitingSpan.innerText = queue.length;
    if (checkedSpan) checkedSpan.innerText = patients.filter(p => p.status === "checked in").length;
}

// ========== APPOINTMENTS ==========
function refreshAppointmentsTable() {
    const tbody = document.getElementById('appointmentsTable');
    if (tbody) {
        tbody.innerHTML = appointments.map((a, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td>${a.name}</td>
                <td>${a.date}</td>
                <td>${a.time}</td>
                <td><span class="status-waiting">scheduled</span></td>
                <td><button class="action-btn" onclick="cancelAppointment(${a.id})">Cancel</button></td>
            </tr>
        `).join('');
    }
}

function showAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    if (form) form.classList.remove('hidden');
}

function hideAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    if (form) form.classList.add('hidden');
}

function addAppointment() {
    const name = document.getElementById('apptName')?.value;
    const date = document.getElementById('apptDate')?.value;
    const time = document.getElementById('apptTime')?.value;
    if (!name || !date || !time) {
        alert("Please fill all fields");
        return;
    }
    appointments.push({ id: Date.now(), name, date, time });
    saveAllData();
    refreshAppointmentsTable();
    hideAppointmentForm();
    document.getElementById('apptName').value = "";
    document.getElementById('apptDate').value = "";
    document.getElementById('apptTime').value = "";
}

function cancelAppointment(id) {
    appointments = appointments.filter(a => a.id !== id);
    saveAllData();
    refreshAppointmentsTable();
}

// ========== THEME ==========
function setMode(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setMode(savedTheme);
}

// ========== DATA MANAGEMENT ==========
function exportData() {
    const data = { patients, queue, appointments };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'brightcare_data.json';
    a.click();
    URL.revokeObjectURL(url);
}

function clearAllData() {
    if (confirm("⚠️ WARNING: This will delete ALL data. Are you sure?")) {
        localStorage.clear();
        patients = [];
        queue = [];
        appointments = [];
        nextId = 1;
        initializeSampleData();
        saveAllData();
        location.reload();
    }
}

// ========== DATE/TIME ==========
function updateDateTime() {
    const datetimeElem = document.getElementById('datetime');
    if (datetimeElem) {
        const now = new Date();
        datetimeElem.innerText = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    }
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeSampleData();
    loadTheme();
    refreshDashboard();
    refreshPatientsTable();
    refreshQueueTable();
    refreshAppointmentsTable();
    updateQueueStats();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Search functionality
    const searchInput = document.getElementById('searchPatients');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentPage = 1;
            refreshPatientsTable();
        });
    }
});