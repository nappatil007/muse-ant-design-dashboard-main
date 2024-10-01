import React from 'react'
import styles from '../assets/styles/patientList.module.css';
import ViewIcon from '../assets/images/eye.svg';
import UploadIcon from '../assets/images/document-upload.svg';

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
                  <div style={{fontWeight: '800'}}>{patient.name}</div>
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
