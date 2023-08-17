import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="m-7 flex h-fit flex-wrap justify-center p-10 ">
        <div className="card bg-slate-300 shadow-lg">
          <div className="card-body">
            <h2 className="card-title m-auto text-4xl">Contact Us</h2>
            <p>
              <strong>United Integrated Construction Limited Address 📍</strong>
              <br />
              239 Kofo Abayomi St <br /> Victoria Island 106104 <br /> Lagos,
              Nigeria 🇳🇬
              <br />
              <br />
              <strong>Telephone 📱: </strong>
              <a href="tel:+234 805 800 9800"> +234 805 800 9800</a>
              <br />
              <strong>E-mail 📫: </strong>
              <a href="mailto: uicl@cc.com">info@uicl.cc</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
