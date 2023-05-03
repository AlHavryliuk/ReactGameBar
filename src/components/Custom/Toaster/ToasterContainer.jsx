import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { select } from 'store/selectors/selectors';

const ToasterContainer = () => {
    const darkMode = useSelector(select.darkMode);

    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={darkMode ? 'dark' : 'light'}

        />

    )
}

export default ToasterContainer