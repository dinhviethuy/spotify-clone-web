import {Col, Row} from "antd";
import PlayMusic from "../../components/PlayMusic/PlayMusic.jsx";

function BottomBody() {
  return (
    <>
      <Row>
        <Col xl={24}>
          <div className='bottom'>
            <PlayMusic/>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default BottomBody