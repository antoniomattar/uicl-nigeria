import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="flex h-fit flex-wrap justify-center">
        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="card-title m-auto text-center">About Us</h2>
            <p>
              <a className=" italic">United Integrated Construction Limited</a>
              (UICL) is a building and construction firm with experience of
              working on selective residential, commercial and educational new
              build projects. UICL has been helping to build enduring
              partnerships in Nigeria since 2003 and the company has gained a
              wealth of experience from the wide-ranging, yet carefully selected
              choice of projects undertaken. We have built a reputation within
              the construction industry for our dedicated approach and our
              commitment to quality, honesty and reliability. To do this with
              the success that we have, UICL depends on a number of professional
              disciplines including architecture and design, civil engineering,
              construction, mechanical and electrical engineering and general
              management. For our highly motivated professional team, the client
              always comes first and we embrace projects and opportunities with
              eagerness, creativity and enthusiasm.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
