import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";

import MyNavbar from "../components/my-navbar";

export default function Home() {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="logo.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="font-weight-bold mb-0">
                  1234.mn - Онлайн видео сургалт
                </h5>
                <p className="welcome-text">
                  Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн
                  сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>

        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 21
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      JAMstack архитектурын тухай
                    </Card.Title>
                    <Card.Text>Статик сайт</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 2
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/user/erondu/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Микросэрвис орчин үед
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 2
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190727/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Монолотик архитектур
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 2
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
}