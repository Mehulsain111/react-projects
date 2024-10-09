export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondar y text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-light">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};