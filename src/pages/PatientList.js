import React from 'react'
import styles from '../assets/styles/patientList.module.css';
import ViewIcon from '../assets/images/eye.svg';
import AddIcon from '../assets/images/AddIcon.svg';
import FilterIcon from '../assets/images/FilterIcon.svg';
import UploadIcon from '../assets/images/document-upload.svg';
import { Link } from 'react-router-dom';

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
  },
  {
    name: 'Ralph Edwards',
    mrNumber: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Darlene Robert',
    notes: 'Completed',
    result: 'Released',
    status: 'Completed',
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
  },


  // Add more patients as per the image...
];


const PatientList = () => {
  return (
    <div className={styles.tableContainer}>

      <div className='subTitleFont p-2'>
        <div className='d-flex justify-content-between align-items-center'>

          <div>Patient</div>

          <div className="d-flex flex-wrap gap-2 align-items-center ">
            <div className="search-container">
              <input type="text" className="form-control border" placeholder="Search by Name, Case ID, Accession" />
            </div>
            <div className="d-flex flex-wrap">
                <div  className="row text-decoration-none text-reset">
                      <img className='dashBoardIcon' src={AddIcon} alt='Add' />
                    <img className='dashBoardIcon' src={FilterIcon} alt='Filter' />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-2 p-1 bg-light rounded patientPara px-4">
        <div className="col-lg-3 col-md-6 p-1">
          <div className="form-check p-1 px-2">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              No Transferable Embryos
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="form-check p-1 px-2">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              All Transferable Embryos
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="form-check p-1 px-2">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              Draft Patients
            </label>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 p-1">
          <div className="form-check p-1 px-2">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              International Patients
            </label>
          </div>
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
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>
                <div className={styles.patientInfo}>
                  <div style={{ fontWeight: '800' }}>{patient.name}</div>
                  <div className={styles.mrInfo}>
                    <a href={`#mr/${patient.mrNumber}`}><b>{patient.mrNumber} | {patient.gender}</b></a>
                  </div>
                </div>
              </td>
              <td><b>{patient.accession}</b></td>
              <td><b>{patient.doctor}</b></td>
              <td><img src={ViewIcon} alt="View" className={styles.icon} /><span className={styles.anchorTag}>View</span></td>
              <td><img src={UploadIcon} alt="Upload" className={styles.icon} /><span className={styles.uploadTag}>View</span></td>
              <td><img src={UploadIcon} alt="Upload" className={styles.icon} /><span className={styles.uploadTag}>View</span></td>
              <td><b>{patient.result}</b></td>
              <td><img src={ViewIcon} alt="View" className={styles.icon} /><span className={styles.anchorTag}>View</span></td>
              <td>
                <span className={patient.status === 'Completed' ? styles.completed : styles.pending}>
                  {patient.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientList
