import React from 'react';
import { useState } from 'react';
import styles from '../assets/styles/patientList.module.css';
import ViewIcon from '../assets/images/eye.svg';
import AddIcon from '../assets/images/AddIcon.svg';
import FilterIcon from '../assets/images/FilterIcon.svg';
import UploadIcon from '../assets/images/document-upload.svg';
import { Alert } from 'antd';
// import fileVIew from '../assets/images/';
import 'bootstrap/dist/css/bootstrap.min.css';

const patients = [
  {
    name: 'Ralph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Cody Fisher',
    notes: 'Completed',
    result: 'Released',
    status: 'Completed',
    notesFile: '/assets/images/viewPdf.pdf', 
    consentFile: './assets/images/viewPdf.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'adolph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Darlene Robert',
    notes: 'Completed',
    result: 'Released',
    status: 'Completed',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
    
  },
  {
    name: 'john Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
    
  },
  {
    name: 'cary Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
    
  },
  {
    name: 'json Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'dolphin Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'stokes dolphin',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'ajay devgan',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'Ralph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'Ralph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  {
    name: 'Ralph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Kathryn Murphy',
    notes: 'Pending',
    result: 'N/A',
    status: 'Pending',
    notesFile: '/path/to/notes.pdf', // Add file URLs
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  }
  

  // Add more patients as per the image...
];


const PatientList = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const handleButtonClick = (e) => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000); // Hide the alert after 3 seconds
  };

  const handleViewFile = (fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      alert('No file available');
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
       
      <div className={styles.tableContainer} style={{height: 'calc(100vh - 228px)'}}>
        {/* Conditionally render the Alert */}
       {alertVisible && <Alert message="Button Clicked" type="success" />}

        <div className='subTitleFont p-2'>
          <div className='d-flex justify-content-between align-items-center'>

            <div className='headerNameCss'>Patient</div>

            <div className="d-flex flex-wrap gap-2 align-items-center ">
              <div className="search-container">
              <input
                  type="text"
                  className="form-control border"
                  placeholder="Search by Name, Case ID, Accession"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="d-flex ">

                <img className={styles.dashBoardIcon} src={AddIcon} alt='Add' onClick={handleButtonClick}/>
                <img className={styles.dashBoardIcon} src={FilterIcon} alt='Filter' onClick={handleButtonClick}/>

              </div>
            </div>
          </div>
        </div>

        <div className="row mx-2 p-1 bg-light rounded patientPara px-4 mb-2">
          <div className="col-3 align-items-center align-content-center align-middle p-1">

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault1" />
            <span className='checkBoxLabel'>
              No Transferable Embryos
            </span>

          </div>
          <div className="col-3 align-items-center align-content-center align-middle p-1">

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault2" />
            <span className='checkBoxLabel'>
              All Transferable Embryos
            </span>

          </div>
          <div className="col-3 align-items-center align-content-center align-middle p-1">

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault3" />
            <span className='checkBoxLabel'>
              Draft Patients
            </span>

          </div>
          <div className="col-3 align-items-center align-content-center align-middle p-1">

            <input className="custom-checkbox" type="checkbox" id="flexCheckDefault4" />
            <span className='checkBoxLabel'>
              International Patients
            </span>

          </div>

        </div>


        <table className={styles.table}>
          <thead>
            <tr>
              <th>Patient Name, MR No., Gender</th>
              <th>Accession#</th>
              <th>Doctor</th>
              <th>Notes</th>
              <th>Upload Consent</th>
              <th>Stim Report</th>
              <th>Result</th>
              <th>Report Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.patientInfo}>
                      <div style={{ fontWeight: '700' }}>{patient.name}</div>
                      <div className={styles.mrInfo}>
                        <a href={`#mr/${patient.mrNumber}`}><b>{patient.mrNumber} | {patient.gender}</b></a>
                      </div>
                    </div>
                  </td>
                  <td><b>{patient.accession}</b></td>
                  <td><b>{patient.doctor}</b></td>
                  <td>
                    <img src={ViewIcon} alt="View" className={styles.icon} onClick={() => handleViewFile(patient.notesFile)} />
                    <span className={styles.anchorTag}>View</span>
                  </td>
                  <td>
                    <img src={UploadIcon} alt="Upload" className={styles.icon} onClick={() => handleViewFile(patient.consentFile)} />
                    <span className={styles.uploadTag}>View</span>
                  </td>
                  <td>
                    <img src={UploadIcon} alt="Upload" className={styles.icon} onClick={() => handleViewFile(patient.stimReportFile)} />
                    <span className={styles.uploadTag}>View</span>
                  </td>
                  <td><b>{patient.result}</b></td>
                  <td>
                    <img src={ViewIcon} alt="View" className={styles.icon} onClick={() => handleViewFile(patient.reportDataFile)} />
                    <span className={styles.anchorTag}>View</span>
                  </td>
                  <td>
                    <span className={patient.status === 'Completed' ? styles.completed : styles.pending}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={`${styles.tableContainer} mt-2`}>
      <div className={styles.footer}>
        <div className={styles.totalContainer}>
          <span>Total :</span>
          <span className={styles.totalNumber}>{patients.length}</span>
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.statusItem}>
            <span className={styles.notStartedIcon}></span>
            <span className={styles.footerIconLabel}>Not started</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.pendingIcon}></span>
            <span className={styles.footerIconLabel}>Pending</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.completedIcon}></span>
            <span className={styles.footerIconLabel}>Completed</span>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default PatientList
