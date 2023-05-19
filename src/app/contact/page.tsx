import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="flex h-fit flex-wrap justify-center">
        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Contact Us</h2>
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
              <strong>Email:</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
