// reactstrap components
import { Container} from "reactstrap";
import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-5 pt-8 pt-md-6 ">
        <Container fluid>
          <div className="header-body">
            Wlecome !!!
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
