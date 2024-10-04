import React, { useState } from 'react';
import ReusableTable from '../components/utility/ReusableTable';
import styles from '../assets/styles/patientList.module.css';
import ViewIcon from '../assets/images/eye.svg';
import UploadIcon from '../assets/images/document-upload.svg';
import AddIcon from '../assets/images/AddIcon.svg';
import FilterIcon from '../assets/images/FilterIcon.svg';
import { Alert } from 'antd';
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
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
    notesFile: '/path/to/notes.pdf',
    consentFile: '/path/to/consent.pdf',
    stimReportFile: '/path/to/stim-report.pdf',
    reportDataFile: '/path/to/report-data.pdf',
  },
  
];

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleViewFile = (fileUrl) => {
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      alert('No file available');
    }
  };

  const handleButtonClick = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm)
  );

  const headers = [
    'Patient Name, MR No., Gender',
    'Accession#',
    'Doctor',
    'Notes',
    'Upload Consent',
    'Stim Report',
    'Result',
    'Report Data',
    'Status'
  ];

  const tableData = filteredPatients.map(patient => ({
    ...patient,
    viewIcon: ViewIcon,
    uploadIcon: UploadIcon,
  }));

  return (
    <div>
      <div className={styles.tableContainer} style={{ height: 'calc(100vh - 228px)' }}>
        {alertVisible && <Alert message="Button Clicked" type="success" />}
        <div className='subTitleFont p-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='headerNameCss'>Patient</div>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <div className="search-container">
                <input
                  type="text"
                  className="form-control border"
                  placeholder="Search by Name, Case ID, Accession"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="d-flex">
                <img className={styles.dashBoardIcon} src={AddIcon} alt='Add' onClick={handleButtonClick} />
                <img className={styles.dashBoardIcon} src={FilterIcon} alt='Filter' onClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>

        {/* Use the Reusable Table */}
        <ReusableTable
          headers={headers}
          data={tableData}
          onView={handleViewFile}
        />
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
  );
};

export default PatientList;
