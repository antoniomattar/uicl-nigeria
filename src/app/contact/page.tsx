import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="m-7 flex h-fit flex-wrap justify-center ">
        <div className="card bg-slate-300 shadow-lg">
          <div className="card-body">
            <h2 className="card-title m-auto">Contact Us</h2>
            <p>
              <strong>United Integrated Construction Limited</strong>
              <br />
              10, Ogun Street, Off Adeola Odeku Street,
              <br />
              Victoria Island, Lagos, Nigeria.
              <br />
              <br />
              <strong>Telephone:</strong>
              <a href="tel:+234 1 271 8954">+234 1 271 8954</a>
              <br />
              <strong>E-mail: </strong>
              <a href="mailto: uicl@cc.com">uicl@cc.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
