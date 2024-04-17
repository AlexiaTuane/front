// Alerts.js
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Alerts = ({ variant, message }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {showAlert && (
        <Alert variant={variant} onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>{variant === 'error' ? 'Error' : 'Success'}</Alert.Heading>
          <p>{message}</p>
        </Alert>
      )}
    </div>
  );
};

export default Alerts;
