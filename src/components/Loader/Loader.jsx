import { HashLoader } from 'react-spinners';
import { LoaderMain } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderMain>
      {/* <RingLoader color="#36d7b7" /> */}
      <HashLoader color="#36d7b7" />
    </LoaderMain>
  );
};

export default Loader;
