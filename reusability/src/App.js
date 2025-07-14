import './App.css';
// import  Count from './useref'
import Button from './Badges/Button';
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";
import SingleLineBanners from './Banners/Banners'


function App() {
  return (
    <>
      {/* <Button color={"green"} shape={"rounded"} /> */}

      <SingleLineBanners
        message="Congratulations! Congratulations Congratulations Congratulations Congratulations! Congratulations Congratulations Congratulations Congratulations! Congratulations Congratulations Congratulations"
        icon={<CheckCircle></CheckCircle>}
      ></SingleLineBanners>
    </>
  );
}

export default App;
