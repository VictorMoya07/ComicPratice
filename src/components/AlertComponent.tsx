
import { Alert } from '@mui/material'
import useAlert from "../hooks/useAlert";

const AlertComponent = () => {
  const {alert} = useAlert()
  return (
    <Alert severity={alert.type}>{alert.message}</Alert>
  )
}

export default AlertComponent