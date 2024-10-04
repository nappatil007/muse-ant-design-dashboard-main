import React from 'react';
import styles from '../../assets/styles/patientList.module.css';

const ReusableTable = ({ headers, data, onView, onDelete, onChange }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className={styles.patientInfo}>
                  <div style={{ fontWeight: '700' }}>{row.name}</div>
                  <div className={styles.mrInfo}>
                    <a href={`#mr/${row.mrNumber}`}>
                      <b>{row.mrNumber} | {row.gender}</b>
                    </a>
                  </div>
                </div>
              </td>
              <td><b>{row.accession}</b></td>
              <td><b>{row.doctor}</b></td>
              <td>
                <img src={row.viewIcon} alt="View" className={styles.icon} onClick={() => onView(row.notesFile)} />
                <span className={styles.anchorTag}>View</span>
              </td>
              <td>
                <img src={row.uploadIcon} alt="Upload" className={styles.icon} onClick={() => onView(row.consentFile)} />
                <span className={styles.uploadTag}>View</span>
              </td>
              <td>
                <img src={row.uploadIcon} alt="Upload" className={styles.icon} onClick={() => onView(row.stimReportFile)} />
                <span className={styles.uploadTag}>View</span>
              </td>
              <td><b>{row.result}</b></td>
              <td>
                <img src={row.viewIcon} alt="View" className={styles.icon} onClick={() => onView(row.reportDataFile)} />
                <span className={styles.anchorTag}>View</span>
              </td>
              <td>
                <span className={row.status === 'Completed' ? styles.completed : styles.pending}>
                  {row.status}
                </span>
              </td>
              {/* Add more cells for other actions (e.g., delete, edit, etc.) */}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length} className="text-center">No data found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ReusableTable;
